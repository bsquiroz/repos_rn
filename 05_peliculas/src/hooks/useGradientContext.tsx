import React, { useContext } from 'react'
import { GradientContext } from '../contenxt/GradientContext'

export const useGradientContext = () => {
	const gradientContext = useContext(GradientContext)
	return gradientContext
}
