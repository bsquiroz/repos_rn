import React from 'react'
import {
	StyleProp,
	StyleSheet,
	Text,
	TouchableOpacity,
	ViewStyle
} from 'react-native'

interface Props {
	text: string
	style?: StyleProp<ViewStyle>
	onPress: () => void
}

export const ButtonC = ({ text, onPress, style = {} }: Props) => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={onPress}
			style={{
				...styles.button,
				...(style as any)
			}}
		>
			<Text>{text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
		borderWidth: 3,
		borderColor: '#35589A'
	}
})
