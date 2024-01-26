import { Link } from "react-router-dom";
import "./styles.css";

const Product = (props) => {
  const { id, image, category, title, price, stock } = props;
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-category">
        <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
      </div>
      <div className="product-title">
        <Link to={`/item/${id}`}>{title}</Link>
      </div>
      <div className="product-info">
        <div className="product-price">
          <span>${price}</span>
        </div>
        <div className="product-stock">
          {stock === 0 && <span>Sin disponibilidad</span>}
          {stock === 1 && <span>{stock} disponible</span>}
          {stock > 1 && <span>{stock} disponibles</span>}
        </div>
      </div>
    </div>
  );
};

export default Product;