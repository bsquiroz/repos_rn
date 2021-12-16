import { useEffect, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi'
import {
	PokemonPaginatedResponse,
	Result,
	SimplePokemon
} from '../interfaces/pokemonInterfaces'

export const usoPokemonSearch = () => {
	const [isFecth, setIsFecth] = useState(true)
	const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
		[]
	)

	const mapPokemonList = (pokemonList: Result[]) => {
		const newPokemon: SimplePokemon[] = pokemonList.map(({ name, url }) => {
			const urlParts = url.split('/')
			const id = urlParts[urlParts.length - 2]
			const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

			return { id, picture, name }
		})

		setSimplePokemonList(newPokemon)
		setIsFecth(false)
	}

	const loadPokemon = async () => {
		const res = await pokemonApi.get<PokemonPaginatedResponse>(
			'https://pokeapi.co/api/v2/pokemon?limit=1200'
		)
		mapPokemonList(res.data.results)
	}

	useEffect(() => {
		loadPokemon()
	}, [])

	return {
		simplePokemonList,
		isFecth
	}
}
