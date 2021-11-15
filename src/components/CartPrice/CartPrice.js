import { useCart } from "../../context/CartProvider/Provider";
import "./CartPrice.css";
import toPersianNumber from "../../utils/toPersianNumber";
import { Link } from "react-router-dom";

const CartPrice = () => {
  const cart = useCart();
  
  const getTotalPrice = () =>
    cart.map((p) => p.price * p.quantity).reduce((p, total) => p + total);

  return (
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
      <Link to="/" className="btn btn_primary">
        ادامه سفارش
      </Link>
    </section>
  );
};

export default CartPrice;
