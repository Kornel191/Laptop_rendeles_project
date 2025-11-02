import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (laptop) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === laptop.id);
      return found
        ? prev.map((i) => (i.id === laptop.id ? { ...i, quantity: i.quantity + 1 } : i))
        : [...prev, { ...laptop, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
