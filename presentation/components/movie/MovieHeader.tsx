import Ionicoms from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';


interface Props {
    poster: string;
    originalTitle: string;
    title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <>
            <LinearGradient
                start={[0, 0]}
                colors={['rgba(0,0,0,0.3)', 'transparent']}
                style={{ position: 'absolute', width: '100%', height: height * 0.7, zIndex: 1, elevation: -1 }} />
            <View style={{ position: 'absolute', top: 45, left: 10, zIndex: 99, elevation: 9 }}>
                <Pressable
                    onPress={() => router.dismiss()}>
                    <Ionicoms name="arrow-back" size={30} color="white" className='shadow' />
                </Pressable>
            </View>
            <View
                style={{ height: height * 0.7 }}
                className="shadow-xl shadow-black/20">


                <View className='flex-1 rounded-b-[25px] overflow-hidden'>
                    <Image
                        source={{ uri: poster }}
                        resizeMode='cover'
                        className='flex-1'

                    />


                </View>
            </View>

            <View className='mt-4 px-4'>
                <Text className='text-white text-3xl font-bold'>{title}</Text>
                <Text className='text-gray-400 text-lg font-semibold'>{originalTitle}</Text>
            </View>


        </>
    )
}

export default MovieHeader