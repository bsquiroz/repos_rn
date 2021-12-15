import React from 'react'

import { Image, Text, View } from 'react-native'
import { Cast } from '../interfaces/movieDB'
import { globalStyles } from '../theme/globalStyles'

interface Props {
	actor: Cast
}

export const ActorItem = ({ actor }: Props) => {
	const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				marginVertical: 10,
				padding: 10,
				backgroundColor: '#fff',
				borderRadius: 20,
				marginHorizontal: 10,

				...globalStyles.shadow
			}}
		>
			{actor.profile_path && (
				<View>
					<Image
						source={{ uri }}
						style={{ width: 60, height: 60, borderRadius: 100 }}
					/>
				</View>
			)}

			<View style={{ marginLeft: 5 }}>
				<Text style={{ fontWeight: 'bold', color: '#000' }}>
					{actor.name}
				</Text>
				<Text>{actor.character}</Text>
			</View>
		</View>
	)
}
