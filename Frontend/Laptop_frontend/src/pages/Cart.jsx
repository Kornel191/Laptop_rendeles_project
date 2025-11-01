import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Kosár</h1>

            {cart.length === 0 ? (
                <p>A kosarad üres</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.brand} {item.model} - {item.quantity} db -  {item.price.toLocaleString()} Ft
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/">
                <button
                    style={{
                        marginTop: "2rem",
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    Vissza a főoldalra
                </button>
            </Link>
        </div>
    );
};

export default Cart;
