import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async (context) => {
    const movieId = context.query.movieId

    if (typeof movieId === "string") {
        return {
            redirect: {
                destination: `/movie/details/${movieId}`,
                permanent: false,
            },
        }
    }

    return {
        notFound: true,
    }
}

export default function MovieRedirectPage() {
    return null
}
