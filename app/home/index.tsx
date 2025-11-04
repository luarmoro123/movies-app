
import MainSlideshow from '@/presentation/components/movies/MainSlideshow'
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList'
import { useMovie } from '@/presentation/hooks/useMovies'
import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreem = () => {
    const safeArea = useSafeAreaInsets()
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovie()
    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color='purple' size={40} />
            </View>
        )
    }
    return (
        <ScrollView>
            <View className='mt-2 pd-10  ' style={{ padding: safeArea.top }}>
                <Text className='text-3xl font-bold px-4 mb-2  '>
                    Movies App
                </Text>
                <MainSlideshow movies={nowPlayingQuery.data ?? []} />
                <MovieHorizontalList title='Popular' movies={popularQuery.data ?? []} />
                <MovieHorizontalList title='Top Rated' movies={topRatedQuery.data ?? []} />
                <MovieHorizontalList title='Upcoming' movies={upcomingQuery.data ?? []} />
                <MovieHorizontalList movies={upcomingQuery.data ?? []} />
            </View>
        </ScrollView>


    )
}

export default HomeScreem