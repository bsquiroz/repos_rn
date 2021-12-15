import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Movies } from '../interfaces/movieDB'
import { globalStyles } from '../theme/globalStyles'

interface Props {
	movie: Movies
	height?: number
	width?: number
	m?: boolean
}

export const MoviePoster = ({ movie, height = 420, width = 300, m }: Props) => {
	const { poster_path } = movie
	const uri = `https://image.tmdb.org/t/p/w500${poster_path}`

	const navigation = useNavigation()

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={{
				width,
				height,
				marginHorizontal: m ? 10 : 0
			}}
			onPress={() => navigation.navigate('DetailScreen', movie)}
		>
			<View style={styles.imageContainer}>
				<Image source={{ uri }} style={styles.image} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		flex: 1,
		...globalStyles.shadow,
		paddingBottom: 4
	},
	image: {
		flex: 1,
		borderRadius: 10
	}
})
