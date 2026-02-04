import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
interface options {
    page?: number;
    limit?: number;
}
export const upcomingMoviesAction = async ({ page = 1, limit = 10 }: options) => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming', {
            params: {
                page: page,
            }
        })
        //console.log(JSON.stringify(data, null, 2))

        const movie = data.results.map(MovieMapper.fromTheMovieDBToMovie)
        return movie;

    } catch (error) {
        console.log(error)
        throw 'can not load upcoming movies'
    }

}