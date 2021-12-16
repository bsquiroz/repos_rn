import React, { useEffect, useRef, useState } from 'react'
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage'

import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/native'

const windowWidth = Dimensions.get('window').width

interface Props {
	pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
	const [bgColor, setBgColor] = useState('grey')

	const isMounted = useRef(true)

	const navigation = useNavigation()

	useEffect(() => {
		ImageColors.getColors(pokemon.picture, { fallback: 'grey' }).then(
			(colors) => {
				if (!isMounted.current) return

				if (colors.platform === 'android') {
					setBgColor(colors.dominant || 'grey')
				}

				if (colors.platform === 'ios') {
					setBgColor(colors.background || 'grey')
				}
			}
		)

		return () => {
			isMounted.current = false
		}
	}, [])

	return (
		<TouchableOpacity
			activeOpacity={0.9}
			onPress={() =>
				navigation.navigate('PokemonScreen', {
					simplePokemon: pokemon,
					color: bgColor
				})
			}
		>
			<View
				style={{
					...styles.cardContainer,
					width: windowWidth * 0.4,
					backgroundColor: bgColor
				}}
			>
				<View>
					<Text style={styles.name}>
						{pokemon.name} {'\n#' + pokemon.id}
					</Text>
				</View>

				<Image
					source={require('../assets/pokebola-blanca.png')}
					style={styles.pokebola}
				/>

				<FadeInImage uri={pokemon.picture} style={styles.imagePoke} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		marginHorizontal: 10,
		height: 120,
		width: 160,
		marginBottom: 25,
		borderRadius: 10,

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 7
		},
		shadowOpacity: 0.41,
		shadowRadius: 9.11,

		elevation: 14
	},
	name: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		top: 20,
		left: 10
	},
	pokebola: {
		width: 100,
		height: 100,
		position: 'absolute',
		bottom: -20,
		right: -20,
		opacity: 0.4
	},
	imagePoke: {
		width: 105,
		height: 105,
		position: 'absolute',
		right: -10,
		bottom: -15
	}
})
