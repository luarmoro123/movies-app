import { nowPlayingAction } from "@/core/actions/movies/now-playing.actions"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedMoviesAction } from "@/core/actions/movies/topRated.action"
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action"
import { useQuery } from "@tanstack/react-query"

export const useMovie = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPLaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 //24 horas
    })
    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24 //24 horas
    })
    const topRatedQuery = useQuery({
        queryKey: ['movies', 'top_Rated'],
        queryFn: topRatedMoviesAction,
        staleTime: 1000 * 60 * 60 * 24 //24 horas
    })
    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24 //24 horas
    })
    return {
        popularQuery,
        nowPlayingQuery,
        topRatedQuery,
        upcomingQuery

    }
}