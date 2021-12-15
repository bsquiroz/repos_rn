import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { IconButtonLeft } from '../components/IconButtonLeft'

export const ModalScreen = () => {
	const [isActiveModal, setIsActiveModal] = useState(false)

	return (
		<View>
			<IconButtonLeft />
			<HeaderTitle text='Modal' />
			<Button
				title='Mostrar modal'
				onPress={() => setIsActiveModal(true)}
			/>

			<Modal
				animationType='fade'
				visible={isActiveModal}
				transparent={true}
			>
				<BodyModal setIsActiveModal={setIsActiveModal} />
			</Modal>
		</View>
	)
}

interface Props {
	setIsActiveModal: Function
}

const BodyModal = ({ setIsActiveModal }: Props) => {
	return (
		<View style={styles.styleModal}>
			<View style={styles.styleModalBody}>
				<HeaderTitle text='Title modal' />
				<Text>body modal</Text>
				<Button
					title={'salir'}
					onPress={() => setIsActiveModal(false)}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	styleModal: {
		flex: 1,
		backgroundColor: '#00000099',
		justifyContent: 'center',
		alignItems: 'center'
	},
	styleModalBody: { backgroundColor: '#fff', padding: 15, borderRadius: 10 }
})
