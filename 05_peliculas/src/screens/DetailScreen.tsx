import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {
	ActivityIndicator,
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import { RootStackParams } from '../navigation/StackNavigator'
import { useMovieDetails } from '../hooks/useMovieDetails'
import { MovieDetails } from '../components/MovieDetails'
import { globalStyles } from '../theme/globalStyles'
import Icon from 'react-native-vector-icons/Ionicons'

const screenHeigth = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({
	route: {
		params: { poster_path, id, original_title, title }
	},
	navigation
}: Props) => {
	const uri = `https://image.tmdb.org/t/p/w500${poster_path}`

	const { cast, isLoading, movieFull } = useMovieDetails(id)

	return (
		<ScrollView>
			<View style={styles.imageContainer}>
				<TouchableOpacity
					style={{
						position: 'absolute',
						top: 20,
						left: 20,
						zIndex: 1
					}}
					onPress={() => navigation.goBack()}
				>
					<Icon name='arrow-back-outline' color='#fff' size={50} />
				</TouchableOpacity>
				<Image source={{ uri }} style={styles.posterImage} />
			</View>

			<View style={styles.contentInfo}>
				<Text style={styles.subTitle}>{original_title}</Text>
				<Text style={styles.title}>{title}</Text>
			</View>

			{isLoading ? (
				<ActivityIndicator size={30} color='grey' />
			) : (
				<MovieDetails movieFull={movieFull!} cast={cast} />
			)}

			{/* Boton para cerrar */}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		width: '100%',
		height: screenHeigth * 0.7,
		...globalStyles.shadow,
		paddingBottom: 4
	},
	posterImage: {
		flex: 1,
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50
	},
	contentInfo: {
		marginHorizontal: 20,
		marginTop: 20
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#000',
		letterSpacing: 1
	},
	subTitle: {
		fontSize: 16,
		opacity: 0.8
	}
})
