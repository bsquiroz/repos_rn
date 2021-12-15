import React from 'react'

interface Props extends StackScreenProps<RootStackProps, 'PokemonScreen'> {}

import {
	ActivityIndicator,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackProps } from '../navigator/Navigator'
import Icon from 'react-native-vector-icons/Ionicons'
import { FadeInImage } from '../components/FadeInImage'
import { usePokemon } from '../hooks/usePokemon'
import { PokemonDetails } from '../components/PokemonDetails'

export const PokemonScreen = ({ navigation, route }: Props) => {
	const {
		simplePokemon: { name, picture, id },
		color
	} = route.params

	const { isLoading, pokemon } = usePokemon(id)

	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					...styles.headerContainer,
					backgroundColor: color
				}}
			>
				<TouchableOpacity
					style={styles.iconStyle}
					onPress={() => navigation.goBack()}
				>
					<Icon name='caret-back-outline' size={40} color={'#fff'} />
				</TouchableOpacity>

				<Text style={styles.pokemonName}>
					{name + '\n'}#{id}
				</Text>

				{/* pokbola */}
				<Image
					source={require('../assets/pokebola-blanca.png')}
					style={styles.pokebola}
				/>

				<FadeInImage uri={picture} style={styles.pokemonImg} />
			</View>

			{/* Detalles y loading */}
			{isLoading ? (
				<View style={styles.loading}>
					<ActivityIndicator color={color} size={50} />
				</View>
			) : (
				<PokemonDetails pokemon={pokemon} color={color} />
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	headerContainer: {
		height: 370,
		zIndex: 999,
		alignItems: 'center',
		borderBottomLeftRadius: 1000,
		borderBottomRightRadius: 1000
	},
	iconStyle: {
		position: 'absolute',
		left: 10,
		top: 10
	},
	pokemonName: {
		color: '#fff',
		fontSize: 40,
		alignSelf: 'flex-start',
		left: 20,
		marginTop: 50
	},
	pokebola: {
		width: 250,
		height: 250,
		bottom: 25,
		opacity: 0.6
	},
	pokemonImg: {
		width: 250,
		height: 250,
		position: 'absolute',
		bottom: -15
	},
	loading: {
		flex: 1,
		justifyContent: 'center'
	}
})
