import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export const IconButtonLeft = () => {
	const { goBack } = useNavigation()
	return (
		<TouchableOpacity onPress={goBack}>
			<Icon name='chevron-back-outline' color='#000' size={40} />
		</TouchableOpacity>
	)
}
