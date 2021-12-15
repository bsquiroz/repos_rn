import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/AppTheme'

interface Props {
	handleScreen: (page: string) => void
	title: string
	page: string
	iconName: string
}

export const ButtonDrawer = ({
	handleScreen,
	title,
	page,
	iconName
}: Props) => {
	return (
		<TouchableOpacity
			style={styles.menuBoton}
			onPress={() => handleScreen(page)}
		>
			<Text>
				<Icon name={iconName} size={30} color='#fff' />
			</Text>
			<Text style={styles.titleMenuContainer}>{title}</Text>
		</TouchableOpacity>
	)
}
