
import MovieActors from '@/presentation/components/movie/MovieActors';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import useMovie from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const MovieScreen = () => {

    const { id } = useLocalSearchParams();
    const { movieQuery, castQuery } = useMovie(+id);

    if (movieQuery.isLoading || !movieQuery.data) {
        return (
            <View className=' flex flex-1 justify-center items-center'>
                <Text>Loading...</Text>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }



    return (
        <ScrollView className='flex flex-1 bg-gray-900'>
            <MovieHeader
                originalTitle={movieQuery.data.originalTitle}
                title={movieQuery.data.title}
                poster={movieQuery.data.poster} />

            <MovieDescription
                movie={movieQuery.data} />

            <MovieActors cast={castQuery.data ?? []} />
        </ScrollView>


    )
}

export default MovieScreen