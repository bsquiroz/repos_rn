import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

// import { StackScreenProps } from '@react-navigation/stack'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { colores, styles } from '../theme/AppTheme'

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({ navigation }: Props) => {
	const handlePageAfter = () => {
		navigation.navigate('Pagina2')
	}

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
					<Icon name='menu-outline' size={50} color='#fff' />
				</TouchableOpacity>
			)
		})
	}, [])

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Estas en la pagina 1</Text>

			<Button title='Ir a la pagina 2' onPress={handlePageAfter} />

			<View>
				<Text style={styles.SubTitle}>Navegar con argumentos</Text>

				<TouchableOpacity
					onPress={() =>
						navigation.navigate('PersonaScreen', {
							id: 1,
							name: 'Brayan muñoz'
						})
					}
				>
					<View
						style={{
							...styles.botonPersona,
							backgroundColor: '#c07fca'
						}}
					>
						<Text style={styles.textBotonPersona}>
							Brayan muñoz
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate('PersonaScreen', {
							id: 2,
							name: 'Stiven quiroz'
						})
					}
				>
					<View
						style={{
							...styles.botonPersona,
							backgroundColor: '#4C0070'
						}}
					>
						<Text style={styles.textBotonPersona}>
							Stiven quiroz
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}
