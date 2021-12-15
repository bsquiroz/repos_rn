import { useEffect, useState } from 'react'
import { MovieDBNowPlaying, Movies } from '../interfaces/movieDB'
import movieDB from '../api/movieDB'

const initialState = {
	nowPlaying: [],
	popular: [],
	topRated: [],
	upcoming: []
}

interface MoviesState {
	nowPlaying: Movies[]
	popular: Movies[]
	topRated: Movies[]
	upcoming: Movies[]
}

const cargando = (setIsLoagind: any) => {
	setTimeout(() => {
		setIsLoagind(false)
	}, 2000)
}

export const useMovies = () => {
	const [moviesState, setMoviesState] = useState<MoviesState>(initialState)
	const [isLoagind, setIsLoagind] = useState(true)

	const getMovies = async () => {
		const nowPlayingPromise = movieDB.get<MovieDBNowPlaying>('/now_playing')
		const popularPromise = movieDB.get<MovieDBNowPlaying>('/popular')
		const topRatedPromise = movieDB.get<MovieDBNowPlaying>('/top_rated')
		const upcomingPromise = movieDB.get<MovieDBNowPlaying>('/upcoming')

		const res = await Promise.all([
			nowPlayingPromise,
			popularPromise,
			topRatedPromise,
			upcomingPromise
		])

		setMoviesState({
			nowPlaying: res[0].data.results,
			popular: res[1].data.results,
			topRated: res[2].data.results,
			upcoming: res[3].data.results
		})

		cargando(setIsLoagind)
	}

	useEffect(() => {
		getMovies()
	}, [])

	return {
		...moviesState,
		isLoagind
	}
}
