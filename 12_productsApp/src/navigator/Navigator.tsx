import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { useAuthContext } from '../hooks/useAuthContext'

import { LoginScreen } from '../screens/LoginScreen'
import { ProtectedScreen } from '../screens/ProtectedScreen'
import { RegisterScreen } from '../screens/RegisterScreen'
import { LoadingScreen } from '../screens/LoadingScreen'
import { ProductsNavigator } from './ProductsNavigator'

const Stack = createStackNavigator()

export const Navigator = () => {
	const { status } = useAuthContext()

	if (status === 'checking') return <LoadingScreen />

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: '#fff'
				}
			}}
		>
			{status === 'authenticated' ? (
				<>
					<Stack.Screen
						name='ProductsNavigator'
						component={ProductsNavigator}
					/>
					<Stack.Screen
						name='ProtectedScreen'
						component={ProtectedScreen}
					/>
				</>
			) : (
				<>
					<Stack.Screen name='LoginScreen' component={LoginScreen} />
					<Stack.Screen
						name='RegisterScreen'
						component={RegisterScreen}
					/>
				</>
			)}
		</Stack.Navigator>
	)
}
