import type { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-black ">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
        </div>
    )
}

