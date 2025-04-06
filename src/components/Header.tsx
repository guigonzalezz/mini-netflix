"use client"

import { Bell, ChevronDown, Search, User } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"
                }`}
        >
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="mr-8" aria-label="Mini Netflix Home">
                        <div className="w-28 h-8 relative">
                            <div className="text-red-600 font-bold text-2xl whitespace-nowrap">Mini Netflix</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            <li>
                                <Link href="/" className="text-white hover:text-gray-300 text-sm font-medium">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#movies" className="text-white hover:text-gray-300 text-sm font-medium">
                                    Movies
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <div className="space-y-1">
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                    </div>
                </button>

                <div className="hidden md:flex items-center space-x-6">
                    <button className="text-white hover:text-gray-300">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="text-white hover:text-gray-300">
                        <Bell className="w-5 h-5" />
                    </button>
                    <div className="flex items-center">
                        <button className="flex items-center">
                            <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center overflow-hidden">
                                <User className="w-5 h-5 text-white" />
                            </div>
                            <ChevronDown className="w-4 h-4 text-white ml-1" />
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-black">
                    <nav className="px-4 py-3">
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-white hover:text-gray-300 text-sm font-medium block py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#movies"
                                    className="text-white hover:text-gray-300 text-sm font-medium block py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Movies
                                </Link>
                            </li>
                            <li className="pt-2 border-t border-gray-800">
                                <div className="flex items-center py-1">
                                    <div className="w-7 h-7 rounded bg-red-600 flex items-center justify-center overflow-hidden mr-2">
                                        <User className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-white text-sm">Profile</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}

