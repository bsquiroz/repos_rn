import { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi'
import {
	PokemonPaginatedResponse,
	Result,
	SimplePokemon
} from '../interfaces/pokemonInterfaces'

export const usoPokemonPaginated = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
		[]
	)
	const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

	const mapPokemonList = (pokemonList: Result[]) => {
		const newPokemon: SimplePokemon[] = pokemonList.map(({ name, url }) => {
			const urlParts = url.split('/')
			const id = urlParts[urlParts.length - 2]
			const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

			return { id, picture, name }
		})

		setSimplePokemonList([...simplePokemonList, ...newPokemon])
	}

	const loadPokemon = async () => {
		setIsLoading(true)
		const res = await pokemonApi.get<PokemonPaginatedResponse>(
			nextPageUrl.current
		)
		nextPageUrl.current = res.data.next
		mapPokemonList(res.data.results)
		setIsLoading(false)
	}

	useEffect(() => {
		loadPokemon()
	}, [])

	return {
		simplePokemonList,
		isLoading,
		loadPokemon
	}
}
