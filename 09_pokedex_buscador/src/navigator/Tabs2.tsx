import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { PokemonScreen } from '../screens/PokemonScreen'
import { SeachScreen } from '../screens/SeachScreen'
import { RootStackProps } from './Navigator'

const Tab2 = createStackNavigator<RootStackProps>()

export const Tab2Screen = () => {
	return (
		<Tab2.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: '#fff'
				}
			}}
		>
			<Tab2.Screen name='Home' component={SeachScreen} />
			<Tab2.Screen name='PokemonScreen' component={PokemonScreen} />
		</Tab2.Navigator>
	)
}
