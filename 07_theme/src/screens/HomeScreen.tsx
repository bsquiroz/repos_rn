import React from 'react'

import { FlatList, View } from 'react-native'

import { globalStyles } from '../theme/appTheme'
import { FlastListMenuItem } from '../components/FlastListMenuItem'
import { menuItems } from '../data/menuItems'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator'

export const HomeScreen = () => {
	return (
		<View style={{ flex: 1, ...globalStyles.globalMargin }}>
			<FlatList
				data={menuItems}
				renderItem={({ item }) => <FlastListMenuItem menuItem={item} />}
				keyExtractor={(item) => item.name}
				ListHeaderComponent={() => (
					<HeaderTitle text='Opciones de menú' />
				)}
				ItemSeparatorComponent={ItemSeparator}
			/>
		</View>
	)
}
