import React, { useState } from 'react'
import { Platform, Switch } from 'react-native'

interface Props {
	isOn: boolean
	handleState: (isOn: boolean) => void
}

export const SwitchComponent = ({ isOn, handleState }: Props) => {
	const [isEnabled, setIsEnabled] = useState(isOn)

	const toggleSwitch = () => {
		setIsEnabled(!isEnabled)
		handleState(!isEnabled)
	}

	return (
		<Switch
			trackColor={{ false: '#D9D9DB', true: '#5856D6' }}
			thumbColor={
				Platform.OS === 'android'
					? isEnabled
						? '#fff'
						: '#5856D6 '
					: ''
			}
			ios_backgroundColor='#3e3e3e'
			onValueChange={toggleSwitch}
			value={isEnabled}
		/>
	)
}
