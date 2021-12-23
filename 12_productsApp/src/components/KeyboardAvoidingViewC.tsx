import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

interface Props {
	children: any
	styles?: {}
}
export const KeyboardAvoidingViewC = ({ children, styles }: Props) => {
	console.log(styles)

	return (
		<KeyboardAvoidingView
			style={{
				flex: 1,
				...styles
			}}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			{children}
		</KeyboardAvoidingView>
	)
}
