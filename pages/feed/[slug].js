export const Feed = ({ pageNumber, articles }) => {
    return (<>Hello slug</>);
}

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

    const apiResponse = await fetch (
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`
    )
}

export default Feed;