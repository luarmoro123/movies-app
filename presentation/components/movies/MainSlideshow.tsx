import { Movie } from '@/infrastructure/interfaces/movie.inteface';
import React, { useRef } from 'react';
import { useWindowDimensions, View } from 'react-native';
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from './MoviePoster';


interface Props {
    movies: Movie[]
}

const MainSlideshow = ({ movies }: Props) => {
    const ref = useRef<ICarouselInstance>(null)
    const width = useWindowDimensions().width
    return (
        <View className='h-[450px] w-full'>
            <Carousel
                ref={ref}
                data={movies}
                renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} width={300} height={450} />}
                width={width}
                height={450}
                style={{
                    width: width,
                    height: 450,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50
                }}
                defaultIndex={1}
            />

        </View>
    )
}

export default MainSlideshow