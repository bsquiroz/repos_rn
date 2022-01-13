import { useEffect, useState } from 'react'
import { cafeApi } from '../api/cafeApi'
import { Categoria, CategoriesResponse } from '../interfaces/appInterfaces'

export const useCategories = () => {
	const [categories, setCategories] = useState<Categoria[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getCategories()
	}, [])

	const getCategories = async () => {
		const res = await cafeApi.get<CategoriesResponse>('/categorias')
		setCategories(res.data.categorias)
		setIsLoading(false)
	}

	return { categories, isLoading }
}
