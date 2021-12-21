import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { ButtonC } from '../components/ButtonC'
import { usePermissionsContext } from '../hooks/usePermissionsContext'

export const HomeScreen = () => {
	const { permission, askLocationPermission } = usePermissionsContext()
	return (
		<View style={styles.container}>
			<Text>Te voy a pedir los pinches permisos, bro</Text>

			<ButtonC onPress={askLocationPermission} text='Dar permisos' />
			<Text>{JSON.stringify(permission, null, 4)}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
