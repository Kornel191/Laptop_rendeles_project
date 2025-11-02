import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ cartCount = 0 }) {
    return (
        <nav className="nav">
            <div className="nav__inner container">
                <Link to="/" className="nav__brand">Laptop Áruház</Link>
                <div className="nav__links">
                    <Link to="/" className="nav__link">Kezdőlap</Link>
                    <Link to="/cart" className="nav__link">
                        Kosár {cartCount > 0 && <span className="nav__badge">{cartCount}</span>}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
