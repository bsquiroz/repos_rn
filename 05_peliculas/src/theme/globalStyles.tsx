import { StyleSheet } from 'react-native'

export const colorsTheme = {
	fontColorLight: '#000',
	fontColorDark: '#fff'
}

export const globalStyles = StyleSheet.create({
	btn: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50
	},
	btnPrimary: {
		backgroundColor: '#97BFB4'
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6
	}
})
