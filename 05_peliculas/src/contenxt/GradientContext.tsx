import React from 'react'
import { createContext, useState } from 'react'

interface ImageColors {
	primary: string
	secondary: string
}

interface ContextProps {
	colors: ImageColors
	prevColors: ImageColors
	handleSetColors: (colors: ImageColors) => void
	handleSetPrevColors: (colors: ImageColors) => void
}

export const GradientContext = createContext({} as ContextProps)

export const GradientProvider = ({ children }: any) => {
	const [colors, setColors] = useState<ImageColors>({
		primary: 'transparent',
		secondary: 'transparent'
	})

	const [prevColors, setPrevColors] = useState<ImageColors>({
		primary: 'transparent',
		secondary: 'transparent'
	})

	const handleSetColors = (colors: ImageColors) => {
		setColors(colors)
	}

	const handleSetPrevColors = (colors: ImageColors) => {
		setPrevColors(colors)
	}

	const store = {
		colors,
		prevColors,
		handleSetColors,
		handleSetPrevColors
	}

	return (
		<GradientContext.Provider value={store}>
			{children}
		</GradientContext.Provider>
	)
}
