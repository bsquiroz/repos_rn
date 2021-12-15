import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { IconButtonLeft } from '../components/IconButtonLeft'
import { SwitchComponent } from '../components/SwitchComponent'
import { useThemeContext } from '../context/themeContext/useThemeContext'
import { globalStyles } from '../theme/appTheme'

const initialState = {
	isActive: true,
	isHungry: false,
	isHappy: true
}

export const SwitchScreen = () => {
	const [state, setState] = useState(initialState)
	const { isActive, isHappy, isHungry } = state

	const {
		theme: { colors }
	} = useThemeContext()

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

			<Text style={{ ...styles.styleText, color: colors.text }}>
				{JSON.stringify(state, null, 4)}
			</Text>

			<View style={globalStyles.containerContent}>
				<View style={styles.contentSwitch}>
					<Text style={{ color: colors.text }}>IsActive </Text>
					<SwitchComponent
						isOn={isActive}
						handleState={(value) => handleState(value, 'isActive')}
					/>
				</View>

				<View style={styles.contentSwitch}>
					<Text style={{ color: colors.text }}>isHungry </Text>
					<SwitchComponent
						isOn={isHungry}
						handleState={(value) => handleState(value, 'isHungry')}
					/>
				</View>

				<View style={styles.contentSwitch}>
					<Text style={{ color: colors.text }}>isHappy </Text>
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
