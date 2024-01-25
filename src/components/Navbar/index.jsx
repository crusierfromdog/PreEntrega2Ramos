import "./styles.css";

const Navbar = (props) => {
  const { categories, cart } = props;
  return (
    <nav className="navbar-container">
      <div className="navbar-brand">Brand</div>
      <div className="navbar-categories">
        {categories.map((category) => (
          <div key={category}>{category}</div>
        ))}
      </div>
      <div className="navbar-cart">Cart ({cart.products.length}) items</div>
    </nav>
  );
};

export default Navbar;