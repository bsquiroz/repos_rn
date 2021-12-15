import React from 'react'
import { Button, Text, View, Alert } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { IconButtonLeft } from '../components/IconButtonLeft'
import { globalStyles } from '../theme/appTheme'

export const AlertScreen = () => {
	const showAlert = () =>
		Alert.alert(
			'Titulo',
			'Este es el mensaje de la alerta',
			[
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'destructive'
				},
				{ text: 'OK', onPress: () => console.log('OK Pressed') }
			],
			{
				cancelable: true
			}
		)

	return (
		<View style={{ ...globalStyles.globalMargin, flex: 1 }}>
			<IconButtonLeft />
			<HeaderTitle text='Alerts' />
			<View style={globalStyles.containerContent}>
				<Text>Estas en alerta</Text>
				<Button title='Mostrar alerta' onPress={showAlert} />
			</View>
		</View>
	)
}
