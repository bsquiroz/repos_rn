import React, { useRef } from 'react'
import { Animated, Button, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { IconButtonLeft } from '../components/IconButtonLeft'
import { useThemeContext } from '../context/themeContext/useThemeContext'
import { globalStyles } from '../theme/appTheme'

export const Animation101Screen = () => {
	const opacity = useRef(new Animated.Value(0)).current

	const {
		theme: { colors }
	} = useThemeContext()

	const fadeIn = () => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true
		}).start()
	}

	const fadeOut = () => {
		Animated.timing(opacity, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true
		}).start()
	}

	return (
		<View style={{ flex: 1, ...globalStyles.globalMargin }}>
			<IconButtonLeft />
			<HeaderTitle text='Animation 101 Screen' />
			<View style={styles.container}>
				<Animated.View
					style={{
						...styles.purpleBox,
						opacity: opacity,
						backgroundColor: colors.primary
					}}
				/>
				<View style={styles.contentButtons}>
					<Button title='fadeIn' onPress={fadeIn} />
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
