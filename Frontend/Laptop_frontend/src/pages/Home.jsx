import React, { useContext } from "react";
import LaptopList from "../components/LaptopList";
import { CartContext } from "../contexts/CartContext";

const Home = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Elérhető Laptopok</h1>
            <LaptopList addToCart={addToCart} />
        </div>
    );
};

export default Home;
