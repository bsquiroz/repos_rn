import React, { useEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import {
	FlatList,
	RefreshControl,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import { useProductsContext } from '../hooks/useProductsContext'
import { ProductsStackParams } from '../navigator/ProductsNavigator'
import { useAuthContext } from '../hooks/useAuthContext'

interface Props
	extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> {}

export const ProductsScreen = ({ navigation }: Props) => {
	const [isRefreshing, setIsRefreshing] = useState(false)
	const { products, loadProduct } = useProductsContext()
	const { logOut } = useAuthContext()

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity
						activeOpacity={0.5}
						onPress={() =>
							navigation.navigate('DetailsProductScreen', {})
						}
						style={{ marginRight: 10 }}
					>
						<Text>Agregar </Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.5}
						onPress={logOut}
						style={{ marginRight: 10 }}
					>
						<Text>Salir </Text>
					</TouchableOpacity>
				</View>
			)
		})
	}, [])

	const loadProductsFromBackend = async () => {
		setIsRefreshing(true)
		await loadProduct()
		setIsRefreshing(false)
	}

	return (
		<View style={styles.ProductsScreenContainer}>
			<FlatList
				data={products}
				keyExtractor={(p) => p._id}
				renderItem={({ item }) => (
					<TouchableOpacity
						activeOpacity={0.5}
						onPress={() =>
							navigation.navigate('DetailsProductScreen', {
								id: item._id,
								name: item.nombre
							})
						}
					>
						<Text style={styles.ProductsScreenText}>
							{item.nombre}
						</Text>
					</TouchableOpacity>
				)}
				ItemSeparatorComponent={() => (
					<View style={styles.ProductsScreenItemSeparator}></View>
				)}
				refreshControl={
					<RefreshControl
						refreshing={isRefreshing}
						onRefresh={loadProductsFromBackend}
					/>
				}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	ProductsScreenContainer: {
		flex: 1,
		marginHorizontal: 10
	},
	ProductsScreenText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000'
	},
	ProductsScreenItemSeparator: {
		borderBottomWidth: 1,
		marginVertical: 5
	}
})
