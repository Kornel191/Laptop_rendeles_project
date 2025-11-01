import React, { useEffect, useState } from "react";
import LaptopCard from "./LaptopCard";


const LaptopList = ({ addToCart }) => {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000")
            .then((response) => response.json())
            .then((data) => setLaptops(data))
            .catch((error) => console.error("Hiba a lekéréskor:", error));
    }, []);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
                padding: "2rem",
            }}
        >
            {laptops.map(laptop => (
                <LaptopCard key={laptop.id} laptop={laptop} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default LaptopList;

