import React, { useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { HeaderTitle } from '../components/HeaderTitle'
import { IconButtonLeft } from '../components/IconButtonLeft'

export const InfiniteScrollScreen = () => {
	const [num, setNum] = useState([0, 1, 2, 3, 4, 5])

	const loadMore = () => {
		const newArray: number[] = []

		for (let i = 0; i < 5; i++) {
			newArray[i] = num.length + i
		}

		setTimeout(() => {
			setNum([...num, ...newArray])
		}, 2000)
	}

	const renderItem = (item: number) => {
		return (
			<FadeInImage
				uri={`https://picsum.photos/id/${item}/500/500`}
				style={{ width: '100%', height: 400 }}
			/>
		)
	}

	return (
		<View>
			<IconButtonLeft />
			<FlatList
				data={num}
				keyExtractor={(item) => item.toString()}
				renderItem={({ item }) => renderItem(item)}
				ListHeaderComponent={() => (
					<HeaderTitle text='Infinite scroll' />
				)}
				onEndReached={loadMore}
				onEndReachedThreshold={0.5}
				ListFooterComponent={() => (
					<View
						style={{
							height: 200,
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<ActivityIndicator size={30} color='#000' />
					</View>
				)}
			/>
		</View>
	)
}
