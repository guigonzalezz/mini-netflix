export default function Footer() {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Mini Netflix. All rights reserved.</p>
                <p className="text-sm mt-2">This is a demo project built for the XCentium Code Challenge.</p>
            </div>
        </footer>
    )
}

