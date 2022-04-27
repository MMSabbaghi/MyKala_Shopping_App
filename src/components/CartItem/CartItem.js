import { BiCheckShield, BiMinus, BiPlus, BiTrash } from "react-icons/bi";
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
    <article className="flex items-center gap-8 p-4 border rounded-lg overflow-hidden border-gray ">
      <img className="h-full w-[15rem] object-contain object-center border border-gray rounded-lg" src={image} alt={name} />
      <section className="flex flex-col gap-[0.8rem]">
        <p className="text-bold text-[2rem]">{name}</p>
        <ul className="flex flex-col gap-2">
          {description.map(({ support }, index) => (
            <li className="flex items-center gap-2 text-2xl text-gray-2" key={index}>
              <BiCheckShield /> {support}
            </li>
          ))}
        </ul>
        <div className="quantity_btns text-center w-fit h-12 gap-4 flex items-center border border-primary rounded-lg overflow-hidden">
          <button className="btn text-[2rem]" onClick={incrementQtyHandler}>
            <BiPlus />
          </button>
          <span>{toPersianNumber(quantity)}</span>
          <button className="btn text-[2rem]" onClick={decrementQtyHandler}>
            {quantity > 1 ? <BiMinus /> : <BiTrash />}
          </button>
        </div>
      </section>
    </article>
  );
};

export default CartItem;
