export const EOM = ({ employee }) => {
    return (
        <div className="page-container">
            <div>
                <h1>Employee Of The Month</h1>
            </div>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
    )

    const employee = await apiResponse.json();
}

export default EOM;