import React, { useEffect } from 'react'

import { createContext, useState } from 'react'
import { AppState, Platform } from 'react-native'
import {
	check,
	openSettings,
	PERMISSIONS,
	PermissionStatus,
	request
} from 'react-native-permissions'

export interface PermissionState {
	locationStatus: PermissionStatus
}

export const permissionInitState: PermissionState = {
	locationStatus: 'unavailable'
}

type PermisionsContextProps = {
	permission: PermissionState
	askLocationPermission: () => void
	checkLocationPermission: () => void
}

export const permissionContext = createContext({} as PermisionsContextProps)

export const PermissionsProvider = ({ children }: any) => {
	const [permission, setPermission] = useState(permissionInitState)

	useEffect(() => {
		AppState.addEventListener('change', (state) => {
			if (state !== 'active') return
			checkLocationPermission()
		})
	}, [])

	const askLocationPermission = async () => {
		let permissionStatus: PermissionStatus

		if (Platform.OS === 'ios') {
			permissionStatus = await request(
				PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
			)
		} else {
			permissionStatus = await request(
				PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
			)
		}

		if (permissionStatus === 'blocked') {
			openSettings()
		}

		setPermission({
			...permission,
			locationStatus: permissionStatus
		})
	}

	const checkLocationPermission = async () => {
		let permissionStatus: PermissionStatus

		if (Platform.OS === 'ios') {
			permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
		} else {
			permissionStatus = await check(
				PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
			)
		}

		setPermission({
			...permission,
			locationStatus: permissionStatus
		})
	}

	const store = {
		permission,
		askLocationPermission,
		checkLocationPermission
	}

	return (
		<permissionContext.Provider value={store}>
			{children}
		</permissionContext.Provider>
	)
}
