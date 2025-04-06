import Link from "next/link"

export default function Header() {
    return (
        <header className="bg-black text-white shadow-md ">
            <div className="container mx-auto p-4 flex justify-between items-center border-red-400">
                <Link href="/" className="text-2xl font-bold text-red-600" aria-label="Mini Netflix Home">
                    Mini Netflix
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:text-red-600 transition-colors">
                                Home
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

