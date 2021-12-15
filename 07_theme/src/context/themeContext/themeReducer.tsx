import { Theme } from '@react-navigation/native'

type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
	currentTheme: 'light' | 'dark'
	dividerColor: string
}

export const lightTheme: ThemeState = {
	currentTheme: 'light',
	dark: false,
	dividerColor: '#00000099',
	colors: {
		primary: '#5856D6',
		background: '#fff',
		card: 'blue',
		text: '#000',
		border: 'pink',
		notification: 'orange'
	}
}

export const darkTheme: ThemeState = {
	currentTheme: 'dark',
	dark: true,
	dividerColor: '#fff99',
	colors: {
		primary: '#5856D6',
		background: '#000',
		card: 'blue',
		text: '#fff',
		border: 'pink',
		notification: 'orange'
	}
}

export const themeReducer = (state: ThemeState, action: ThemeAction) => {
	switch (action.type) {
		case 'set_light_theme':
			return { ...lightTheme }

		case 'set_dark_theme':
			return { ...darkTheme }

		default:
			return state
	}
}
