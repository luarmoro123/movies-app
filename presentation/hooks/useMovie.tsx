import { getMovieCastById } from '@/core/actions/movie/get-cast-by-id'
import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action'
import { useQuery } from '@tanstack/react-query'

const useMovie = (id: number) => {
    const movieQuery = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieByIdAction(id),
        staleTime: 1000 * 60 * 60 * 24 //24 horas
    })
    const castQuery = useQuery({
        queryKey: ['movie', id, 'cast'],
        queryFn: () => getMovieCastById(id),
        staleTime: 1000 * 60 * 60 * 24 //24 horas
    })

    return {
        movieQuery,
        castQuery

    }
}

export default useMovie