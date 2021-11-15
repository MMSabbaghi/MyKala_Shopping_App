import { useCart } from "../../context/CartProvider/Provider";
import "./CartPrice.css";
import toPersianNumber from "../../utils/toPersianNumber";
import { Link } from "react-router-dom";

const CartPrice = () => {
  const cart = useCart();

  const getTotalPrice = () =>
    cart.map((p) => p.price * p.quantity).reduce((p, total) => p + total);

  const getTotalDiscount = () =>
    cart
      .map((p) => p.price * p.quantity * p.discount)
      .reduce((d, total) => d + total) / 100;

  const getFinalPrice = () => getTotalPrice() - getTotalDiscount();

  return (
    <section className="cart_price">
      <div className="row">
        <p>قیمت کالا ها</p>
        <p>{toPersianNumber(getTotalPrice())}$</p>
      </div>
      <div className="row">
        <p>تخفیف کالا ها</p>
        <p>{toPersianNumber(getTotalDiscount())}$</p>
      </div>
      <hr />
      <div className="row">
        <p>مبلغ قابل پرداخت</p>
        <p>{toPersianNumber(getFinalPrice())}$</p>
      </div>
      <Link to="/" className="btn btn_primary">
        ادامه سفارش
      </Link>
    </section>
  );
};

export default CartPrice;
