import React from 'react'

import {
	createDrawerNavigator,
	DrawerContentComponentProps,
	DrawerContentOptions,
	DrawerContentScrollView
} from '@react-navigation/drawer'
import { StackNavigator } from './StackNavigator'
import { SettingsScreen } from '../screens/SettingsScreen'
import { Image, Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { TabNavigator } from './TabNavigator'
import { ButtonDrawer } from '../components/ButtonDrawer'
import { useAuthContext } from '../hooks/useAuthContext'

const Drawer = createDrawerNavigator()

export const MenuLateralDrawer = () => {
	const { width } = useWindowDimensions()

	return (
		<Drawer.Navigator
			drawerType={width >= 700 ? 'permanent' : 'front'}
			drawerContent={(props) => <MenuInterno {...props} />}
		>
			{/* <Drawer.Screen name='StackNavigator' component={StackNavigator} /> */}
			<Drawer.Screen name='Tabs' component={TabNavigator} />
			<Drawer.Screen name='SettingsScreen' component={SettingsScreen} />
		</Drawer.Navigator>
	)
}

const MenuInterno = ({
	navigation
}: DrawerContentComponentProps<DrawerContentOptions>) => {
	const handleNavigation = (screen: string) => {
		navigation.navigate(screen)
	}

	const {
		authState: { isLoggedIn, userName }
	} = useAuthContext()
	return (
		<DrawerContentScrollView>
			{isLoggedIn && (
				<>
					<View style={styles.avatarContainer}>
						<Image
							source={{
								uri: 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/212688589_3935223946576364_3103243804524975430_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=GbmubiecGPEAX8ZI3wC&tn=7-YiQQfEHDsci67Y&_nc_ht=scontent-bog1-1.xx&oh=403410e7796591e3c77dbde4679304ef&oe=61CC5D56'
							}}
							style={styles.avatar}
						/>
					</View>
					<View>
						<Text style={styles.textUsername}>{userName}</Text>
					</View>
				</>
			)}

			<View style={styles.menuContainer}>
				{/* <ButtonDrawer
					handleScreen={handleNavigation}
					page={'StackNavigator'}
					title={'Navegación stack'}
				/> */}
				<ButtonDrawer
					handleScreen={handleNavigation}
					page={'SettingsScreen'}
					title={'Navegación ajustes'}
					iconName={'heart-half-outline'}
				/>
				<ButtonDrawer
					handleScreen={handleNavigation}
					page={'Tabs'}
					title={'Navegación tabs'}
					iconName={'medical-outline'}
				/>
			</View>
		</DrawerContentScrollView>
	)
}
