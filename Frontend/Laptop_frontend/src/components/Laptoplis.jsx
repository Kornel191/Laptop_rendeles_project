import React, { useEffect, useState } from "react";
import axios from "axios";

const LaptopList = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/laptops")
            .then(response => setLaptops(response.data))
            .catch(error => console.error("Hiba a lekéréskor:", error));
    }, []);

    return (
        <div className="laptop-list">
            {laptops.map(laptop => (
                <div key={laptop.id} className="laptop-card">
                    <img src={laptop.image} alt={laptop.model} width="200" style={{ borderRadius: "8px" }} />
                    <h3>{laptop.brand} {laptop.model}</h3>
                    <p><strong>Ár:</strong> {laptop.price} Ft</p>
                    <p><strong>Készlet:</strong> {laptop.stock} db</p>
                    <button >
                        Kosárba
                    </button>
                </div>
            ))}
        </div>
    );
};

export default LaptopList;
