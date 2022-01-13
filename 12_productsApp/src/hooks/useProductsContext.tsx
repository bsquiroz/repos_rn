import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'

export const useProductsContext = () => {
	return useContext(ProductsContext)
}
