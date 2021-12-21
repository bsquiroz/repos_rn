import 'react-native-gesture-handler'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from './src/navigator/Navigator'
import { PermissionsProvider } from './src/contexts/PermissionsContext'

const AppState = ({ children }: any) => {
	return <PermissionsProvider>{children}</PermissionsProvider>
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
