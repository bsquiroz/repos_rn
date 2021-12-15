import React, { useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useFade } from '../hooks/useFade'
import { useGradientContext } from '../hooks/useGradientContext'

interface Props {
	children: JSX.Element | JSX.Element[]
}

export const GradientBg = ({ children }: Props) => {
	const { colors, prevColors, handleSetPrevColors } = useGradientContext()

	const { fadeIn, fadeOut, opacity } = useFade()

	useEffect(() => {
		fadeIn(() => {
			handleSetPrevColors(colors)
			fadeOut()
		})
	}, [colors])

	return (
		<View style={{ flex: 1 }}>
			<LinearGradient
				colors={[prevColors.primary, prevColors.secondary, '#FFF']}
				style={{ ...StyleSheet.absoluteFillObject }}
				start={{ x: 0.1, y: 0.1 }}
				end={{ x: 0.5, y: 0.7 }}
			/>
			<Animated.View
				style={{ ...StyleSheet.absoluteFillObject, opacity }}
			>
				<LinearGradient
					colors={[colors.primary, colors.secondary, '#FFF']}
					style={{ ...StyleSheet.absoluteFillObject }}
					start={{ x: 0.1, y: 0.1 }}
					end={{ x: 0.5, y: 0.7 }}
				/>
			</Animated.View>
			{children}
		</View>
	)
}
