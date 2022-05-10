import { Link, NavLink } from "react-router-dom";
import {
  BiCartAlt,
  BiLogOut,
  BiMenu,
  BiXCircle,
  BiUserCircle,
} from "react-icons/bi";
import { useCart } from "../../context/CartProvider/Provider";
import toPersianNumber from "../../utils/toPersianNumber";
import useToggle from "../../hooks/useToggle";
import { useAuth, useSetAuth } from "../../context/AuthProvider/Provider";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const UserMenu = () => {
  const [showMenu, toggleMenu] = useToggle();
  const setAuth = useSetAuth();
  const logOut = () => setAuth(false);

  return (
    <div className="flex items-center relative text-2xl" onClick={toggleMenu}>
      <button className="flex items-center text-primary cursor-pointer">
        <BiUserCircle className="text-[2.6rem]" />
      </button>
      <ul
        className={`absolute top-full md:-right-1/2 -right-full bg-secondary rounded-lg shadow-xl opacity-0 scale-0 duration-200 ${
          showMenu ? "active scale-100 opacity-100" : ""
        }`}
      >
        <li className="text-center py-2 px-8">
          <Link to="/profile">پروفایل</Link>
        </li>
        <li className="text-center py-2 px-8">
          <button onClick={logOut}>خروج</button>
        </li>
      </ul>
    </div>
  );
};

const NavbarLinks = ({ links }) => {
  return (
    <ul className="flex items-center flex-col md:flex-row">
      {links.map(({ target, label }, index) => (
        <li className="mx-4" key={index}>
          <NavLink
            className={({ isActive }) =>
              `inline-block p-2 rounded-lg hover:bg-primary hover:text-secondary ${
                isActive ? "text-primary hover:text-secondary" : ""
              }`
            }
            to={target}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const cart = useCart();
  const userData = useAuth();
  const [showNav, toggleNav] = useToggle();

  const navItems = [
    { target: "/", label: "خانه" },
    { target: "/about", label: "درباره ما" },
  ];

  const getCartQuantity = () =>
    cart.length
      ? cart.map((p) => p.quantity).reduce((q, total) => total + q)
      : 0;

  return (
    <header className="sticky top-0 flex items-center h-24 bg-secondary shadow-xl">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center" onClick={toggleNav}>
          <div className="md:hidden z-[200]">
            {showNav ? (
              <BiXCircle className="text-primary text-[2.5rem]" />
            ) : (
              <BiMenu className="text-primary text-[2.5rem]" />
            )}
          </div>
          <div className="mr-4 ml-12">
            <h1 className="font-bold text-4xl">مای کالا</h1>
          </div>
          <div className="hidden md:flex">
            <NavbarLinks links={navItems} />
          </div>
          <div className="md:hidden">
            <Drawer
              open={showNav}
              onClose={toggleNav}
              direction="right"
              className="pt-24"
              duration={300}
            >
              <NavbarLinks links={navItems} />
            </Drawer>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/cart"
            className="flex relative cursor-pointer text-primary"
          >
            <span className="absolute h-7 w-7 -top-3 -right-3 bg-red rounded-full grid place-content-center text-[#fff] text-[1.3rem] ">
              {toPersianNumber(getCartQuantity())}
            </span>
            <BiCartAlt className="text-[2.5rem]" />
          </Link>
          {!userData ? (
            <Link
              to="/login"
              className="flex items-center gap-2 relative cursor-pointer text-primary"
            >
              <BiLogOut className="text-[2.5rem]" /> <span> ورود</span>
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
