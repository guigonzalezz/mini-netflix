"use client"

import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Button from "../../../components/Button"
import Layout from "../../../components/Layout"
import Rating from "../../../components/Rating"
import { getMovieById } from "../../../service/api"
import type { Movie } from "../../../types"

export default function MovieDetails() {
    const router = useRouter()
    const { id } = router.query
    const [movie, setMovie] = useState<Movie | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMovie = async () => {
            if (!id) return

            try {
                const data = await getMovieById(id as string)
                setMovie(data)
            } catch (error) {
                console.error("Error fetching movie details:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchMovie()
    }, [id])

    const handleGoBack = () => {
        router.push("/")
    }

    if (loading) {
        return (
            <Layout>
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                </div>
            </Layout>
        )
    }

    if (!movie) {
        return (
            <Layout>
                <div className="container mx-auto px-4 py-8 text-center">
                    <h1 className="text-2xl font-bold mb-4">Movie not found</h1>
                    <Button onClick={handleGoBack}>Go back to movies</Button>
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <Head>
                <title>{movie.title} | Mini Netflix</title>
                <meta name="description" content={movie.description} />
            </Head>

            <main className="container mx-auto px-4 py-8">
                <Button onClick={handleGoBack} className="mb-6">
                    &larr; Back to Movies
                </Button>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={movie.poster || "/placeholder.svg"}
                                alt={`${movie.title} poster`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 lg:w-3/4">
                        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
                        <div className="flex items-center mb-4">
                            <Rating rating={movie.rating} />
                            <span className="ml-2 text-gray-600">{movie.rating}/10</span>
                        </div>
                        <div className="mb-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                {movie.year}
                            </span>
                            {movie.genres.map((genre) => (
                                <span
                                    key={genre}
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                >
                                    {genre}
                                </span>
                            ))}
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                {movie.runtime}
                            </span>
                        </div>
                        <p className="text-lg mb-6">{movie.description}</p>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">Director</h2>
                            <p>{movie.director}</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Cast</h2>
                            <p>{movie.actors}</p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

