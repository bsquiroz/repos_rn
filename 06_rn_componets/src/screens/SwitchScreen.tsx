import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { IconButtonLeft } from '../components/IconButtonLeft'
import { SwitchComponent } from '../components/SwitchComponent'
import { globalStyles } from '../theme/appTheme'

const initialState = {
	isActive: true,
	isHungry: false,
	isHappy: true
}

export const SwitchScreen = () => {
	const [state, setState] = useState(initialState)
	const { isActive, isHappy, isHungry } = state

	const handleState = (value: boolean, key: string) => {
		setState({
			...state,
			[key]: value
		})
	}

	return (
		<View
			style={{
				flex: 1
			}}
		>
			<IconButtonLeft />

			<HeaderTitle text='Desde switch' />

			<Text style={styles.styleText}>
				{JSON.stringify(state, null, 4)}
			</Text>

			<View style={globalStyles.containerContent}>
				<View style={styles.contentSwitch}>
					<Text>IsActive </Text>
					<SwitchComponent
						isOn={isActive}
						handleState={(value) => handleState(value, 'isActive')}
					/>
				</View>

				<View style={styles.contentSwitch}>
					<Text>isHungry </Text>
					<SwitchComponent
						isOn={isHungry}
						handleState={(value) => handleState(value, 'isHungry')}
					/>
				</View>

				<View style={styles.contentSwitch}>
					<Text>isHappy </Text>
					<SwitchComponent
						isOn={isHappy}
						handleState={(value) => handleState(value, 'isHappy')}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	styleText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000'
	},
	contentSwitch: {
		flexDirection: 'row'
	}
})
