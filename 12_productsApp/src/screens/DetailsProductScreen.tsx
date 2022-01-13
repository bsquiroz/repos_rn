import React, { useEffect, useState } from 'react'

import { StackScreenProps } from '@react-navigation/stack'
import {
	Alert,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View
} from 'react-native'

import { Picker } from '@react-native-picker/picker'
import {
	ImagePickerResponse,
	launchCamera,
	launchImageLibrary
} from 'react-native-image-picker'

import { ProductsStackParams } from '../navigator/ProductsNavigator'
import { Spacing } from '../components/Spacing'
import { Button } from '../components/Button'
import { useCategories } from '../hooks/useCategories'
import { Loading } from '../components/Loading'
import { useForm } from '../hooks/useForm'
import { useProductsContext } from '../hooks/useProductsContext'

interface Props
	extends StackScreenProps<ProductsStackParams, 'DetailsProductScreen'> {}

export const DetailsProductScreen = ({ route, navigation }: Props) => {
	const {
		params: { name = undefined, id = '' }
	} = route

	const {
		loadProductById,
		addProduct,
		updateProduct,
		deleteProduct,
		uploadImage
	} = useProductsContext()

	const { categories, isLoading } = useCategories()

	const { categoria_id, nombre, img, onChange, setFormValues, form } =
		useForm({
			_id: id,
			categoria_id: '',
			nombre: name,
			img: ''
		})

	useEffect(() => {
		navigation.setOptions({
			title: name || 'Nuevo producto'
		})
	}, [])

	useEffect(() => {
		loadProduct()
	}, [])

	const loadProduct = async () => {
		if (id.length === 0) return
		const res = await loadProductById(id)
		setFormValues({
			_id: id,
			categoria_id: res.categoria._id,
			img: res.img || '',
			nombre
		})
	}

	const handleSaveOrUpdate = () => {
		if (nombre?.trim() === '') {
			return Alert.alert(
				'Formulario incorrecto',
				'Todos los campos son necesarios',
				[
					{
						text: 'OK'
					}
				]
			)
		}

		if (id.length > 0) {
			updateProduct(categoria_id, nombre!, id)
			navigation.goBack()
		} else {
			const auxCategoriaId = categoria_id || categories[0]._id
			addProduct(auxCategoriaId, nombre!)
			navigation.goBack()
		}
	}

	const handleRemove = () => {
		deleteProduct(id)
		navigation.goBack()
	}

	const [auxUrl, setAuxUrl] = useState<string>()

	const handleCamara = () => {
		launchCamera({ mediaType: 'photo', quality: 0.5 }, (res) =>
			repeatImagePicker(res)
		)
	}

	const handleGaleria = () => {
		launchImageLibrary({ mediaType: 'photo', quality: 0.5 }, (res) =>
			repeatImagePicker(res)
		)
	}

	function repeatImagePicker(res: ImagePickerResponse) {
		if (res.didCancel) return
		if (!res.assets![0].uri) return
		setAuxUrl(res.assets![0].uri)
		uploadImage(res.assets![0], id)
	}

	return (
		<View style={styles.container}>
			<ScrollView>
				<View>
					<Text style={styles.label}>Nombre del producto</Text>
					<TextInput
						placeholder='producto'
						style={styles.textInput}
						onChangeText={(value) => onChange(value, 'nombre')}
						value={nombre}
					/>
				</View>
				<Spacing />
				<View>
					<Text style={styles.label}>Seleccione la categoria</Text>
					{isLoading ? (
						<Loading />
					) : (
						<Picker
							selectedValue={categoria_id}
							onValueChange={(value) =>
								onChange(value, 'categoria_id')
							}
							style={styles.textInputSelect}
						>
							{categories.map((category) => (
								<Picker.Item
									label={category.nombre}
									value={category._id}
									key={category._id}
								/>
							))}
						</Picker>
					)}
				</View>
				<Spacing />
				<Button
					handleButton={handleSaveOrUpdate}
					iconButton={
						id.length > 0 ? 'create-outline' : 'save-outline'
					}
					textButton={id.length > 0 ? 'Actualizar' : 'Guardar'}
				/>
				<Spacing />
				{id.length > 0 && (
					<View style={styles.contentButtons}>
						<Button
							handleButton={handleCamara}
							iconButton='camera-outline'
							textButton='Camara'
						/>
						<Button
							handleButton={handleGaleria}
							iconButton='apps-outline'
							textButton='Galeria'
						/>
						<Button
							handleButton={handleRemove}
							iconButton='trash-outline'
							textButton='Eliminar'
							colorBtn='red'
						/>
					</View>
				)}

				<Spacing />
				{img.length > 0 && !auxUrl ? (
					<Image
						source={{ uri: img }}
						style={{ width: '100%', height: 300 }}
					/>
				) : (
					<Image
						source={{ uri: auxUrl }}
						style={{ width: '100%', height: 300 }}
					/>
				)}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
		marginHorizontal: 20
	},
	label: {
		fontSize: 18
	},
	textInput: {
		borderWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 20,
		borderColor: '#5856D6',
		height: 50
	},
	textInputSelect: {},
	contentButtons: {
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap'
	}
})
