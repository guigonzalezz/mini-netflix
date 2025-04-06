"use client"

import { Play, Plus } from "lucide-react"
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
                    <Button onClick={handleGoBack}>Go Back</Button>
                </div>
            </Layout>
        )
    }

    const backgroundImage = movie.backdrop || movie.poster

    return (
        <Layout>
            <Head>
                <title>{movie.title} | Mini Netflix</title>
                <meta name="description" content={movie.description} />
            </Head>

            <main className="relative min-h-screen bg-black">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={backgroundImage || "/placeholder.svg"}
                        alt={`${movie.title} background`}
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black opacity-70" />
                </div>

                <div className="container mx-auto px-4 py-16">

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/3 lg:w-1/4">
                            <div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={movie.poster || "/placeholder.svg"}
                                    alt={`${movie.title} poster`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 lg:w-3/4 text-white">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>

                            <div className="flex items-center gap-4 mb-4">
                                <Rating rating={movie.rating} />
                                <span className="text-gray-300">{movie.rating}/10</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                                    {movie.year}
                                </span>
                                {movie.runtime && (
                                    <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                                        {movie.runtime}
                                    </span>
                                )}
                            </div>

                            <p className="text-lg mb-6">{movie.description}</p>

                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold mb-2">Genres</h2>
                                <div className="flex flex-wrap gap-2">
                                    {movie.genres.map((genre) => (
                                        <span
                                            key={genre}
                                            className="bg-gray-700 px-4 py-1 rounded-full text-sm"
                                        >
                                            {genre}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold mb-2">Director</h2>
                                <p className="text-lg">{movie.director}</p>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold mb-2">Cast</h2>
                                <p className="text-lg">{movie.actors}</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Button>
                                    <Play /> Watch
                                </Button>
                                <Button variant="secondary">
                                    <Plus /> My List
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
