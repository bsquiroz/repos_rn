import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PokemonResponse } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage'

interface Props {
	pokemon: PokemonResponse
	color?: string
}

export const PokemonDetails = ({ pokemon, color }: Props) => {
	return (
		<ScrollView
			style={{ ...StyleSheet.absoluteFillObject }}
			showsVerticalScrollIndicator={false}
		>
			{/* Types y peso*/}
			<View
				style={{
					...styles.container,
					...styles.content_row,
					marginTop: 380
				}}
			>
				{/* Types*/}
				<View>
					<Text style={styles.title}>Types</Text>
					<View style={{ flexDirection: 'row' }}>
						{pokemon.types.map(({ type }, index) => (
							<Text
								key={index}
								style={{
									...styles.regularText,
									marginRight: 10
								}}
							>
								{type.name}
							</Text>
						))}
					</View>
				</View>
				{/*peso*/}
				<View>
					<Text style={styles.title}>Peso</Text>
					<Text style={styles.regularText}>{pokemon.weight}Kg</Text>
				</View>
			</View>
			{/* Sprites */}
			<View>
				<Text style={styles.title}>Sprites</Text>
			</View>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
				<FadeInImage
					uri={pokemon.sprites.front_default}
					style={styles.basicSprite}
				/>
				<FadeInImage
					uri={pokemon.sprites.back_default}
					style={styles.basicSprite}
				/>
				<FadeInImage
					uri={pokemon.sprites.front_shiny}
					style={styles.basicSprite}
				/>
				<FadeInImage
					uri={pokemon.sprites.back_shiny}
					style={styles.basicSprite}
				/>
			</ScrollView>
			{/* Habilidades */}
			<View style={{ ...styles.container }}>
				<Text style={styles.title}>Habilidades base</Text>

				<View style={{ flexDirection: 'row' }}>
					{pokemon.abilities.map(({ ability }, index) => (
						<Text
							key={index}
							style={{
								...styles.regularText,
								marginRight: 10
							}}
						>
							{ability.name}
						</Text>
					))}
				</View>
			</View>

			{/* Movimientos */}
			<View style={{ ...styles.container }}>
				<Text style={styles.title}>Movimientos</Text>
				<View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
					{pokemon.moves.map(({ move }, index) => (
						<Text
							key={index}
							style={{
								...styles.regularText,
								marginRight: 10
							}}
						>
							{move.name}
						</Text>
					))}
				</View>
			</View>

			{/* Stats */}
			<View style={{ ...styles.container, marginBottom: 80 }}>
				<Text style={styles.title}>Stats</Text>
				<View style={{ flexDirection: 'column' }}>
					{pokemon.stats.map(({ stat, base_stat }, index) => (
						<View key={index} style={{ flexDirection: 'row' }}>
							<Text
								style={{
									...styles.regularText,
									width: 140
								}}
							>
								{stat.name}
							</Text>
							<View
								style={{
									...styles.barraStats,
									borderColor: color
								}}
							>
								<Text
									style={{
										...styles.regularText,
										...styles.barraInternaStats,
										width: `${base_stat}%`,
										backgroundColor: color
									}}
								>
									{base_stat}
								</Text>
							</View>
						</View>
					))}
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20
	},
	content_row: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
		marginTop: 20
	},
	regularText: {
		fontSize: 19
	},
	basicSprite: {
		width: 100,
		height: 100
	},
	barraStats: {
		flex: 1,
		marginBottom: 5,
		borderRadius: 10,
		borderWidth: 3,
		overflow: 'hidden'
	},
	barraInternaStats: {
		opacity: 0.7,
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#000'
	}
})
