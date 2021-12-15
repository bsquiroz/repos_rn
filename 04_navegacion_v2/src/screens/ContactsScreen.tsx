import React from 'react'
import { Button, Text, View } from 'react-native'
import { useAuthContext } from '../hooks/useAuthContext'

export const ContactsScreen = () => {
	const {
		signIn,
		logout,
		authState: { isLoggedIn }
	} = useAuthContext()
	return (
		<View>
			<Text>Estas en contact screen</Text>
			{!isLoggedIn ? (
				<Button title='sigIn' onPress={signIn} />
			) : (
				<Button title='logout' onPress={logout} />
			)}
		</View>
	)
}
