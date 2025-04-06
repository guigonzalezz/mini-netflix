"use client"

import { ChevronDown, Play, Plus, ThumbsUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

interface Movie {
    id: string
    title: string
    poster: string
    year: string
}

interface MovieCardProps {
    movie: Movie
    index?: number
}

export default function MovieCard({ movie, index = 0 }: MovieCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleMouseEnter = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setIsHovered(true)
        }, 300)
    }

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current)
            hoverTimeoutRef.current = null
        }
        setIsHovered(false)
    }

    return (
        <div
            className="group relative"
            style={{
                transitionDelay: `${index * 50}ms`,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="block outline-none focus:ring-2 focus:ring-white"
            >
                <div
                    className={`
                        relative overflow-hidden rounded-md transition-all duration-300 ease-in-out
                        ${isHovered ? "scale-[1.3] z-10 shadow-2xl" : "scale-100"}
                    `}
                >
                    <div className="relative aspect-[2/3] w-full">
                        <Image
                            src={movie.poster || "/placeholder.svg?height=450&width=300"}
                            alt={`${movie.title} poster`}
                            fill
                            className="object-cover rounded-md"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        />
                    </div>

                    {isHovered && (
                        <div className="absolute inset-0 flex flex-col">
                            <div className="flex-grow"></div>
                            <div className="bg-[#181818] p-3 space-y-3">
                                <div className="flex items-center gap-2">
                                    <button className="bg-white text-black rounded-full p-1 hover:bg-gray-200">
                                        <Play className="w-5 h-5 fill-black" />
                                    </button>
                                    <button className="text-white border border-gray-400 rounded-full p-1 hover:border-white">
                                        <Plus className="w-5 h-5" />
                                    </button>
                                    <button className="text-white border border-gray-400 rounded-full p-1 hover:border-white">
                                        <ThumbsUp className="w-5 h-5" />
                                    </button>
                                    <button className="text-white border border-gray-400 rounded-full p-1 ml-auto hover:border-white">
                                        <Link
                                            href={`/movie/details/${movie.id}`}
                                            className="block outline-none focus:ring-2 focus:ring-white"
                                            aria-label={`View details for ${movie.title}`}
                                        >

                                            <ChevronDown className="w-5 h-5" />
                                        </Link>
                                    </button>
                                </div>

                                <div>
                                    <h2 className="text-white font-medium text-sm">{movie.title}</h2>
                                    <p className="text-green-500 text-xs font-bold mt-1">
                                        {Math.floor(Math.random() * 30) + 70}% Match
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1 text-xs text-white">
                                    <span>{movie.year}</span>
                                    <span className="bg-gray-500 px-1 text-[10px] flex items-center justify-center rounded">
                                        {Math.random() > 0.5 ? "HD" : "4K"}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-1 text-xs text-white">
                                    <span>{Math.random() > 0.5 ? "Suspenseful" : "Exciting"}</span>
                                    <span>•</span>
                                    <span>{Math.random() > 0.5 ? "Action" : "Drama"}</span>
                                    <span>•</span>
                                    <span>{Math.random() > 0.5 ? "Thriller" : "Adventure"}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
