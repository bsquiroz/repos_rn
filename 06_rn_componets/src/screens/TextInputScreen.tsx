import React from 'react'
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard,
	Switch
} from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { IconButtonLeft } from '../components/IconButtonLeft'
import { SwitchComponent } from '../components/SwitchComponent'
import { useForm } from '../hooks/useForm'
import { colors, globalStyles } from '../theme/appTheme'

const initialState = {
	name: '',
	lastName: '',
	email: '',
	phone: '',
	isSubscribed: false
}

export const TextInputScreen = () => {
	const { form, onChange, isSubscribed } = useForm(initialState)

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<ScrollView>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={{ ...globalStyles.globalMargin, flex: 1 }}>
						<IconButtonLeft />
						<HeaderTitle text='Textinput screen' />
						<TextInput
							placeholder='Ingrese su nombre'
							style={styles.inputStyles}
							autoCorrect={false}
							autoCapitalize='words'
							onChangeText={(value) => onChange(value, 'name')}
						/>
						<TextInput
							placeholder='Ingrese su apellido'
							style={styles.inputStyles}
							autoCorrect={false}
							autoCapitalize='words'
							onChangeText={(value) =>
								onChange(value, 'lastName')
							}
						/>
						<TextInput
							placeholder='Ingrese su correo'
							style={styles.inputStyles}
							autoCorrect={false}
							autoCapitalize='none'
							onChangeText={(value) => onChange(value, 'email')}
							keyboardType='email-address'
						/>
						<TextInput
							placeholder='Ingrese su telefono'
							style={styles.inputStyles}
							onChangeText={(value) => onChange(value, 'phone')}
							keyboardType='phone-pad'
						/>
						<View style={styles.contentSwitch}>
							<Text>IsSusbcribe</Text>
							<SwitchComponent
								isOn={isSubscribed}
								handleState={(value) =>
									onChange(value, 'isSubscribed')
								}
							/>
						</View>
						<View style={globalStyles.containerContent}>
							<Text style={globalStyles.title}>
								{JSON.stringify(form, null, 4)}
							</Text>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	inputStyles: {
		borderWidth: 3,
		height: 50,
		paddingHorizontal: 10,
		borderRadius: 10,
		borderColor: colors.primaryColor,
		marginVertical: 5
	},
	contentSwitch: {
		borderWidth: 3,
		height: 50,
		paddingHorizontal: 10,
		borderRadius: 10,
		borderColor: colors.primaryColor,
		marginVertical: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
})
