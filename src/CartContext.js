import { useState, createContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([
    { src: "https://flagcdn.com/ua.svg", language: "Ukraine" },
  ]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("language"));
    if (todos === null) {
      setItems([{ src: "https://flagcdn.com/ua.svg", language: "Ukraine" }]);
      console.log("null");
    } else if (todos[0].language === "Russian") {
      setItems([{ src: "https://flagcdn.com/ru.svg", language: "Russian" }]);
      console.log("Russian");
    } else if (todos[0].language === "English") {
      setItems([{ src: "https://flagcdn.com/us.svg", language: "English" }]);
      console.log("English");
    }  else {
      setItems([{ src: "https://flagcdn.com/ua.svg", language: "Ukraine" }]);
      console.log("Ukraine");
    }
  }, []);

  const addToFlag = (item) => {
    setItems(item);
  };

  return (
    <CartContext.Provider value={{ items, addToFlag }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
