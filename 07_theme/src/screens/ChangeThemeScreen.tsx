import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { useThemeContext } from '../context/themeContext/useThemeContext'
import { colors } from '../theme/appTheme'

export const ChangeThemeScreen = () => {
	const {
		setDarkTheme,
		setLightTheme,
		theme: { currentTheme }
	} = useThemeContext()

	return (
		<View>
			<HeaderTitle text='Theme app' />

			<TouchableOpacity
				style={{
					backgroundColor: colors.primaryColor,
					height: 50,
					width: 150,
					borderRadius: 10,
					justifyContent: 'center',
					alignItems: 'center'
				}}
				onPress={() => {
					if (currentTheme === 'light') {
						setDarkTheme()
					} else {
						setLightTheme()
					}
				}}
			>
				<Text style={{ color: '#fff', fontSize: 20 }}>
					Light / Dark
				</Text>
			</TouchableOpacity>
		</View>
	)
}
