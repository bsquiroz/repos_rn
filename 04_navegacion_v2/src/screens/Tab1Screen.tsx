import React from 'react'
import { Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableIcon } from '../components/TouchableIcon'
import { colores, styles } from '../theme/AppTheme'

export const Tab1Screen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.titleScreen}>Tab 1 pantalla</Text>
			<View style={styles.centerContentRow}>
				<TouchableIcon nameIcon='airplane-outline' />
				<TouchableIcon nameIcon='alarm-outline' />
				<TouchableIcon nameIcon='battery-full-outline' />
				<TouchableIcon nameIcon='bicycle-outline' />
				<TouchableIcon nameIcon='calculator-outline' />
				<TouchableIcon nameIcon='bug-outline' />
				<TouchableIcon nameIcon='color-palette-outline' />
				<TouchableIcon nameIcon='mail-unread-outline' />
				<TouchableIcon nameIcon='key-outline' />
			</View>
		</View>
	)
}
