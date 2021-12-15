import React, { useState } from 'react'
import { ActivityIndicator, Animated, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

interface Props {
	uri: string
	style?: Object
}

export const FadeInImage = ({ uri, style }: Props) => {
	const { opacity, fadeIn } = useAnimation()

	const [isLoading, setIsLoading] = useState(true)

	const handleOnLoadEnd = () => {
		fadeIn()
		setIsLoading(false)
	}
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			{isLoading && (
				<ActivityIndicator
					size={30}
					color='#000'
					style={{ position: 'absolute' }}
				/>
			)}
			<Animated.Image
				source={{ uri }}
				onLoadEnd={handleOnLoadEnd}
				style={{
					...style,
					opacity
				}}
			/>
		</View>
	)
}
