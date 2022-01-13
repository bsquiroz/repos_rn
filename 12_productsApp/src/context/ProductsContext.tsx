import React, { createContext, useEffect, useState } from 'react'
import { Asset } from 'react-native-image-picker'
import { cafeApi } from '../api/cafeApi'
import { Producto, ProductsResponse } from '../interfaces/appInterfaces'

type ProductsContextProps = {
	products: Producto[]
	loadProduct: () => Promise<void>
	addProduct: (categoryId: string, productName: string) => Promise<void>
	updateProduct: (
		categoryId: string,
		productName: string,
		productId: string
	) => Promise<void>
	deleteProduct: (productId: string) => Promise<void>
	loadProductById: (productId: string) => Promise<Producto>
	uploadImage: (data: any, productId: string) => Promise<void>
}

export const ProductsContext = createContext({} as ProductsContextProps)

export const ProductsProvider = ({ children }: any) => {
	const [products, setProducts] = useState<Producto[]>([])

	useEffect(() => {
		loadProduct()
	}, [])

	const loadProduct = async (): Promise<void> => {
		const res = await cafeApi.get<ProductsResponse>('/productos?limite=10')
		/* setProducts([...products, ...res.data.productos]) */

		setProducts(res.data.productos)
	}

	const addProduct = async (categoryId: string, productName: string) => {
		const obj = {
			nombre: productName,
			categoria: categoryId
		}

		const res = await cafeApi.post<Producto>('/productos', obj)
		setProducts([...products, res.data])
	}

	const updateProduct = async (
		categoryId: string,
		productName: string,
		productId: string
	) => {
		const obj = {
			nombre: productName,
			categoria: categoryId
		}
		const res = await cafeApi.put(`/productos/${productId}`, obj)
		setProducts(
			products.map((product) =>
				product._id === productId ? res.data : product
			)
		)
	}

	const deleteProduct = async (productId: string) => {
		await cafeApi.delete(`/productos/${productId}`)
	}

	const loadProductById = async (productId: string): Promise<Producto> => {
		const res = await cafeApi.get<Producto>(`/productos/${productId}`)
		return res.data
	}

	const uploadImage = async (data: Asset, productId: string) => {
		const fileToUpload = {
			uri: data.uri,
			type: data.type,
			name: data.fileName
		}

		const formData = new FormData()
		formData.append('archivo', fileToUpload)

		try {
			const res = await cafeApi.put<Producto>(
				`/uploads/productos/${productId}`,
				formData
			)
			console.log(res.data)
		} catch (error) {
			console.log({ error })
		}
	}

	const store = {
		products,
		loadProduct,
		addProduct,
		updateProduct,
		deleteProduct,
		loadProductById,
		uploadImage
	}
	return (
		<ProductsContext.Provider value={store}>
			{children}
		</ProductsContext.Provider>
	)
}
