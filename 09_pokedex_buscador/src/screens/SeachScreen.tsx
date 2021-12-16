import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Loading } from '../components/Loading'
import { PokemonCard } from '../components/PokemonCard'
import { SearchInput } from '../components/SearchInput'
import { usoPokemonSearch } from '../hooks/usoPokemonSearch'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { styles } from '../theme/appTheme'

export const SeachScreen = () => {
	const { top } = useSafeAreaInsets()

	const { isFecth, simplePokemonList } = usoPokemonSearch()

	const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])
	const [term, setTerm] = useState('')

	useEffect(() => {
		if (term.length === 0) {
			return setPokemonFiltered([])
		}

		console.log()

		if (isNaN(Number(term))) {
			setPokemonFiltered(
				simplePokemonList.filter((poke) =>
					poke.name.toLowerCase().includes(term.toLowerCase())
				)
			)
		} else {
			const idFilter = simplePokemonList.find((poke) => poke.id === term)
			setPokemonFiltered(idFilter ? [idFilter] : [])
		}
	}, [term])

	if (isFecth) {
		return <Loading />
	}

	return (
		<View style={{ flex: 1 }}>
			<SearchInput iconName='search' onDebounce={setTerm} />

			<View
				style={{
					alignItems: 'center'
				}}
			>
				<FlatList
					data={pokemonFiltered}
					keyExtractor={(pokemon) => pokemon.id}
					ListHeaderComponent={() => (
						<Text
							style={{
								...styles.title,
								...styles.globalMargin,
								color: '#000',
								marginBottom: 60,
								top: top + 60
							}}
						>
							{term}
						</Text>
					)}
					// barra indicadora
					showsVerticalScrollIndicator={false}
					numColumns={2}
					renderItem={({ item }) => <PokemonCard pokemon={item} />}
				/>
			</View>
		</View>
	)
}
