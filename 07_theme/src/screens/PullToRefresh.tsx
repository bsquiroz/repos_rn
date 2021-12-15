import React, { useState } from 'react'
import { ScrollView, Text, View, RefreshControl } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { IconButtonLeft } from '../components/IconButtonLeft'
import { globalStyles } from '../theme/appTheme'

export const PullToRefresh = () => {
	const [refreshing, setRefreshing] = useState(false)

	const onRefresh = () => {
		setRefreshing(true)

		setTimeout(() => {
			setRefreshing(false)
		}, 2000)
	}

	return (
		<ScrollView
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
		>
			<IconButtonLeft />
			<HeaderTitle text='Pull to refresh' />
			<View
				style={[
					globalStyles.containerContent,
					globalStyles.containerContent
				]}
			>
				<Text style={{ color: '#000' }}>
					{refreshing ? 'cargando...' : 'Haz el onFresh'}
				</Text>
			</View>
		</ScrollView>
	)
}
