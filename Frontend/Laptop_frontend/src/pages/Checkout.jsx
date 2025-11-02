import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext.jsx";
import "./Checkout.css";

export default function Checkout() {
    const { cart, clearCart } = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            email,
            address,
            cart: cart.map(item => ({
                laptop_id: item.id,
                quantity: item.quantity
            })),
        };

        try {
            const response = await fetch("http://localhost:8000/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setMessage("Rendelés sikeresen leadva!");
                clearCart();
                setName("");
                setEmail("");
                setAddress("");
            } else {
                const err = await response.json();
                setMessage("Hiba történt: " + (err.message || "Ismeretlen hiba"));
            }
        } catch (error) {
            console.error("Hálózati hiba:", error);
            setMessage("Hálózati hiba történt.");
        }
    };

    const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

    return (
        <div className="container checkout">
            <h1>Rendelés leadása</h1>

            <form className="checkout__form" onSubmit={handleSubmit}>
                <label>
                    Név
                    <input value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    E-mail
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Szállítási cím
                    <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
                </label>

                <button type="submit" className="btn btn-success">
                    Rendelés elküldése
                </button>

                {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
            </form>

            <div className="checkout__summary">
                <h2>Kosár tartalma</h2>
                {cart.length === 0 ? <p>Üres</p> : (
                    <ul>
                        {cart.map((i) => (
                            <li key={i.id}>{i.brand} {i.model} — {i.quantity} × {i.price.toLocaleString()} Ft</li>
                        ))}
                    </ul>
                )}
                <div className="checkout__total">
                    Összesen: <strong>{total.toLocaleString()} Ft</strong>
                </div>
            </div>
        </div>
    );
}
