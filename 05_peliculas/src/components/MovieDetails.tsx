import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { formatNumber } from '../helpers/lib'
import { Cast, MovieFull } from '../interfaces/movieDB'
import { ActorItem } from './ActorItem'

interface Props {
	movieFull: MovieFull
	cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
	return (
		<>
			{/* MOVIEfULL */}
			<View
				style={{
					margin: 10
				}}
			>
				<View
					style={{
						marginVertical: 10
					}}
				>
					{/* Detalles de la pelicula */}
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginHorizontal: 5
						}}
					>
						<View style={{ flexDirection: 'row' }}>
							<Icon name='star-outline' color='grey' size={16} />
							<Text> {movieFull.vote_average} </Text>
						</View>
						<Text>
							{movieFull.genres.map((e) => e.name).join(' - ')}
						</Text>
					</View>

					{/* Historia de la pelicula */}
					<View>
						<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
							Resumen
						</Text>
						<Text style={{ textAlign: 'justify' }}>
							{movieFull.overview}
						</Text>
					</View>

					{/* Presupuesto */}
					<View>
						<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
							Presupuesto
						</Text>
						<Text>{formatNumber(movieFull.budget, 'USD')}</Text>
					</View>
				</View>
			</View>

			{/* CAST */}
			<Text
				style={{
					marginLeft: 10,
					fontSize: 20,
					fontWeight: 'bold',
					textAlign: 'center'
				}}
			>
				Cast
			</Text>
			<FlatList
				data={cast}
				renderItem={({ item }: any) => <ActorItem actor={item} />}
				keyExtractor={(item) => item.id.toString()}
				horizontal={true}
				// showsHorizontalScrollIndicator={false}
			/>
		</>
	)
}
