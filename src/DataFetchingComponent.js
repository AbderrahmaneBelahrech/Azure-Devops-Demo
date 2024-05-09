import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/cinemas');
                console.log(response.data);  // Log the data here to inspect it
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        

        fetchData();
    }, []); // The empty array ensures this effect runs only once after the initial render

    return (
        <div>
            <h1>Data Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>nombreSalles</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.nombreSalles}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataFetchingComponent;
