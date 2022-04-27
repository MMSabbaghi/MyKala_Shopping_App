import emptyCartImg from "../assets/images/cart-empty.svg";
import { useCart } from "../context/CartProvider/Provider";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";
import CartPrice from "../components/CartPrice/CartPrice";
import ErrorContent from "../components/common/ErrorContent/ErrorContent";

const CartPage = () => {
  const cart = useCart();

  if (!cart.length) {
    return (
      <ErrorContent imageSrc={emptyCartImg} message={"سبد خرید شما خالی است !"}>
        <Link to="/products" className="btn btn_primary">
          برو به فروشگاه
        </Link>
      </ErrorContent>
    );
  }
  return (
    <section className="container my-4 gap-8 lg:grid lg:grid-cols-11 flex flex-col">
      <CartPrice className="lg:order-2 card cart-page-card lg:col-span-3" />
      <div className="lg:order-1 card cart-page-card lg:col-span-8">
        {cart.map((product) => (
          <CartItem key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CartPage;
