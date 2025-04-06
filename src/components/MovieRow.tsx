"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState } from "react"
import MovieCard from "./MovieCard"

interface Movie {
    id: string
    title: string
    poster: string
    year: string
}

interface MovieRowProps {
    title: string
    movies: Movie[]
}

export default function MovieRow({ title, movies }: MovieRowProps) {
    const rowRef = useRef<HTMLDivElement>(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)
    const [isScrolling, setIsScrolling] = useState(false)

    const handleScroll = (direction: 'left' | 'right') => {
        if (rowRef.current) {
            setIsScrolling(true)
            const { scrollLeft, clientWidth } = rowRef.current
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth * 0.75
                : scrollLeft + clientWidth * 0.75

            rowRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            })

            setTimeout(() => {
                if (rowRef.current) {
                    setShowLeftArrow(rowRef.current.scrollLeft > 0)
                    setShowRightArrow(
                        rowRef.current.scrollLeft <
                        rowRef.current.scrollWidth - rowRef.current.clientWidth - 10
                    )
                    setIsScrolling(false)
                }
            }, 500)
        }
    }

    const handleScrollEvent = () => {
        if (rowRef.current) {
            setShowLeftArrow(rowRef.current.scrollLeft > 0)
            setShowRightArrow(
                rowRef.current.scrollLeft <
                rowRef.current.scrollWidth - rowRef.current.clientWidth - 10
            )
        }
    }

    return (
        <div className="relative group/row py-8">
            <h2 className="text-xl text-white font-bold mb-2 px-4 md:px-12">{title}</h2>

            {showLeftArrow && (
                <button
                    className="absolute left-0 top-1/2 z-10 bg-black/50 p-1 rounded-full 
                     text-white opacity-0 group-hover/row:opacity-100 transition-opacity
                     hover:bg-black/80 -translate-y-6 ml-2"
                    onClick={() => !isScrolling && handleScroll('left')}
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            )}

            {showRightArrow && (
                <button
                    className="absolute right-0 top-1/2 z-10 bg-black/50 p-1 rounded-full 
                     text-white opacity-0 group-hover/row:opacity-100 transition-opacity
                     hover:bg-black/80 -translate-y-6 mr-2"
                    onClick={() => !isScrolling && handleScroll('right')}
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            )}

            <div
                ref={rowRef}
                className="flex overflow-hidden px-4 md:px-12 gap-2 pb-10 pt-2"
                onScroll={handleScrollEvent}
            >
                {movies.map((movie, index) => (
                    <div
                        key={movie.id}
                        className="flex-none w-[160px] md:w-[200px] transition-transform duration-500"
                    >
                        <MovieCard movie={movie} index={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}
