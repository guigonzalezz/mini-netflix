import Head from "next/head"
import Link from "next/link"

export default function Custom500() {
    return (
        <>
            <Head>
                <title>500 - Server Error | Mini Netflix</title>
            </Head>
            <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white px-4 text-center">
                <h1 className="text-5xl font-bold mb-4">Oops! Something went wrong.</h1>
                <p className="text-lg max-w-md mb-8">
                    We’re having some technical issues. Please try again later or return to the home page.
                </p>
                <Link href="/" className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded text-lg font-semibold">
                    Go to Home
                </Link>
                <p className="text-gray-400 text-sm mt-8">Error Code: 500</p>
            </div>
        </>
    )
}
