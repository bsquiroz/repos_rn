import React, { useEffect } from 'react'

import Carousel from 'react-native-snap-carousel'

import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'
import { ListMovies } from '../components/ListMovies'
import { GradientBg } from '../components/GradientBg'
import { getColors } from '../helpers/lib'
import { useGradientContext } from '../hooks/useGradientContext'

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {
	const { handleSetColors } = useGradientContext()

	const { nowPlaying, popular, topRated, upcoming, isLoagind } = useMovies()

	const { top } = useSafeAreaInsets()

	const getPosterColors = async (item: number) => {
		const { poster_path } = nowPlaying[item]
		const uri = `https://image.tmdb.org/t/p/w500${poster_path}`

		const { primary = '#041C32', secondary = '#516BEB' } = await getColors(
			uri
		)

		handleSetColors({ primary, secondary })
	}

	useEffect(() => {
		if (nowPlaying.length > 0) {
			getPosterColors(0)
		}
	}, [nowPlaying])

	if (isLoagind) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<ActivityIndicator color='#97BFB4' size={100} />
			</View>
		)
	}

	return (
		<GradientBg>
			<ScrollView
				style={{
					marginTop: top + 10
				}}
			>
				{/* Carrusel principal*/}
				<View style={{ height: 460 }}>
					<Carousel
						data={nowPlaying}
						renderItem={({ item }: any) => (
							<MoviePoster movie={item} />
						)}
						sliderWidth={windowWidth}
						itemWidth={300}
						onSnapToItem={(index) => getPosterColors(index)}
					/>
				</View>

				<ListMovies title={'popular movies'} peliculasCine={popular} />
				<ListMovies
					title={'top rated movies'}
					peliculasCine={topRated}
				/>
				<ListMovies
					title={'upcoming movies'}
					peliculasCine={upcoming}
				/>
			</ScrollView>
		</GradientBg>
	)
}
