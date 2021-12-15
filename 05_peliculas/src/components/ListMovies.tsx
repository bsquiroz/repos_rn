import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movies } from '../interfaces/movieDB'
import { MoviePoster } from './MoviePoster'

interface Props {
	title: string
	peliculasCine: Movies[]
}

export const ListMovies = ({ title, peliculasCine }: Props) => {
	return (
		<View style={{ height: 250 }}>
			<Text
				style={{
					fontSize: 25,
					fontWeight: 'bold',
					color: '#000',
					textAlign: 'center',
					marginBottom: 10
				}}
			>
				{title}
			</Text>
			<FlatList
				data={peliculasCine}
				renderItem={({ item }: any) => (
					<MoviePoster movie={item} width={140} height={200} m />
				)}
				keyExtractor={(item) => item.id.toString()}
				horizontal={true}
				// showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}
