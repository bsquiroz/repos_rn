import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Tab1Screen } from '../../screens/Tab1Screen'
import { Tab2Screen } from '../../screens/Tab2Screen'
import { Tab3Screen } from '../../screens/Tab3Screen'
import { StackNavigator } from '.././StackNavigator'
import { colores } from '../../theme/AppTheme'
import { Text } from 'react-native'
import { TopTabNavigator } from '../TopTabNavigator'

const TabIos = createBottomTabNavigator()

export const TabNavigatorIOS = () => {
	return (
		<TabIos.Navigator
			sceneContainerStyle={{
				backgroundColor: '#fff'
			}}
			tabBarOptions={{
				activeTintColor: colores.primary,
				style: {
					borderTopColor: colores.primary,
					elevation: 0
				},
				labelStyle: {
					fontSize: 20,
					fontWeight: 'bold'
				}
			}}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, focused, size }) => {
					let iconName: string = ''

					switch (route.name) {
						case 'Tab1Screen':
							iconName = 'T1'
							break

						case 'Tab2Screen':
							iconName = 'T2'
							break

						case 'StackNavigator':
							iconName = 'S'
							break

						default:
							break
					}

					return <Text style={{ color }}>{iconName}</Text>
				}
			})}
		>
			<TabIos.Screen
				name='Tab1Screen'
				options={{ title: 'Tab1' }}
				component={Tab1Screen}
			/>
			<TabIos.Screen
				name='Tab2Screen'
				options={{ title: 'Tab2' }}
				component={TopTabNavigator}
			/>
			<TabIos.Screen
				name='StackNavigator'
				options={{ title: 'Stack' }}
				component={StackNavigator}
			/>
		</TabIos.Navigator>
	)
}
