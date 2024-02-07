import React, { useEffect, useState } from "react";

const App = () => {
    const [data, setData] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/data");
                const jsonData = await response.json();
                setData(jsonData.message);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Selamat datang</h1>
            <p>{data}</p>
        </div>
    );
};

export default App;
