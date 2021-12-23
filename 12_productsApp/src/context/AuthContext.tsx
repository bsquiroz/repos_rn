import React, { createContext, useReducer } from 'react'
import { Usuario } from '../interfaces/appInterfaces'
import { authReducer, AuthState } from './authReducer'

type AuthContextProps = {
	errorMessage: string
	token: string | null
	user: Usuario | null
	status: 'checking' | 'authenticated' | 'not-authenticated'
	signUp: () => void
	signIn: () => void
	logOut: () => void
	removeError: () => void
}

const authinitialState: AuthState = {
	status: 'checking',
	token: null,
	errorMessage: '',
	user: null
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(authReducer, authinitialState)

	const signUp = () => {}
	const signIn = () => {}
	const logOut = () => {}
	const removeError = () => {}

	const store = {
		...state,
		signUp,
		signIn,
		logOut,
		removeError
	}
	return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
}
