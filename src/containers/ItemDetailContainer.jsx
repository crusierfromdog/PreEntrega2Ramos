import "../App.css";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import AppStateContext from "../context/StateContext";
import Product from "../components/Product";

const ItemDetailContainer = () => {
  const { appState } = useContext(AppStateContext);
  const { item } = useLoaderData();
  /*const data = useLoaderData()
  const item = data.item    */

  const allProducts = {};

  appState.catalog.forEach((category) => {
    category.products.map((product) => {
      allProducts[product.id] = {...product, category: category.name};
    });
  });

  
  const selectedProduct = allProducts[item];
  console.log(allProducts, item, selectedProduct)

  if (!selectedProduct) {
    return <h1>Product not found</h1>;
  }

  return (
    <Product
      id={selectedProduct.id}
      title={selectedProduct.name}
      image={selectedProduct.imageUrl}
      category={selectedProduct.category}
      price={selectedProduct.price}
      stock={selectedProduct.stock}
    />
  );
};

export default ItemDetailContainer;