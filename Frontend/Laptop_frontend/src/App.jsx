import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./App.css";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <nav
          >
            <h2>Laptop Áruház</h2>
            <div>
              <Link to="/home" style={linkStyle}>
                Kezdőlap
              </Link>
              <Link to="/cart" style={linkStyle}>
                Kosár
              </Link>
            </div>
          </nav>

          <div style={{ padding: "20px" }}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );

};


const linkStyle = {
  color: "white",
  marginLeft: "20px",
  textDecoration: "none",
  fontSize: "16px",
};

export default App;
