import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { LoginScreen } from '../screens/LoginScreen'
import { ProtectedScreen } from '../screens/ProtectedScreen'
import { RegisterScreen } from '../screens/RegisterScreen'

const Stack = createStackNavigator()

export const Navigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: '#fff'
				}
			}}
		>
			<Stack.Screen name='LoginScreen' component={LoginScreen} />
			<Stack.Screen name='ProtectedScreen' component={ProtectedScreen} />
			<Stack.Screen name='RegisterScreen' component={RegisterScreen} />
		</Stack.Navigator>
	)
}
