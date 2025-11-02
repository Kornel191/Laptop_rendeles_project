import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext.jsx";
import "./Cart.css";

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

    return (
        <div className="container cart">
            <h1>Kosár</h1>

            {cart.length === 0 ? (
                <p>A kosarad üres.</p>
            ) : (
                <>
                    <ul className="cart__list">
                        {cart.map((item) => (
                            <li key={item.id} className="cart__item">
                                <img src={`http://localhost:8000/${item.image}`} alt={`${item.brand} ${item.model}`} />
                                <div className="cart__meta">
                                    <strong>{item.brand} {item.model}</strong>
                                    <span>Mennyiség: {item.quantity}</span>
                                    <span>Egységár: {item.price.toLocaleString()} Ft</span>
                                </div>
                                <button className="btn btn-ghost" onClick={() => removeFromCart(item.id)}>Eltávolítás</button>
                            </li>
                        ))}
                    </ul>

                    <div className="cart__footer">
                        <div className="cart__total">Összesen: <strong>{total.toLocaleString()} Ft</strong></div>
                        <div className="cart__actions">
                            <Link to="/" className="btn btn-ghost">Vissza a főoldalra</Link>
                            <button className="btn btn-ghost" onClick={clearCart}>Kosár ürítése</button>
                            <Link to="/checkout" className="btn btn-success">Rendelés leadása</Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
