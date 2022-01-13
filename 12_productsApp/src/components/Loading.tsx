import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const Loading = () => {
	return (
		<View>
			<ActivityIndicator size={50} color={'#000'} />
		</View>
	)
}
