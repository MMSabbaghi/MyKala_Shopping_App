import { useCart } from "../../context/CartProvider/Provider";
import "./CartPrice.css";
import toPersianNumber from "../../utils/toPersianNumber";
import { Link } from "react-router-dom";

const CartPrice = () => {
  const cart = useCart();

  const getTotalPrice = () =>
    cart.map((p) => p.price * p.quantity).reduce((p, total) => p + total);

  const getFinalPrice = () =>
    cart.map((p) => p.quantity * p.offPrice).reduce((d, total) => d + total);

  const getTotalDiscount = () => getTotalPrice() - getFinalPrice();

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
      <Link to="/checkout" className="btn btn_primary">
        ادامه سفارش
      </Link>
    </section>
  );
};

export default CartPrice;
