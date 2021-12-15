import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen'
import { PokemonScreen } from '../screens/PokemonScreen'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'

export type RootStackProps = {
	Home: undefined
	PokemonScreen: { simplePokemon: SimplePokemon; color: string }
}

const Stack = createStackNavigator<RootStackProps>()

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
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='PokemonScreen' component={PokemonScreen} />
		</Stack.Navigator>
	)
}
