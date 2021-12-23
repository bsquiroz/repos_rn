import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Keyboard, Platform, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { KeyboardAvoidingViewC } from '../components/KeyboardAvoidingViewC'
import { WhiteLogo } from '../components/WhiteLogo'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/loginTheme'

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({ navigation }: Props) => {
	const { email, password, name, repeat_pass, onChange } = useForm({
		email: '',
		password: '',
		name: '',
		repeat_pass: ''
	})

	const onRegister = () => {
		console.log({ email, password })
		Keyboard.dismiss()
	}

	return (
		<>
			<KeyboardAvoidingViewC styles={{ backgroundColor: '#5856D6' }}>
				<View style={loginStyles.formContainer}>
					<WhiteLogo />

					<Text style={loginStyles.title}>Registro</Text>

					<View>
						<Text style={loginStyles.label}>Nombre</Text>
						<TextInput
							placeholder='Brayan muñoz'
							placeholderTextColor={'rgba(255,255,255, 0.4)'}
							underlineColorAndroid={'#fff'}
							style={[
								loginStyles.inputField,
								Platform.OS === 'ios' &&
									loginStyles.inputFielIOS
							]}
							selectionColor='#fff'
							autoCapitalize='words'
							autoCorrect={false}
							value={name}
							onChangeText={(text) => onChange(text, 'name')}
							onSubmitEditing={onRegister}
						/>
					</View>

					<View>
						<Text style={loginStyles.label}>Correo</Text>
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
							onSubmitEditing={onRegister}
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
							onSubmitEditing={onRegister}
						/>
					</View>

					<View>
						<Text style={loginStyles.label}>
							Repetir contraseña
						</Text>
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
							onChangeText={(text) =>
								onChange(text, 'repeat_pass')
							}
							value={repeat_pass}
							onSubmitEditing={onRegister}
						/>
					</View>

					<View style={loginStyles.buttonContainer}>
						<TouchableOpacity
							activeOpacity={0.9}
							style={loginStyles.button}
							onPress={onRegister}
						>
							<Text style={loginStyles.buttonText}>
								Registrarse
							</Text>
						</TouchableOpacity>
					</View>

					<View style={loginStyles.newUserContainer}>
						<TouchableOpacity
							activeOpacity={0.9}
							onPress={() => navigation.replace('LoginScreen')}
						>
							<Text style={loginStyles.buttonTextNewUser}>
								Volver a inicio
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingViewC>
		</>
	)
}
