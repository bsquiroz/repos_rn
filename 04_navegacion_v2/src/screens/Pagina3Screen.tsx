import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({ navigation }: Props) => {
	const handlePageBefore = () => {
		navigation.navigate('Pagina2')
	}

	const handlePageAfter = () => {
		navigation.navigate('Pagina4')
	}
	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Estas en la pagina 3</Text>
			<Button title='Ir a la pagina 4' onPress={handlePageAfter} />
			<Button title='Volver a la pagina 2' onPress={handlePageBefore} />
			<Button
				title='Ir a la primer pagina'
				onPress={() => navigation.popToTop()}
			/>
		</View>
	)
}
