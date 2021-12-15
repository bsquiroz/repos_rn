import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useThemeContext } from '../context/themeContext/useThemeContext'

export const IconButtonLeft = () => {
	const {
		theme: { colors }
	} = useThemeContext()
	const { goBack } = useNavigation()
	return (
		<TouchableOpacity onPress={goBack}>
			<Icon name='chevron-back-outline' color={colors.text} size={40} />
		</TouchableOpacity>
	)
}
