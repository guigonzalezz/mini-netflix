import Image from "next/image"
import Link from "next/link"
import type { Movie } from "../types"

interface MovieCardProps {
    movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
    return (
        <Link
            href={`/movie/details/${movie.id}`}
            className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            aria-label={`View details for ${movie.title}`}
        >
            <div className="relative aspect-[2/3] w-full">
                <Image
                    src={movie.poster || "/placeholder.svg"}
                    alt={`${movie.title} poster`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
            </div>
            <div className="p-4 bg-white">
                <h2 className="font-bold text-lg mb-1 truncate">{movie.title}</h2>
                <p className="text-gray-600 text-sm">{movie.year}</p>
            </div>
        </Link>
    )
}

