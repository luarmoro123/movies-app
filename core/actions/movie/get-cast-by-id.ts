import { movieApi } from "@/core/api/movie-api";
import { MovieDBCreditsResponse } from "@/infrastructure/interfaces/CreditsResponse";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";



export const getMovieCastById = async (movieId: number) => {
    try {
        const { data } = await movieApi.get<MovieDBCreditsResponse>(`/${movieId}/credits`);


        return data.cast.map(CastMapper.fromMovieDBCastToEntity);

    } catch (error) {
        console.log(error)
        throw 'can not load movie cast'


    }
}
