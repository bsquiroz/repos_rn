import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Cast, CreditsResponse, MovieFull } from '../interfaces/movieDB'

interface MovieDetails {
	isLoading: boolean
	cast: Cast[]
	movieFull?: MovieFull
}

const initialState = {
	isLoading: true,
	movieFull: undefined,
	cast: []
}

export const useMovieDetails = (movieId: number) => {
	const [state, setState] = useState<MovieDetails>(initialState)

	const getMovieDetails = async () => {
		const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`)
		const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`)

		const [detailsRes, castRes] = await Promise.all([
			movieDetailsPromise,
			castPromise
		])

		setState({
			isLoading: false,
			movieFull: detailsRes.data,
			cast: castRes.data.cast
		})
	}

	useEffect(() => {
		getMovieDetails()
	}, [])

	return {
		...state
	}
}
