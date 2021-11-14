import "./styles/CartPage.css";
import emptyCartImg from "../assets/images/cart-empty.svg";
import { useCart } from "../context/CartProvider/Provider";
import { Link } from "react-router-dom";
import toPersianNumber from "../utils/toPersianNumber";
import CartItem from "../components/CartItem/CartItem";

const CartPage = () => {
  const cart = useCart();

  const getTotalPrice = () =>
    cart.map((p) => p.price * p.quantity).reduce((p, total) => p + total);

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
      <section className="cart_price">
        <p> مجموع قیمت </p>
        {cart.map(({ name, price, quantity }) => (
          <div className="row">
            <p>
              <span>{name}</span>
            </p>
            <p>{toPersianNumber(price * quantity)}$</p>
          </div>
        ))}
        <hr />
        <div className="row">
          <p>مبلغ قابل پرداخت</p>
          <p>{toPersianNumber(getTotalPrice())}$</p>
        </div>
      </section>
    </section>
  );
};

export default CartPage;
