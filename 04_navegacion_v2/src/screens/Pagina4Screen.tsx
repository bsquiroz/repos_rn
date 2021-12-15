import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> {}

export const Pagina4Screen = ({ navigation }: Props) => {
	const handlePageBefore = () => {
		navigation.navigate('Pagina3')
	}
	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Estas en la pagina 4</Text>
			<Button title='Volver a la pagina 3' onPress={handlePageBefore} />
			<Button
				title='Ir a la primer pagina'
				onPress={() => navigation.popToTop()}
			/>
		</View>
	)
}
