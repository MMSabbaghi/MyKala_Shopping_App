import { useCart } from "../../context/CartProvider/Provider";
import toPersianNumber from "../../utils/toPersianNumber";
import { Link } from "react-router-dom";

const CartPrice = ({className}) => {
  const cart = useCart();

  const getTotalPrice = () =>
    cart.map((p) => p.price * p.quantity).reduce((p, total) => p + total);

  const getFinalPrice = () =>
    cart.map((p) => p.quantity * p.offPrice).reduce((d, total) => d + total);

  const getTotalDiscount = () => getTotalPrice() - getFinalPrice();

  return (
    <section className={`${className} h-fit text-2xl`}>
      <div className="flex items-center justify-between">
        <p>قیمت کالا ها</p>
        <p>{toPersianNumber(getTotalPrice())}$</p>
      </div>
      <div className="flex items-center justify-between">
        <p>تخفیف کالا ها</p>
        <p>{toPersianNumber(getTotalDiscount())}$</p>
      </div>
      <hr className="border-gray" />
      <div className="flex items-center justify-between">
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
