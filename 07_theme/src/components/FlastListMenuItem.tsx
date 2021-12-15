import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces'
import { useNavigation } from '@react-navigation/native'
import { useThemeContext } from '../context/themeContext/useThemeContext'

interface Props {
	menuItem: MenuItem
}

export const FlastListMenuItem = ({
	menuItem: { component, icon, name }
}: Props) => {
	const { navigate } = useNavigation()

	const {
		theme: { colors }
	} = useThemeContext()

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={() => navigate(component as any)}
		>
			<View style={styles.container}>
				<Icon name={icon} size={20} color={colors.primary} />
				<Text style={{ ...styles.itemText, color: colors.text }}>
					{name}
				</Text>
				{/* <Text style={{ ...styles.itemText, color: colors.text }}>
					{name}
				</Text> */}
				<View style={{ flex: 1 }}></View>
				<Icon
					name='caret-forward-outline'
					size={20}
					color={colors.primary}
				/>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	itemText: {
		marginLeft: 10,
		fontSize: 19
	}
})
