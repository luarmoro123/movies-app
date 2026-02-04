import { Formattar } from '@/config/helpers/formatter';
import { CompleteMovie } from '@/infrastructure/interfaces/movie.inteface';
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
    movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
    return (
        <View className="mx-5 mt-4">
            {/* Sección de Rating y Géneros */}
            <View className="flex-row items-center mb-4">
                <View className="bg-yellow-500 px-2 py-1 rounded-md mr-3">
                    <Text className="text-black font-bold">⭐ {movie.rating.toFixed(1)}</Text>
                </View>

                <Text className="text-gray-400 text-sm flex-1" numberOfLines={1}>
                    {movie.geners.join(' • ')}
                </Text>
            </View>

            {/* Título de la sección */}
            <Text className="text-white text-2xl font-bold mb-2">
                Historia
            </Text>

            {/* Descripción / Sinopsis */}
            <Text className="text-gray-300 text-base leading-6 text-justify">
                {movie.description}
            </Text>

            {/* Presupuesto */}
            <View className="mt-4 flex-row">
                <Text className="text-white font-semibold">Presupuesto: </Text>
                <Text className="text-gray-400">
                    {movie.budget == 0 ? 'No disponible' : `${Formattar.currenty(movie.budget)}`}
                </Text>
            </View>
            {/* Actores */}
            <View className="mt-4">
                <Text className="text-white font-semibold">Actores:</Text>

            </View>
        </View>
    );
};

export default MovieDescription;