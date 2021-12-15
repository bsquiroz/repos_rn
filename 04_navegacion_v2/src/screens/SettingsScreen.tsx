import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAuthContext } from '../hooks/useAuthContext'
import { colores } from '../theme/AppTheme'

export const SettingsScreen = () => {
	const { authState } = useAuthContext()

	const insets = useSafeAreaInsets()

	return (
		<View style={{ marginTop: insets.top }}>
			<Text>Estas en configuraciones</Text>
			<Text>{JSON.stringify(insets, null, 4)}</Text>
			<Text>{JSON.stringify(authState, null, 4)}</Text>
			{authState.favoriteIcon && (
				<Icon
					name={authState.favoriteIcon}
					size={100}
					color={colores.primary}
				/>
			)}
		</View>
	)
}
