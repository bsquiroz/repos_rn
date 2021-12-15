import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useAuthContext } from '../hooks/useAuthContext'
import { colores } from '../theme/AppTheme'

interface Props {
	nameIcon: string
}

export const TouchableIcon = ({ nameIcon }: Props) => {
	const { changeFavIcon } = useAuthContext()
	return (
		<TouchableOpacity onPress={() => changeFavIcon(nameIcon)}>
			<Icon name={nameIcon} size={100} color={colores.primary} />
		</TouchableOpacity>
	)
}
