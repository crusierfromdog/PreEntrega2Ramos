import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { categories, cart } = props;
  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
        <Link to ='/'>Brand</Link>
      </div>
      <div className="navbar-categories">
        {categories.map((category) => (
          <Link key={category} to={`/category/${category.toLowerCase()}`}>
            {category}</Link>
        ))}  
      </div>
      <div className="navbar-cart">Cart ({cart.products.length}) items</div>
    </nav>
  );
};

export default Navbar;