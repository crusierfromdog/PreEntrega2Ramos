import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";

const initialState = {
  catalog: [
    {
      name: "Bebidas",
      id: "1",
      products: [
        { id: "1", name: "Coca Cola", price: 1500, stock: 10, imageUrl: "" },
        { id: "2", name: "Fanta", price: 1400, stock: 10, imageUrl: "" },
        { id: "3", name: "Sprite", price: 1100, stock: 4, imageUrl: "" },
      ],
    },
    {
      name: "Jugos",
      id: "2",
      products: [
        {
          id: "4",
          name: "Jugo de Naranja",
          price: 1000,
          stock: 6,
          imageUrl: "",
        },
        { id: "5", name: "Jugo de Piña", price: 1100, stock: 8, imageUrl: "" },
        {
          id: "6",
          name: "Jugo de Durazno",
          price: 1300,
          stock: 4,
          imageUrl: "",
        },
      ],
    },
  ],
  cart: {
    products: [],
    amount: 0,
  },
};

const App = () => {
  const [appState, setAppState] = useState(initialState);
  const categories = appState.catalog.map((category) => category.name);
  const cart = appState.cart;

  return (
    <>
      <Navbar categories={categories} cart={cart} />
    </>
  );
};

export default App;