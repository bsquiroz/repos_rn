import { useRef } from 'react'
import { Animated, Easing } from 'react-native'

export const useAnimation = () => {
	const opacity = useRef(new Animated.Value(0)).current
	const position = useRef(new Animated.Value(0)).current

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

	const startMovingPosition = (
		initPosition: number,
		duration: number = 1000
	) => {
		position.setValue(initPosition)

		Animated.timing(position, {
			toValue: 0,
			duration,
			useNativeDriver: true,
			easing: Easing.bounce
		}).start()
	}
	return {
		opacity,
		position,
		fadeIn,
		fadeOut,
		startMovingPosition
	}
}
