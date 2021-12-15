import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { globalStyles } from '../theme/appTheme'

interface Props {
	text: string
}

export const HeaderTitle = ({ text }: Props) => {
	const { top } = useSafeAreaInsets()
	return (
		<View style={{ marginTop: top + 20, marginBottom: 20 }}>
			<Text style={[globalStyles.title, globalStyles.textCenter]}>
				{text}
			</Text>
		</View>
	)
}
