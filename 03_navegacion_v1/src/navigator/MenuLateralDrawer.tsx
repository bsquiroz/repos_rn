import React from 'react'

import {
	createDrawerNavigator,
	DrawerContentComponentProps,
	DrawerContentOptions,
	DrawerContentScrollView
} from '@react-navigation/drawer'
import { StackNavigator } from './StackNavigator'
import { SettingsScreen } from '../screens/SettingsScreen'
import {
	Image,
	Text,
	TouchableOpacity,
	useWindowDimensions,
	View
} from 'react-native'
import { styles } from '../theme/AppTheme'

const Drawer = createDrawerNavigator()

export const MenuLateralDrawer = () => {
	const { width } = useWindowDimensions()

	return (
		<Drawer.Navigator
			drawerType={width >= 700 ? 'permanent' : 'front'}
			drawerContent={(props) => <MenuInterno {...props} />}
		>
			<Drawer.Screen name='StackNavigator' component={StackNavigator} />
			<Drawer.Screen name='SettingsScreen' component={SettingsScreen} />
		</Drawer.Navigator>
	)
}

const MenuInterno = ({
	navigation
}: DrawerContentComponentProps<DrawerContentOptions>) => {
	return (
		<DrawerContentScrollView>
			<View style={styles.avatarContainer}>
				<Image
					source={{
						uri: 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/212688589_3935223946576364_3103243804524975430_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=GbmubiecGPEAX8ZI3wC&tn=7-YiQQfEHDsci67Y&_nc_ht=scontent-bog1-1.xx&oh=403410e7796591e3c77dbde4679304ef&oe=61CC5D56'
					}}
					style={styles.avatar}
				/>
			</View>

			<View style={styles.menuContainer}>
				<TouchableOpacity
					style={styles.menuBoton}
					onPress={() => navigation.navigate('StackNavigator')}
				>
					<Text style={styles.titleMenuContainer}>
						Navegación stack
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.menuBoton}
					onPress={() => navigation.navigate('SettingsScreen')}
				>
					<Text style={styles.titleMenuContainer}>
						Navegación ajustes
					</Text>
				</TouchableOpacity>
			</View>
		</DrawerContentScrollView>
	)
}
