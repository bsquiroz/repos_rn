import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import { ChatScreen } from '../../screens/ChatScreen'
import { ContactsScreen } from '../../screens/ContactsScreen'
import { AlbumsScreen } from '../../screens/AlbumsScreen'
import { colores } from '../../theme/AppTheme'
import { Text } from 'react-native'

const Tab = createMaterialTopTabNavigator()

const IconType = (iconName: any) => (
	<Icon name={iconName} size={25} color={colores.primary} />
)

export const TopTabNavigator = () => {
	return (
		<Tab.Navigator
			sceneContainerStyle={{
				backgroundColor: '#fff'
			}}
			tabBarOptions={{
				style: {
					borderTopColor: colores.primary,
					borderTopWidth: 0,
					elevation: 0
				},
				pressColor: colores.primary,
				showIcon: true,
				indicatorStyle: {
					backgroundColor: colores.primary
				},
				labelStyle: {
					fontSize: 15,
					fontWeight: 'bold',
					color: colores.primary
				}
			}}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, focused }) => {
					let iconName: string = ''

					switch (route.name) {
						case 'Chat':
							iconName = 'chatbox-ellipses-outline'
							break

						case 'Contacts':
							iconName = 'people-outline'
							break

						case 'Albums':
							iconName = 'bookmarks-outline'
							break

						default:
							break
					}

					return <Text style={{ color }}>{IconType(iconName)}</Text>
				}
			})}
		>
			<Tab.Screen name='Chat' component={ChatScreen} />
			<Tab.Screen name='Contacts' component={ContactsScreen} />
			<Tab.Screen name='Albums' component={AlbumsScreen} />
		</Tab.Navigator>
	)
}
