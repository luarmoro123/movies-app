import { router } from 'expo-router'
import React from 'react'
import { Image, Pressable } from 'react-native'

interface Props {
    id: number
    poster: string
    width?: number
    height?: number
    className?: string
}

const MoviePoster = ({ id, poster, width = 150, height = 250, className }: Props) => {
    return (
        <Pressable className={`active:opacity-90 px-2 ${className}`}
            onPress={() => router.push(`/movie/${id}`)}
        >
            <Image
                source={{ uri: poster }}
                className='shadow-lg rounded-2xl w-full h-full'
                style={{
                    width: width,
                    height: height
                }}
                resizeMode='cover'
            />
        </Pressable>
    )
}

export default MoviePoster