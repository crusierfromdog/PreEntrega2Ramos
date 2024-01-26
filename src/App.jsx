import "./App.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppStateContext from "./context/StateContext.js";
import Layout from "./containers/Layout.jsx";
import ItemListContainer from "./containers/ItemListContainer.jsx";
import ItemDetailContainer from "./containers/ItemDetailContainer.jsx";

const initialState = {
  catalog: [
    {
      name: "Bebidas",
      id: "1",
      products: [
        { id: "1", name: "Coca Cola", price: 1500, stock: 10, 
        imageUrl: "https://www.comercialescocia.cl/media/catalog/product/cache/a374e28fc641e0aa29312f1b9f6ba107/6/0/60030110_2022-05-11_22_42_25.jpg" },
        { id: "2", name: "Fanta", price: 1400, stock: 10, 
        imageUrl: "https://www.comercialescocia.cl/media/catalog/product/cache/daa8619b176b4fef994f38940aeda4f0/6/0/60030117_2022-05-11_22_42_21_1.jpg" },
        { id: "3", name: "Bilz", price: 1100, stock: 4, 
        imageUrl: "https://www.comercialescocia.cl/media/catalog/product/cache/bd39c428e033d025c961d90e67539ecb/6/0/60001120_2022-01-25_13_47_04.jpg" },
      ],
    },
    {
      name: "Agua",
      id: "3",
      products: [
        { id: "7", name: "Cachantun con gas", price: 1500, stock: 10, 
        imageUrl: "https://www.comercialescocia.cl/media/catalog/product/cache/a374e28fc641e0aa29312f1b9f6ba107/6/0/60001270_2022-03-23_21_52_02.png" },
        { id: "8", name: "Cachantun sin gas", price: 1400, stock: 10, 
        imageUrl: "https://www.comercialescocia.cl/media/catalog/product/cache/a374e28fc641e0aa29312f1b9f6ba107/6/0/60001242_2024-01-05_19_52_35_1.jpg" },
        { id: "9", name: "Vital con gas", price: 1100, stock: 4, 
        imageUrl: "https://www.comercialescocia.cl/media/catalog/product/cache/bd39c428e033d025c961d90e67539ecb/6/0/60030190_2021-11-30_21_19_35.jpg" },
      ],
    },
    {
      name: "Jugos",
      id: "2",
      products: [
        { id: "4", name: "Jugo de Naranja", price: 1000, stock: 6, 
        imageUrl: "https://www.comercialescocia.cl/media/catalog/product/cache/a374e28fc641e0aa29312f1b9f6ba107/6/4/64001108_2022-01-21_17_58_42.jpg", },
        { id: "5", name: "Jugo de Piña", price: 1100, stock: 8, 
        imageUrl: "https://www.comercialescocia.cl/media/catalog/product/cache/a374e28fc641e0aa29312f1b9f6ba107/6/4/64001114_2022-01-21_19_22_49.jpg" },
        { id: "6", name: "Jugo de Frutilla", price: 1300, stock: 4, 
        imageUrl: "https://www.comercialescocia.cl/media/catalog/product/cache/a374e28fc641e0aa29312f1b9f6ba107/6/4/64001116_2022-01-21_19_23_57.jpg", },
      ]
    }
  ],
  cart: {
    products: [],
    amount: 0,
  },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ItemListContainer />,
        loader: () => {
          return { category: null };
        }
      },
      {
        path: '/category/:id',
        element: <ItemListContainer />,
        loader: ({ params }) => {
          const category = params.id;
          return { category };
        }
      },
      {
        path: '/item/:id',
        element: <ItemDetailContainer />,
        loader: ({ params }) => {
          const item = params.id;
          return { item };
        }
      }  ]  }  ]  ); 

const App = () => {
  const [appState, setAppState] = useState(initialState);
  /*const categories = appState.catalog.map((category) => category.name);
  const cart = appState.cart;   */

  return (
    <AppStateContext.Provider value={{ appState, setAppState }}>
      <RouterProvider router={router}/>
    </AppStateContext.Provider>
  );
};

export default App;