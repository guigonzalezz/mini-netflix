import moviesData from "../data/movies.json"
import { Movie } from "../types"

export const getMovies = async (): Promise<Movie[]> => {
  return moviesData
}

export const getMovieById = async (id: string): Promise<Movie | null> => {
  const movie = moviesData.find((movie) => movie.id === id)
  return movie || null
}

