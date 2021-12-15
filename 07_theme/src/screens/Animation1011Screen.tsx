import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'

import { IconButtonLeft } from '../components/IconButtonLeft'
import { useAnimation } from '../hooks/useAnimation'
import { globalStyles } from '../theme/appTheme'

export const Animation1011Screen = () => {
	const { startMovingPosition, position, fadeIn, fadeOut, opacity } =
		useAnimation()

	return (
		<View style={{ flex: 1, ...globalStyles.globalMargin }}>
			<IconButtonLeft />
			<HeaderTitle text='Animation 1011 Screen' />
			<View style={styles.container}>
				<Animated.View
					style={{
						...styles.purpleBox,
						opacity: opacity,
						transform: [
							{
								translateY: position
							}
						]
					}}
				/>
				<View style={styles.contentButtons}>
					<Button
						title='fadeIn'
						onPress={() => {
							fadeIn()
							startMovingPosition(-100)
						}}
					/>
					<Button title='fadeOut' onPress={fadeOut} />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	purpleBox: {
		backgroundColor: '#5856D6',
		width: 200,
		height: 200,
		marginBottom: 20
	},
	contentButtons: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
})
