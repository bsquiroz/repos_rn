import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useNavigation } from '@react-navigation/core'

export const Pagina2Screen = () => {
	const navigator = useNavigation()

	useEffect(() => {
		navigator.setOptions({
			title: 'Hola que hace Pg2'
		})
	}, [])

	const handlePageBefore = () => {
		navigator.navigate('Pagina3')
	}

	const handlePageAfter = () => {
		navigator.navigate('Pagina1')
	}

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Estas en la pagina 2</Text>
			<Button title='Ir a la pagina 3' onPress={handlePageBefore} />
			<Button title='Volver a la pagina 1' onPress={handlePageAfter} />
		</View>
	)
}
