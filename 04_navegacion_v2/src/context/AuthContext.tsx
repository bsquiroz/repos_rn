import { createContext, useReducer } from 'react'
import React from 'react'
import { authReducer } from './authReducer'

// Definir como luce, que informacion tendré aqui
export interface AuthState {
	isLoggedIn: boolean
	userName?: string
	favoriteIcon?: string
}

//Estado inicial
export const authInitialState: AuthState = {
	isLoggedIn: false,
	userName: undefined,
	favoriteIcon: undefined
}

// Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
	authState: AuthState
	signIn: () => void
	logout: () => void
	changeFavIcon: (data: string) => void
	changeNameUser: (data: string) => void
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

//componente que es proveedor del estado
export const AuthProvider = ({ children }: any) => {
	const [authState, dispatch] = useReducer(authReducer, authInitialState)

	const signIn = () => {
		dispatch({
			type: 'signIn'
		})
	}

	const logout = () => {
		dispatch({
			type: 'logout'
		})
	}

	const changeFavIcon = (data: string) => {
		dispatch({
			type: 'changeFavIcon',
			payload: data
		})
	}

	const changeNameUser = (data: string) => {
		dispatch({
			type: 'changeNameUser',
			payload: data
		})
	}

	return (
		<AuthContext.Provider
			value={{
				authState,
				signIn,
				logout,
				changeFavIcon,
				changeNameUser
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
