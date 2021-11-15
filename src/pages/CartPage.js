import "./styles/CartPage.css";
import emptyCartImg from "../assets/images/cart-empty.svg";
import { useCart } from "../context/CartProvider/Provider";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";
import CartPrice from "../components/CartPrice/CartPrice";

const CartPage = () => {
  const cart = useCart();

  if (!cart.length) {
    return (
      <section className="container empty_cart">
        <img src={emptyCartImg} alt="empty cart" />
        <p> سبد خرید شما خالی است ! </p>
        <Link to="/products" className="btn btn_primary">
          برو به فروشگاه
        </Link>
      </section>
    );
  }
  return (
    <section className="container cart">
      <div className="cart_items">
        {cart.map((product) => (
          <CartItem product={product} />
        ))}
      </div>
      <CartPrice />
    </section>
  );
};

export default CartPage;
