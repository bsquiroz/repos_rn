import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useAuthContext } from '../hooks/useAuthContext'

export const ProtectedScreen = () => {
	const { logOut, user, token } = useAuthContext()
	return (
		<View style={styles.container}>
			<Text style={styles.title}>ProtectedScreen</Text>
			<Button title='logout' color='#5856D6' onPress={logOut} />
			<View style={styles.contentUser}>
				<Text style={styles.subTitle}>Usuario: </Text>
				<Text>{JSON.stringify(user, null, 4)}</Text>
			</View>
			<View>
				<Text style={styles.subTitle}>Token: </Text>
				<Text>{JSON.stringify(token, null, 4)}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 10
	},
	contentUser: {
		width: '100%'
	},
	title: {
		fontSize: 20,
		marginBottom: 20
	},
	subTitle: {
		fontWeight: 'bold'
	}
})
