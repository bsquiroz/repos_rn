import React, { useState } from 'react'

import Carousel, { Pagination } from 'react-native-snap-carousel'

import {
	Animated,
	Dimensions,
	Image,
	ImageSourcePropType,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import { colors } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { useAnimation } from '../hooks/useAnimation'
import { StackScreenProps } from '@react-navigation/stack'
import { useThemeContext } from '../context/themeContext/useThemeContext'

const { height: SH, width: SW } = Dimensions.get('window')

interface Props extends StackScreenProps<any, any> {}

interface Slide {
	title: string
	desc: string
	img: ImageSourcePropType
}

const items: Slide[] = [
	{
		title: 'Titulo 1',
		desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
		img: require('../assets/slide-1.png')
	},
	{
		title: 'Titulo 2',
		desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
		img: require('../assets/slide-2.png')
	},
	{
		title: 'Titulo 3',
		desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
		img: require('../assets/slide-3.png')
	}
]

export const SlidesScreen = ({ navigation }: Props) => {
	const [activeIndex, setActiveIndex] = useState(0)

	const { fadeIn, fadeOut, opacity } = useAnimation()

	const { theme } = useThemeContext()
	const renderItem = (item: Slide) => {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: theme.colors.background,
					borderRadius: 5,
					padding: 40,
					justifyContent: 'center'
				}}
			>
				<Image
					source={item.img}
					style={{
						width: 350,
						height: 400,
						resizeMode: 'center'
					}}
				/>
				<Text style={styles.textTitle}>{item.title}</Text>
				<Text style={{ ...styles.textDesc, color: theme.colors.text }}>
					{item.desc}
				</Text>
			</View>
		)
	}

	return (
		<SafeAreaView
			style={{
				flex: 1
			}}
		>
			<Carousel
				//   ref={(c) => { this._carousel = c; }}
				data={items}
				renderItem={({ item }) => renderItem(item)}
				sliderWidth={SW}
				itemWidth={SW}
				layout='default'
				onSnapToItem={(index) => {
					setActiveIndex(index)

					if (index === items.length - 1) {
						fadeIn()
					}

					if (index !== items.length - 1) {
						fadeOut()
					}
				}}
			/>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<Pagination
					dotsLength={items.length}
					activeDotIndex={activeIndex}
					dotStyle={{
						width: 10,
						height: 10,
						borderRadius: 10,
						backgroundColor: colors.primaryColor
					}}
				/>
				<Animated.View
					style={{
						opacity: opacity
					}}
				>
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							backgroundColor: colors.primaryColor,
							width: 150,
							height: 50,
							borderRadius: 10,
							justifyContent: 'center',
							alignItems: 'center'
						}}
						onPress={() => {
							if (activeIndex === items.length - 1) {
								navigation.navigate('Home')
							}
						}}
					>
						<Icon
							name='caret-forward-outline'
							size={30}
							color='#fff'
						/>
					</TouchableOpacity>
				</Animated.View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	textTitle: {
		color: colors.primaryColor,
		fontWeight: 'bold',
		fontSize: 20,
		textTransform: 'uppercase'
	},
	textDesc: {
		color: '#000',
		fontSize: 20
	}
})
