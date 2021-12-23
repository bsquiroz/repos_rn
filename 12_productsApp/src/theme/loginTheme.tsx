import { StyleSheet } from 'react-native'

export const loginStyles = StyleSheet.create({
	formContainer: {
		paddingHorizontal: 10,
		flex: 1,
		justifyContent: 'center'
	},
	title: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
		marginTop: 20
	},
	label: {
		marginTop: 25,
		color: '#fff',
		fontWeight: 'bold'
	},
	inputField: {
		color: '#fff',
		fontSize: 20
	},
	inputFielIOS: {
		borderBottomColor: '#fff',
		borderBottomWidth: 2,
		paddingBottom: 5
	},
	buttonContainer: {
		alignItems: 'center',
		marginTop: 50
	},
	button: {
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingVertical: 5,
		borderRadius: 100
	},
	buttonText: {
		fontSize: 19,
		color: '#5856D6'
	},
	buttonTextNewUser: {
		fontSize: 19,
		color: '#fff'
	},
	newUserContainer: {
		alignItems: 'flex-end',
		marginTop: 20
	}
})
