import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Navigator } from './Navigator'
import Icon from 'react-native-vector-icons/Ionicons'
import { Tab2Screen } from './Tabs2'

const Tab = createBottomTabNavigator()

export const Tabs = () => {
	return (
		<Tab.Navigator
			sceneContainerStyle={{
				backgroundColor: '#fff'
			}}
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: 'purple',
				tabBarLabelStyle: {
					fontSize: 15
				},
				tabBarStyle: {
					borderWidth: 0,
					elevation: 0,
					height: 70,
					position: 'absolute',
					backgroundColor: 'rgba(255, 255, 255, 0.80)'
				}
			}}
		>
			<Tab.Screen
				name='HomeScreen'
				component={Navigator}
				options={{
					tabBarLabel: 'Listado',
					tabBarIcon: ({ color }) => (
						<Icon size={30} color={color} name='list-outline' />
					)
				}}
			/>
			<Tab.Screen
				name='SeachScreen'
				component={Tab2Screen}
				options={{
					tabBarLabel: 'Busqueda',
					tabBarIcon: ({ color }) => (
						<Icon size={30} color={color} name='search-outline' />
					)
				}}
			/>
		</Tab.Navigator>
	)
}
