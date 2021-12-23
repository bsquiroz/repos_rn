import 'react-native-gesture-handler'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from './src/navigator/Navigator'
import { AuthProvider } from './src/context/AuthContext'

const AppState = ({ children }: any) => {
	return <AuthProvider>{children}</AuthProvider>
}

export const App = () => {
	return (
		<AppState>
			<NavigationContainer>
				<Navigator />
			</NavigationContainer>
		</AppState>
	)
}
