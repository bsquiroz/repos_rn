import { useContext } from 'react'
import { permissionContext } from '../contexts/PermissionsContext'

export const usePermissionsContext = () => {
	return useContext(permissionContext)
}
