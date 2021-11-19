import "./styles/CartPage.css";
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
    <section className="container cart">
      <div className="cart_items">
        {cart.map((product) => (
          <CartItem key={product._id} product={product} />
        ))}
      </div>
      <CartPrice />
    </section>
  );
};

export default CartPage;
