import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider, CartContext } from "./contexts/CartContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import { useContext } from "react";
import Footer from "./components/Footer.jsx";
import Profile from "./pages/Profile.jsx";
import Reviews from "./pages/Reviews.jsx";

function NavWithCount() {
  const { cart } = useContext(CartContext);
  const count = cart.reduce((sum, i) => sum + i.quantity, 0);
  return <Navbar cartCount={count} />;
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <NavWithCount />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}
