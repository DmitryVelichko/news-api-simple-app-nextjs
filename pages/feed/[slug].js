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
}

export default Feed;