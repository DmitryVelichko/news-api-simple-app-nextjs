export const EOM = ({ employee }) => {
    return (
        <div className="page-container">
            <div>
                <h1>Employee Of The Month</h1>

                <div>
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
    )

    const employee = await apiResponse.json();

    return {
        props: {
            employee
        }
    }
}

export default EOM;