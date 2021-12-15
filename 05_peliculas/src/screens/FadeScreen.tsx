import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { useFade } from '../hooks/useFade'

export const FadeScreen = () => {
	const { opacity, fadeIn, fadeOut } = useFade()

	const contentBox = {
		...styles.contentBox,
		opacity: opacity
	}

	return (
		<View style={styles.containerFade}>
			<Animated.View style={contentBox} />
			<Button title='fadeIn' onPress={fadeIn} />
			<Button title='fadeOut' onPress={fadeOut} />
		</View>
	)
}

const styles = StyleSheet.create({
	containerFade: {
		flex: 1,
		backgroundColor: '#041C32',
		justifyContent: 'center',
		alignItems: 'center'
	},
	contentBox: {
		backgroundColor: '#781D42',
		width: 150,
		height: 150,
		borderColor: '#fff',
		borderWidth: 5
	}
})
