import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { useCart } from "../../context/CartProvider/Provider";
import toPersianNumber from "../../utils/toPersianNumber";

const Navbar = () => {
  const cart = useCart();
  const navItems = [
    { id: 1, target: "/", label: "خانه" },
    { id: 2, target: "/products", label: "محصولات" },
    { id: 3, target: "/about", label: "درباره ما" },
  ];

  const getCartQuantity = () =>
    cart.length
      ? cart.map((p) => p.quantity).reduce((q, total) => total + q)
      : 0;

  return (
    <header className="row main_header">
      <nav className="row container">
        <div className="row navbar_links">
          <div className="logo">
            <h1>مای کالا</h1>
          </div>
          <ul>
            {navItems.map(({ id, target, label }) => (
              <li key={id}>
                <NavLink
                  className={({ isActive }) =>
                    `navlink${isActive ? " active" : ""}`
                  }
                  to={target}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link to={"/cart"} className="cart_icon">
            <span> {toPersianNumber(getCartQuantity())} </span>
            <BiCartAlt />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
