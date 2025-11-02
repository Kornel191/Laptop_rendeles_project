import { useContext } from "react";
import { CartContext } from "../contexts/CartContext.jsx";
import LaptopList from "../components/LaptopList.jsx";

export default function Home() {
    const { addToCart } = useContext(CartContext);
    return (
        <div className="container">
            <h1 class="title">Elérhető Laptopok</h1>
            <LaptopList addToCart={addToCart} />
        </div>
    );
}
