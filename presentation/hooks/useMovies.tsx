import { nowPlayingAction } from "@/core/actions/movies/now-playing.actions"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedMoviesAction } from "@/core/actions/movies/topRated.action"
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const useMovie = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPLaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 //24 horas
    })
    const popularQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'popular'],
        queryFn: ({ pageParam = 1 }) => {

            return popularMoviesAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24, //24 horas
        getNextPageParam: (lastPage, pages) => pages.length + 1
    })
    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'top_Rated', 1],
        queryFn: ({ pageParam = 1 }) => {

            return topRatedMoviesAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24, //24 horas
        getNextPageParam: (lastPage, pages) => pages.length + 1
    })
    const upcomingQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'upcoming'],
        queryFn: ({ pageParam = 1 }) => {
            return upcomingMoviesAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24, //24 horas
        getNextPageParam: (lastPage, pages) => pages.length + 1
    })
    return {
        popularQuery,
        nowPlayingQuery,
        topRatedQuery,
        upcomingQuery

    }
}