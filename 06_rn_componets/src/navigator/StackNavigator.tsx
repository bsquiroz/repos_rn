import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen'
import { Animation101Screen } from '../screens/Animation101Screen'
import { Animation1011Screen } from '../screens/Animation1011Screen'
import { Animation102Screen } from '../screens/Animation102Screen'
import { SwitchScreen } from '../screens/SwitchScreen'
import { AlertScreen } from '../screens/AlertScreen'
import { TextInputScreen } from '../screens/TextInputScreen'
import { PullToRefresh } from '../screens/PullToRefresh'
import { customSectionList } from '../screens/SectionList'
import { ModalScreen } from '../screens/ModalScreen'
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen'

const Stack = createStackNavigator()

export const StackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen
				name='Animation101Screen'
				component={Animation101Screen}
			/>
			<Stack.Screen
				name='Animation1011Screen'
				component={Animation1011Screen}
			/>
			<Stack.Screen
				name='Animation102Screen'
				component={Animation102Screen}
			/>
			<Stack.Screen name='SwitchScreen' component={SwitchScreen} />
			<Stack.Screen name='AlertScreen' component={AlertScreen} />
			<Stack.Screen name='TextInputScreen' component={TextInputScreen} />
			<Stack.Screen name='PullToRefresh' component={PullToRefresh} />
			<Stack.Screen
				name='customSectionList'
				component={customSectionList}
			/>
			<Stack.Screen name='ModalScreen' component={ModalScreen} />
			<Stack.Screen
				name='InfiniteScrollScreen'
				component={InfiniteScrollScreen}
			/>
		</Stack.Navigator>
	)
}
