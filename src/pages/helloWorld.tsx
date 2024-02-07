// components/HelloWorld.tsx
import React, { useEffect, useState } from "react";

const HelloWorld: React.FC = () => {
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        // Mengambil data dari API
        fetch("/api/hello")
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    }, []);

    return (
        <div className="bg-blue-500 p-4 text-white">
            <h1 className="text-2xl font-bold">Hello World</h1>
        </div>
    );
};

export default HelloWorld;
