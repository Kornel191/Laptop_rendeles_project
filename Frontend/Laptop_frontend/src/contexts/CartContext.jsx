import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (laptop) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === laptop.id);
      if (existing) {
        return prev.map(item => item.id === laptop.id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        return [...prev, { ...laptop, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
