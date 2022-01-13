import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
	handleButton: () => void
	textButton: string
	iconButton: string
	colorBtn?: string
}

export const Button = ({
	handleButton,
	textButton,
	iconButton,
	colorBtn
}: Props) => {
	const StylesBtn = colorBtn
		? { ...styles.btn, backgroundColor: colorBtn }
		: styles.btn
	return (
		<TouchableOpacity style={StylesBtn} onPress={handleButton}>
			<Text style={styles.btnText}>
				{textButton}
				{'   '}
			</Text>
			<Icon name={iconButton} size={25} color={'#fff'} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: '#5856D6',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		paddingHorizontal: 20,
		marginHorizontal: 10,
		marginVertical: 5,
		flexDirection: 'row'
	},
	btnText: {
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold'
	}
})
