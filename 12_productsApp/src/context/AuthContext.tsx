import React, { createContext, useEffect, useReducer } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { cafeApi } from '../api/cafeApi'
import {
	Usuario,
	LoginResponse,
	LoginData,
	RegisterData
} from '../interfaces/appInterfaces'
import { authReducer, AuthState } from './authReducer'

type AuthContextProps = {
	errorMessage: string
	token: string | null
	user: Usuario | null
	status: 'checking' | 'authenticated' | 'not-authenticated'
	signUp: (obj: RegisterData) => void
	signIn: (obj: LoginData) => void
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

	useEffect(() => {
		checkToken()
	}, [])

	const checkToken = async () => {
		const token = await AsyncStorage.getItem('token')

		//No hay token
		if (!token) return dispatch({ type: 'notAuthenticated' })

		//Si hay token
		const res = await cafeApi.get('/auth')

		if (res.status !== 200) {
			return dispatch({ type: 'notAuthenticated' })
		}

		await AsyncStorage.setItem('token', res.data.token)

		dispatch({
			type: 'signUp',
			payload: {
				token: res.data.token,
				user: res.data.user || res.data.usuario
			}
		})
	}

	const signIn = async ({ correo, password }: LoginData) => {
		try {
			const {
				data: { token, usuario: user }
			} = await cafeApi.post<LoginResponse>('/auth/login', {
				correo,
				password
			})
			dispatch({
				type: 'signUp',
				payload: {
					token,
					user
				}
			})

			await AsyncStorage.setItem('token', token)
		} catch (error: any) {
			console.log(error.response.data.msg)
			dispatch({
				type: 'addError',
				payload: error.response.data.msg || 'Credenciales incorrectas'
			})
		}
	}

	const removeError = () => {
		dispatch({
			type: 'removeError'
		})
	}

	const signUp = async ({ correo, nombre, password }: RegisterData) => {
		try {
			const {
				data: { token, usuario }
			} = await cafeApi.post<LoginResponse>('/usuarios', {
				correo,
				nombre,
				password
			})

			if (token) {
				await AsyncStorage.setItem('token', token)

				dispatch({
					type: 'signUp',
					payload: { user: usuario, token }
				})
			}
		} catch (error: any) {
			console.log(error.response.data.msg)
			dispatch({
				type: 'addError',
				payload:
					error.response.data.errors[0].msg || 'Revise la informacion'
			})
		}
	}

	const logOut = async () => {
		await AsyncStorage.removeItem('token')
		dispatch({
			type: 'logOut'
		})
	}

	const store = {
		...state,
		signUp,
		signIn,
		logOut,
		removeError
	}
	return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
}
