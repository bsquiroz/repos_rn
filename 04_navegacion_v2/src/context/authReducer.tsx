import { AuthState } from './AuthContext'

type AuthAction =
	| { type: 'signIn' }
	| { type: 'logout' }
	| { type: 'changeFavIcon'; payload: string }
	| { type: 'changeNameUser'; payload: string }

export const authReducer = (
	state: AuthState,
	action: AuthAction
): AuthState => {
	switch (action.type) {
		case 'signIn':
			return {
				...state,
				isLoggedIn: true,
				userName: 'no-usernane-yet'
			}

		case 'logout':
			return {
				...state,
				isLoggedIn: false,
				userName: undefined,
				favoriteIcon: undefined
			}

		case 'changeFavIcon':
			return {
				...state,
				favoriteIcon: action.payload
			}

		case 'changeNameUser':
			return {
				...state,
				userName: action.payload
			}

		default:
			return state
	}
}
