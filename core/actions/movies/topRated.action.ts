import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const topRatedMoviesAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated')
        //console.log(JSON.stringify(data, null, 2))

        const movie = data.results.map(MovieMapper.fromTheMovieDBToMovie)
        return movie;

    } catch (error) {
        console.log(error)
        throw 'can not load now playing movies'
    }

}