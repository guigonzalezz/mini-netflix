"use client"

import { LoaderCircle } from "lucide-react"
import Head from "next/head"
import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import MovieCard from "../components/MovieCard"
import { getMovies } from "../service/api"
import type { Movie } from "../types"

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies()
        setMovies(data)
      } catch (error) {
        console.error("Error fetching movies:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  return (
    <Layout>
      <Head>
        <title>Mini Netflix</title>
        <meta name="description" content="A mini Netflix clone built with Next.js" />
      </Head>

      <main className="container mx-auto px-4 py-8 ">

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <LoaderCircle className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 text-red-600" />

          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </main>
    </Layout>
  )
}

