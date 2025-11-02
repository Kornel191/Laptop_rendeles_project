import { useEffect, useState } from "react";
import LaptopCard from "./LaptopCard.jsx";
import "./LaptopList.css";

export default function LaptopList({ addToCart }) {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/laptops")
            .then((r) => r.json())
            .then(setLaptops)
            .catch((e) => console.error("Lekérési hiba:", e));
    }, []);

    return (
        <div className="grid">
            {laptops.map((l) => (
                <LaptopCard key={l.id} laptop={l} addToCart={addToCart} />
            ))}
        </div>
    );
}
