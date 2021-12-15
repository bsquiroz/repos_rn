import { useEffect, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi'
import { PokemonResponse } from '../interfaces/pokemonInterfaces'

export const usePokemon = (id: string) => {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemon, setPokemon] = useState<PokemonResponse>(
		{} as PokemonResponse
	)

	const loadPokemon = async () => {
		const res = await pokemonApi.get<PokemonResponse>(
			`https://pokeapi.co/api/v2/pokemon/${id}`
		)
		setPokemon(res.data)
		setIsLoading(false)
	}
	useEffect(() => {
		loadPokemon()
	}, [])

	return {
		isLoading,
		pokemon
	}
}
