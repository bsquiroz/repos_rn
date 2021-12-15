import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Pagina1Screen } from '../screens/Pagina1Screen'
import { Pagina2Screen } from '../screens/Pagina2Screen'
import { Pagina3Screen } from '../screens/Pagina3Screen'
import { Pagina4Screen } from '../screens/Pagina4Screen'
import { PersonaScreen } from '../screens/PersonaScreen'

export type RootStackParams = {
	Pagina1: undefined
	Pagina2: undefined
	Pagina3: undefined
	Pagina4: undefined
	PersonaScreen: {
		id: number
		name: string
	}
}

const Stack = createStackNavigator<RootStackParams>()

export const StackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName='Pagina1'
			screenOptions={{
				headerStyle: {
					backgroundColor: '#4157b9'
				},
				cardStyle: {
					backgroundColor: '#4770c2'
				}
			}}
		>
			<Stack.Screen
				name='Pagina1'
				options={{ title: 'Página 1' }}
				component={Pagina1Screen}
			/>
			<Stack.Screen
				name='Pagina2'
				options={{ title: 'Página 2' }}
				component={Pagina2Screen}
			/>
			<Stack.Screen
				name='Pagina3'
				options={{ title: 'Página 3' }}
				component={Pagina3Screen}
			/>
			<Stack.Screen
				name='Pagina4'
				options={{ title: 'Página 4' }}
				component={Pagina4Screen}
			/>
			<Stack.Screen
				name='PersonaScreen'
				options={{ title: 'Bienvenido persona' }}
				component={PersonaScreen}
			/>
		</Stack.Navigator>
	)
}
