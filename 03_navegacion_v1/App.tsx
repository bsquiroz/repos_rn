import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerNavigator } from './src/navigator/DrawerNavigator'
import { MenuLateralDrawer } from './src/navigator/MenuLateralDrawer'

export const App = () => {
	return (
		<NavigationContainer>
			{/* <DrawerNavigator /> */}
			<MenuLateralDrawer />
		</NavigationContainer>
	)
}
