import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {
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
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/loginTheme'

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {
	const { email, password, onChange } = useForm({
		email: '',
		password: ''
	})

	const onLogin = () => {
		console.log({ email, password })
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
