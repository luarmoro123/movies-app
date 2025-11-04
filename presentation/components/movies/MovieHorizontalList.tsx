import { Movie } from '@/infrastructure/interfaces/movie.inteface'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import MoviePoster from './MoviePoster'

interface Props {
    title?: string
    movies: Movie[]

}

const MovieHorizontalList = ({ title, movies }: Props) => {
    return (
        <View className='my-5'>
            {title && <Text className='text-3xl font-bold mb-3 text-white px-4'>{title}</Text>}
            <FlatList
                className='mb-5'
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => `${item.id}}`}
                renderItem={({ item }) => (
                    <MoviePoster id={item.id} poster={item.poster} width={100} height={150} />
                )}
            />
        </View>
    )
}

export default MovieHorizontalList