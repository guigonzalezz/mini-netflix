import { Facebook, Globe, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black text-gray-500 py-10 mt-auto">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex gap-5 mb-6">
                    <Link href="#" aria-label="Facebook">
                        <Facebook className="w-5 h-5 hover:text-white transition-colors" />
                    </Link>
                    <Link href="#" aria-label="Instagram">
                        <Instagram className="w-5 h-5 hover:text-white transition-colors" />
                    </Link>
                    <Link href="#" aria-label="Twitter">
                        <Twitter className="w-5 h-5 hover:text-white transition-colors" />
                    </Link>
                    <Link href="#" aria-label="Youtube">
                        <Youtube className="w-5 h-5 hover:text-white transition-colors" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col gap-3">
                        <Link href="#" className="text-xs hover:underline">
                            Audio Description
                        </Link>
                        <Link href="#" className="text-xs hover:underline">
                            Investor Relations
                        </Link>
                        <Link href="#" className="text-xs hover:underline">
                            Legal Notices
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Link href="#" className="text-xs hover:underline">
                            Help Center
                        </Link>
                        <Link href="#" className="text-xs hover:underline">
                            Jobs
                        </Link>
                        <Link href="#" className="text-xs hover:underline">
                            Cookie Preferences
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Link href="#" className="text-xs hover:underline">
                            Gift Cards
                        </Link>
                        <Link href="#" className="text-xs hover:underline">
                            Terms of Use
                        </Link>
                        <Link href="#" className="text-xs hover:underline">
                            Corporate Information
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Link href="#" className="text-xs hover:underline">
                            Media Center
                        </Link>
                        <Link href="#" className="text-xs hover:underline">
                            Privacy
                        </Link>
                        <Link href="#" className="text-xs hover:underline">
                            Contact Us
                        </Link>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="inline-flex items-center border border-gray-700 rounded p-1 text-xs">
                        <Globe className="w-4 h-4 mr-1" />
                        <select className="bg-transparent text-gray-500 focus:outline-none">
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                            <option value="pt">Português</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4">
                    <button className="text-xs hover:text-white">Service Code</button>
                </div>

                <div className="text-xs">
                    <p>&copy; {currentYear} Mini Netflix. All rights reserved.</p>
                    <p className="mt-2">This is a demo project built for the XCentium Code Challenge.</p>
                </div>
            </div>
        </footer>
    )
}

