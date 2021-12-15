import React from 'react'
import { Platform } from 'react-native'
import { TabNavigatorAndroid } from './TabNavigatorAndroid'
import { TabNavigatorIOS } from './TabNavigatorIOS'

export const TabNavigator = () => {
	return Platform.OS === 'ios' ? <TabNavigatorIOS /> : <TabNavigatorAndroid />
}
