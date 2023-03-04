import { useState, createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([
    { src: "https://flagcdn.com/ua.svg", language: "Ukraine" },
  ]);

  const addToFlag = (name, link) => {
    setItems((prevState) => [...prevState, { name, link }]);
  };

  return (
    <CartContext.Provider value={{ items, addToFlag }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
