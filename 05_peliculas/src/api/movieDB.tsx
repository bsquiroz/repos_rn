import axios from 'axios'

const movieDB = axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie',
	params: {
		api_key: '461b9adbdc5bb9a4e692f46f38a0eba7',
		language: 'es-ES'
	}
})

export default movieDB
