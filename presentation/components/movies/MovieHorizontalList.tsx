import { Movie } from '@/infrastructure/interfaces/movie.inteface'
import React, { useEffect, useRef } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import MoviePoster from './MoviePoster'

interface Props {
    title?: string
    movies: Movie[]

    loadNextPage?: () => void

}

const MovieHorizontalList = ({ title, movies, loadNextPage }: Props) => {

    const isLoading = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200);


    }, [movies])

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const IsEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
        if (!IsEndReached) return
        isLoading.current = true;

        loadNextPage && loadNextPage();
    }
    return (
        <View className='my-5'>
            {title && <Text className='text-3xl font-bold mb-3 text-white px-4'>{title}</Text>}
            <FlatList
                className='mb-5'
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, i) => `${item.id}} - ${i}`}
                renderItem={({ item }) => (
                    <MoviePoster id={item.id} poster={item.poster} width={100} height={150} />
                )}
                onScroll={onScroll}
            />
        </View>
    )
}

export default MovieHorizontalList