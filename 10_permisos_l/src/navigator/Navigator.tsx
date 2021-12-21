import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '../screens/HomeScreen'
import { MapScreen } from '../screens/MapScreen'
import { usePermissionsContext } from '../hooks/usePermissionsContext'
import { LoadingScreen } from '../screens/LoadingScreen'

const Stack = createStackNavigator()

export const Navigator = () => {
	const { permission } = usePermissionsContext()

	if (permission.locationStatus === 'unavailable') return <LoadingScreen />
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: '#fff'
				}
			}}
		>
			{permission.locationStatus === 'granted' ? (
				<Stack.Screen name='MapScreen' component={MapScreen} />
			) : (
				<Stack.Screen name='Home' component={HomeScreen} />
			)}
		</Stack.Navigator>
	)
}
