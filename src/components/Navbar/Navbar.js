import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import {
  BiCartAlt,
  BiLogOut,
  BiMenu,
  BiXCircle,
  BiUserCircle,
  BiDownArrow,
} from "react-icons/bi";
import { useCart } from "../../context/CartProvider/Provider";
import toPersianNumber from "../../utils/toPersianNumber";
import { useState } from "react";
import { useAuth, useSetAuth } from "../../context/AuthProvider/Provider";

const UserMenu = () => {
  const [show, setShow] = useState(false);
  const setAuth = useSetAuth();
  const toggleMenu = () => setShow((prevState) => !prevState);
  const logOut = () => setAuth(false);

  return (
    <div className="row profile_icon">
      <button className="row" onClick={toggleMenu}>
        <BiUserCircle style={{ fontSize: "2.8rem" }} />
        <span> </span>
        <BiDownArrow style={{ fontSize: "1rem" }} />
      </button>
      <ul className={show ? "active" : ""}>
        <li>
          <Link to="/profile">پروفایل</Link>
        </li>
        <li>
          <button onClick={logOut}>خروج</button>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const cart = useCart();
  const userData = useAuth();
  const [showNav, setShowNav] = useState(false);

  const navItems = [
    { target: "/", label: "خانه" },
    { target: "/about", label: "درباره ما" },
  ];

  const getCartQuantity = () =>
    cart.length
      ? cart.map((p) => p.quantity).reduce((q, total) => total + q)
      : 0;

  const toggleMobileMenu = () => setShowNav((prevSate) => !prevSate);

  return (
    <header className="row main_header">
      <nav className="row container">
        <div className="row navbar_links">
          <div className="menu_icon" onClick={toggleMobileMenu}>
            {showNav ? <BiXCircle /> : <BiMenu />}
          </div>
          <div className="logo">
            <h1>مای کالا</h1>
          </div>
          <ul className={`row ${showNav ? "active_items" : ""}`}>
            {navItems.map(({ target, label }, index) => (
              <li key={index}>
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
        <div className="row left_icons">
          <Link to="/cart" className="cart_icon">
            <span> {toPersianNumber(getCartQuantity())} </span>
            <BiCartAlt />
          </Link>
          {!userData ? (
            <Link to="/login" className="row enter_icon">
              <BiLogOut /> <span> ورود</span>
            </Link>
          ) : (
            <UserMenu />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
