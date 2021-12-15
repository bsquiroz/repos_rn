import React from 'react'

import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usoPokemonPaginated } from '../hooks/usoPokemonPaginated'
import { PokemonCard } from '../components/PokemonCard'

export const HomeScreen = () => {
	const { top } = useSafeAreaInsets()

	const { isLoading, simplePokemonList, loadPokemon } = usoPokemonPaginated()

	return (
		<>
			<Image
				source={require('../assets/pokebola.png')}
				style={styles.pokeBolaBG}
			/>
			<View style={{ alignItems: 'center' }}>
				<FlatList
					data={simplePokemonList}
					keyExtractor={(pokemon) => pokemon.id}
					ListHeaderComponent={() => (
						<Text
							style={{
								...styles.title,
								...styles.globalMargin,
								color: '#000',
								marginBottom: 20,
								top: top + 20
							}}
						>
							Pokedex
						</Text>
					)}
					// barra indicadora
					showsVerticalScrollIndicator={false}
					numColumns={2}
					renderItem={({ item }) => <PokemonCard pokemon={item} />}
					// Infinite scroll
					onEndReached={loadPokemon}
					onEndReachedThreshold={0.5}
					// Activity indicator
					ListFooterComponent={
						<ActivityIndicator
							size={40}
							style={{ height: 100 }}
							color={'grey'}
						/>
					}
				/>
			</View>
		</>
	)
}
