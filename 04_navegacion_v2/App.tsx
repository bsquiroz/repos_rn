import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerNavigator } from './src/navigator/DrawerNavigator'
import { MenuLateralDrawer } from './src/navigator/MenuLateralDrawer'
import { StackNavigator } from './src/navigator/StackNavigator'
import { TabNavigator } from './src/navigator/TabNavigator'
import { AuthProvider } from './src/context/AuthContext'

export const App = () => {
	return (
		<NavigationContainer>
			<AppState>
				{/* <StackNavigator /> */}
				{/* <DrawerNavigator /> */}
				{/* <TabNavigator /> */}
				<MenuLateralDrawer />
			</AppState>
		</NavigationContainer>
	)
}

const AppState = ({ children }: any) => {
	return <AuthProvider>{children}</AuthProvider>
}
