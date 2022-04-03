export const Feed = ({ pageNumber, articles }) => {
    return (<>Hello slug</>);
}

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;
}

export default Feed;