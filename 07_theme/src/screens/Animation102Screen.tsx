import React, { useRef } from 'react'
import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { IconButtonLeft } from '../components/IconButtonLeft'
import { globalStyles } from '../theme/appTheme'

export const Animation102Screen = () => {
	const pan = useRef(new Animated.ValueXY()).current

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: Animated.event(
			[
				null,
				{
					dx: pan.x, // x,y are Animated.Value
					dy: pan.y
				}
			],
			{ useNativeDriver: false }
		),
		onPanResponderRelease: () => {
			Animated.spring(
				pan, // Auto-multiplexed
				{ toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
			).start()
		}
	})

	return (
		<View style={{ flex: 1, ...globalStyles.globalMargin }}>
			<IconButtonLeft />
			<HeaderTitle text='Animation 102 Screen' />

			<View style={globalStyles.containerContent}>
				<Animated.View
					{...panResponder.panHandlers}
					style={[pan.getLayout(), styles.purpleBox]}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	purpleBox: {
		backgroundColor: '#064663',
		width: 200,
		height: 200,
		borderRadius: 10
	}
})
