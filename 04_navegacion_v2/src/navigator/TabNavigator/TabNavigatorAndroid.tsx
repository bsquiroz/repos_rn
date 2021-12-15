import React from 'react'

import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { Tab1Screen } from '../../screens/Tab1Screen'
import { Tab2Screen } from '../../screens/Tab2Screen'
import { Tab3Screen } from '../../screens/Tab3Screen'
import { StackNavigator } from '.././StackNavigator'
import { colores } from '../../theme/AppTheme'
import { Text } from 'react-native'
import { TopTabNavigator } from '../TopTabNavigator'

const TabAndroid = createMaterialBottomTabNavigator()

export const TabNavigatorAndroid = () => {
	return (
		<TabAndroid.Navigator
			sceneAnimationEnabled={true}
			barStyle={{ backgroundColor: colores.primary }}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, focused }) => {
					let iconName: string = ''

					switch (route.name) {
						case 'Tab1Screen':
							iconName = 'cloud-circle-outline'
							break

						case 'Tab2Screen':
							iconName = 'game-controller-outline'
							break

						case 'StackNavigator':
							iconName = 'football-outline'
							break

						default:
							break
					}

					return <Icon name={iconName} size={25} color={color} />
				}
			})}
		>
			<TabAndroid.Screen
				name='Tab1Screen'
				options={{ title: 'Tab1' }}
				component={Tab1Screen}
			/>
			<TabAndroid.Screen
				name='Tab2Screen'
				options={{ title: 'Tab2' }}
				component={TopTabNavigator}
			/>
			<TabAndroid.Screen
				name='StackNavigator'
				options={{ title: 'Stack' }}
				component={StackNavigator}
			/>
		</TabAndroid.Navigator>
	)
}
