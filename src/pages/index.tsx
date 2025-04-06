"use client"

import { Info, Play } from "lucide-react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Button from "../components/Button"
import Layout from "../components/Layout"
import MovieRow from "../components/MovieRow"
import { getMovies } from "../service/api"
import type { Movie } from "../types"

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  const router = useRouter();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies()
      setMovies(data)
    }

    fetchMovies()
  }, [])

  return (
    <Layout>
      <Head>
        <title>Mini Netflix</title>
        <meta name="description" content="A mini Netflix clone built with Next.js" />
      </Head>

      <main className=" bg-black  ">

        <div className="pt-16">
          <div
            className="h-[80vh] bg-cover bg-center flex items-end"
            style={{
              backgroundImage: "url('/movies/inception-large.jpg?height=1080&width=1920')",
              backgroundSize: "cover",
            }}
          >
            <div className="container mx-auto px-4 pb-20">
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">{movies[0]?.title || ''}</h1>
              <p className="text-white text-lg max-w-2xl mb-6">
                {movies[0]?.description || ''}
              </p>
              <div className="flex space-x-4">
                <Button><Play /> Play</Button>
                <Button variant="secondary" onClick={() => { router.push(`/movie/details/${movies[0].id}`) }}><Info /> More Info</Button>
              </div>
            </div>
          </div>

          <div id="movies" className="bg-black text-white">
            <MovieRow title="Trending Now" movies={movies} />
            <MovieRow title="Popular on Mini Netflix" movies={movies.slice().reverse()} />
            <MovieRow title="New Releases" movies={[...movies].sort(() => Math.random() - 0.5)} />
            <MovieRow title="Watch Again" movies={[...movies].sort(() => Math.random() - 0.5)} />
          </div>
        </div>
      </main>
    </Layout>
  )
}

