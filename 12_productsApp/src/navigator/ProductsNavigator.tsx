import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DetailsProductScreen } from '../screens/DetailsProductScreen'
import { ProductsScreen } from '../screens/ProductsScreen'

export type ProductsStackParams = {
	ProductsScreen: undefined
	DetailsProductScreen: { id?: string; name?: string }
}

const Stack = createStackNavigator<ProductsStackParams>()

export const ProductsNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				cardStyle: {
					backgroundColor: '#fff'
				}
			}}
		>
			<Stack.Screen
				name='ProductsScreen'
				component={ProductsScreen}
				options={{ title: 'Productos' }}
			/>
			<Stack.Screen
				name='DetailsProductScreen'
				component={DetailsProductScreen}
			/>
		</Stack.Navigator>
	)
}
