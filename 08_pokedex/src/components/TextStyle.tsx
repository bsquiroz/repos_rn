import React from 'react'
import { Text } from 'react-native'

interface Props {
	text: string
	stylesText?: {}
}

export const TextStyle = ({ text, stylesText }: Props) => {
	return <Text style={{ color: '#000', ...stylesText }}>{text}</Text>
}
