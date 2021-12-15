import React, { createContext, useEffect, useReducer } from 'react'
import { useColorScheme } from 'react-native'
import { darkTheme, lightTheme, themeReducer, ThemeState } from './themeReducer'

interface ThemeContextProps {
	theme: ThemeState
	setDarkTheme: () => void
	setLightTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: any) => {
	const colorScheme = useColorScheme()
	const whatIsThemeSO = colorScheme === 'dark' ? darkTheme : lightTheme

	const [theme, dispatch] = useReducer(themeReducer, whatIsThemeSO)

	useEffect(() => {
		if (colorScheme === 'dark') {
			setDarkTheme()
		} else {
			setLightTheme()
		}
	}, [colorScheme])

	const setDarkTheme = () => {
		dispatch({ type: 'set_dark_theme' })
	}

	const setLightTheme = () => {
		dispatch({ type: 'set_light_theme' })
	}

	const store = {
		setDarkTheme,
		setLightTheme,
		theme
	}
	return (
		<ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
	)
}
