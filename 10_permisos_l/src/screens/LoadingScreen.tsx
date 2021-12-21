import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export const LoadingScreen = () => {
	return (
		<View style={styles.containerLoading}>
			<ActivityIndicator size={50} color={'#000'} />
		</View>
	)
}

const styles = StyleSheet.create({
	containerLoading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
