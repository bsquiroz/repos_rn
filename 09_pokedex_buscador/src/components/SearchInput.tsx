import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebounceValue } from '../hooks/useDebounceValue'

interface Props {
	iconName: string
	onDebounce?: (value: string) => void
}

export const SearchInput = ({ iconName, onDebounce }: Props) => {
	const [textValue, setTextValue] = useState('')

	const { debouncedValue } = useDebounceValue(textValue, 300)

	useEffect(() => {
		onDebounce!(debouncedValue)
	}, [debouncedValue])

	return (
		<View style={styles.container}>
			<View style={styles.textBg}>
				<TextInput
					placeholder='Buscar pokemon'
					style={styles.textInput}
					autoCapitalize='none'
					autoCorrect={false}
					value={textValue}
					onChangeText={setTextValue}
				/>
				<Icon name={iconName} size={30} color={'#000'} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 10,
		top: 20,
		position: 'absolute',
		width: '95%',
		zIndex: 999
	},
	textBg: {
		backgroundColor: '#F3F1F3',
		borderRadius: 50,
		height: 40,
		paddingHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 7
		},
		shadowOpacity: 0.43,
		shadowRadius: 9.51,

		elevation: 15
	},
	textInput: {
		flex: 1,
		fontSize: 20
	}
})
