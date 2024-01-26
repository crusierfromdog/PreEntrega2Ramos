import "../App.css";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../components/Product";
import AppStateContext from "../context/StateContext";

const ItemListContainer = () => {
  const { appState } = useContext(AppStateContext);
  const { category } = useLoaderData();

  // Si el valor de category en la linea anterior no es nulo, significa que estamos visitando
  // una ruta del tipo /category/bebidas, entonces hay que quedarse solo con la categoría que se llame "bebidas"
  // como categoría disponible.

  // Si el valor de category es nulo, significa que estamos visitando la raíz, y ahí podemos mostrar todas las categorías del
  // catálogo.
  const availableCategories =
    category !== null
      ? appState.catalog.filter(
          (categoryInCatalog) => categoryInCatalog.name.toLowerCase() === category
        )
      : appState.catalog;

  const products = availableCategories.reduce((accum, current) => {
    const productsWithCategory = current.products.map((product) => {
      return { category: current.name, ...product };
    });
    return [...accum, ...productsWithCategory];
  }, []);

  return products.map((product) => (
    <Product
      key={product.id}
      id={product.id}
      title={product.name}
      image={product.imageUrl}
      category={product.category}
      price={product.price}
      stock={product.stock}
    />
  ));
};

export default ItemListContainer;