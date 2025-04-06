import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Mini Netflix - A Next.js demo project" />
        <title>Mini Netflix</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

