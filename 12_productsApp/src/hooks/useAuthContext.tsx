import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useAuthContext = () => {
	return useContext(AuthContext)
}
