import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import {
	Alert,
	Keyboard,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import { Bg } from '../components/Bg'
import { KeyboardAvoidingViewC } from '../components/KeyboardAvoidingViewC'
import { WhiteLogo } from '../components/WhiteLogo'
import { useAuthContext } from '../hooks/useAuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/loginTheme'

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {
	const { signIn, errorMessage, removeError } = useAuthContext()

	const { email, password, onChange } = useForm({
		email: '',
		password: ''
	})

	useEffect(() => {
		if (errorMessage.length === 0) return

		Alert.alert('Login incorrecto', errorMessage, [
			{
				text: 'OK',
				onPress: removeError
			}
		])
	}, [errorMessage])

	const onLogin = () => {
		signIn({ correo: email, password })
		Keyboard.dismiss()
	}
	return (
		<>
			<Bg />
			<KeyboardAvoidingViewC>
				<View style={loginStyles.formContainer}>
					<WhiteLogo />
					<Text style={loginStyles.title}>Iniciar sesión</Text>

					<View>
						<Text style={loginStyles.label}>
							Correo electronico
						</Text>
						<TextInput
							placeholder='ejemplo@gmail.com'
							placeholderTextColor={'rgba(255,255,255, 0.4)'}
							keyboardType='email-address'
							underlineColorAndroid={'#fff'}
							style={[
								loginStyles.inputField,
								Platform.OS === 'ios' &&
									loginStyles.inputFielIOS
							]}
							selectionColor='#fff'
							autoCapitalize='none'
							autoCorrect={false}
							value={email}
							onChangeText={(text) => onChange(text, 'email')}
							onSubmitEditing={onLogin}
						/>
					</View>

					<View>
						<Text style={loginStyles.label}>Contraseña</Text>
						<TextInput
							placeholder='123'
							secureTextEntry
							placeholderTextColor={'rgba(255,255,255, 0.4)'}
							underlineColorAndroid={'#fff'}
							style={[
								loginStyles.inputField,
								Platform.OS === 'ios' &&
									loginStyles.inputFielIOS
							]}
							selectionColor='#fff'
							autoCapitalize='none'
							autoCorrect={false}
							onChangeText={(text) => onChange(text, 'password')}
							value={password}
							onSubmitEditing={onLogin}
						/>
					</View>

					<View style={loginStyles.buttonContainer}>
						<TouchableOpacity
							activeOpacity={0.9}
							style={loginStyles.button}
							onPress={onLogin}
						>
							<Text style={loginStyles.buttonText}>Login</Text>
						</TouchableOpacity>
					</View>

					<View style={loginStyles.newUserContainer}>
						<TouchableOpacity
							activeOpacity={0.9}
							onPress={() => navigation.replace('RegisterScreen')}
						>
							<Text style={loginStyles.buttonTextNewUser}>
								Nueva cuenta
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingViewC>
		</>
	)
}
