import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/navigation/StackNavigator'
import { FadeScreen } from './src/screens/FadeScreen'
import { GradientProvider } from './src/contenxt/GradientContext'

const AppState = ({ children }: any) => {
	return <GradientProvider>{children}</GradientProvider>
}

export const App = () => {
	return (
		<AppState>
			<NavigationContainer>
				<StackNavigator />
				{/* <FadeScreen /> */}
			</NavigationContainer>
		</AppState>
	)
}
