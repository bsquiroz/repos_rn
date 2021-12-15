import { StyleSheet } from 'react-native'

export const colores = {
	primary: '#5856d6'
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	globalMargin: {
		marginHorizontal: 20
	},
	title: {
		fontSize: 30,
		marginBottom: 10,
		color: '#fff'
	},
	SubTitle: {
		fontSize: 20,
		marginBottom: 10,
		color: '#fff'
	},
	titleScreen: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
		color: '#000'
	},
	centerContentRow: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	botonPersona: {
		width: 100,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		borderRadius: 10
	},
	textBotonPersona: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff'
	},
	avatarContainer: {
		alignItems: 'center',
		marginVertical: 20
	},
	avatar: {
		width: 200,
		height: 200,
		borderRadius: 100,
		borderWidth: 5
	},
	menuContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	menuBoton: {
		backgroundColor: '#316B83',
		marginHorizontal: 10,
		marginBottom: 10,
		width: '90%',
		padding: 10,
		borderRadius: 30,
		flexDirection: 'row'
	},
	titleMenuContainer: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff',
		textAlign: 'center',
		marginLeft: 10
	},
	textUsername: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
		color: '#000'
	}
})
