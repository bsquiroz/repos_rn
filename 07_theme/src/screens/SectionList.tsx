import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { IconButtonLeft } from '../components/IconButtonLeft'
import { ItemSeparator } from '../components/ItemSeparator'
import { globalStyles } from '../theme/appTheme'

interface Casas {
	casa: string
	data: string[]
}

const casas: Casas[] = [
	{
		casa: 'DC Comics',
		data: [
			'Batman',
			'Superman',
			'Robin',
			'Wonder Woman',
			'Flash',
			'Arrow',
			'Batman',
			'Superman',
			'Robin',
			'Wonder Woman',
			'Flash',
			'Arrow'
		]
	},
	{
		casa: 'Marvel Comics',
		data: [
			'Antman',
			'Thor',
			'Spiderman',
			'Hulck',
			'American cap',
			'Falcon',
			'Iro man',
			'Antman',
			'Thor',
			'Spiderman',
			'Hulck',
			'American cap',
			'Falcon',
			'Iro man'
		]
	},
	{
		casa: 'Anime',
		data: [
			'Kenshin',
			'Goku',
			'Saitama',
			'Gohan',
			'Levi',
			'Eren',
			'Mikasa',
			'Kenshin',
			'Goku',
			'Saitama',
			'Gohan',
			'Levi',
			'Eren',
			'Mikasa'
		]
	},
	{
		casa: 'DC Comics',
		data: [
			'Batman',
			'Superman',
			'Robin',
			'Wonder Woman',
			'Flash',
			'Arrow',
			'Batman',
			'Superman',
			'Robin',
			'Wonder Woman',
			'Flash',
			'Arrow'
		]
	},
	{
		casa: 'DC Comics',
		data: [
			'Batman',
			'Superman',
			'Robin',
			'Wonder Woman',
			'Flash',
			'Arrow',
			'Batman',
			'Superman',
			'Robin',
			'Wonder Woman',
			'Flash',
			'Arrow'
		]
	},
	{
		casa: 'Marvel Comics',
		data: [
			'Antman',
			'Thor',
			'Spiderman',
			'Hulck',
			'American cap',
			'Falcon',
			'Iro man',
			'Antman',
			'Thor',
			'Spiderman',
			'Hulck',
			'American cap',
			'Falcon',
			'Iro man'
		]
	},
	{
		casa: 'Anime',
		data: [
			'Kenshin',
			'Goku',
			'Saitama',
			'Gohan',
			'Levi',
			'Eren',
			'Mikasa',
			'Kenshin',
			'Goku',
			'Saitama',
			'Gohan',
			'Levi',
			'Eren',
			'Mikasa'
		]
	},
	{
		casa: 'DC Comics',
		data: [
			'Batman',
			'Superman',
			'Robin',
			'Wonder Woman',
			'Flash',
			'Arrow',
			'Batman',
			'Superman',
			'Robin',
			'Wonder Woman',
			'Flash',
			'Arrow'
		]
	}
]

export const customSectionList = () => {
	return (
		<View
			style={{
				...globalStyles.globalMargin,
				flex: 1
			}}
		>
			<IconButtonLeft />

			<SectionList
				sections={casas}
				keyExtractor={(item, i) => item + i}
				ListHeaderComponent={() => <HeaderTitle text='Section List' />}
				ListFooterComponent={() => (
					<HeaderTitle text={`Total de casa: ${casas.length}`} />
				)}
				renderItem={({ item }) => <Text>{item}</Text>}
				renderSectionHeader={({ section: { casa } }) => (
					<HeaderTitle text={casa} />
				)}
				renderSectionFooter={({ section: { data } }) => (
					<HeaderTitle text={`Total de elementos: ${data.length}`} />
				)}
				stickySectionHeadersEnabled
				ItemSeparatorComponent={ItemSeparator}
			/>
		</View>
	)
}
