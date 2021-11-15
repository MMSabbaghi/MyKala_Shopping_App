import { BiCheckShield, BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import "./CartItem.css";
import toPersianNumber from "../../utils/toPersianNumber";
import { useCartDispatch } from "../../context/CartProvider/Provider";
import {
  DECREMENT_PRODUCT_QTY,
  INCREMENT_PRODUCT_QTY,
} from "../../context/CartProvider/Types";
const CartItem = ({ product }) => {
  const { name, image, description, quantity, _id } = product;
  const dispatch = useCartDispatch();

  const incrementQtyHandler = () =>
    dispatch({ type: INCREMENT_PRODUCT_QTY, payload: _id });

  const decrementQtyHandler = () => {
    dispatch({ type: DECREMENT_PRODUCT_QTY, payload: _id });
  };

  return (
    <article className="cart_item">
      <img src={image} alt={name} />
      <section className="desc">
        <p>{name}</p>
        <ul>
          {description.map(({ support }, index) => (
            <li key={index}>
              <BiCheckShield /> {support}
            </li>
          ))}
        </ul>
        <div className="quantity_btns">
          <button className="btn" onClick={incrementQtyHandler}>
            <BiPlus />
          </button>
          <span>{toPersianNumber(quantity)}</span>
          <button className="btn" onClick={decrementQtyHandler}>
            {quantity > 1 ? <BiMinus /> : <BiTrash />}
          </button>
        </div>
      </section>
    </article>
  );
};

export default CartItem;
