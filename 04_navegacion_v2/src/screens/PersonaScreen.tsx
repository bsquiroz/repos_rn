import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useAuthContext } from '../hooks/useAuthContext'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/AppTheme'

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({ route, navigation }: Props) => {
	const params = route.params

	const {
		changeNameUser,
		authState: { userName }
	} = useAuthContext()

	useEffect(() => {
		navigation.setOptions({
			title: params.name
		})
	}, [])

	useEffect(() => {
		if (userName) changeNameUser(params.name)
	}, [])

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Estas en persona</Text>
			<Text>
				Nombre: {params.name} - Id: {params.id}
			</Text>
		</View>
	)
}
