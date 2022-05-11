import toPersianNumber from "../../utils/toPersianNumber";
import notify from "../../utils/notificationManager";
import { useCart, useCartDispatch } from "../../context/CartProvider/Provider";
import { ADD_TO_CART } from "../../context/CartProvider/Types";
import checkInCart from "../../utils/checkInCart";
import { getProducts } from "../../services/productsService";
import withFetchData from "../common/HOC/withFetchData";

const ProductItem = (props) => {
  const { image, name, price, _id, offPrice, discount } = props.product;
  const dispatch = useCartDispatch();
  const cart = useCart();
  const inCart = checkInCart(cart, _id);

  const addProductHandler = () => {
    if (!inCart) {
      dispatch({ type: ADD_TO_CART, payload: props.product });
      notify("success", " با موفقیت به سبد خرید اضافه شد");
    }
  };

  const renderPrice = () => {
    if (!discount) return <p> {toPersianNumber(price)}دلار</p>;

    return (
      <div className="row gap-[0.7rem]">
        <p className="text-gray line-through"> {toPersianNumber(price)}</p>
        <span className="grid place-content-center bg-red text-[#fff] w-12 h-8 rounded-full text-[1.4rem]">
          {" "}
          {toPersianNumber(discount)}%{" "}
        </span>
        <p> {toPersianNumber(offPrice)}دلار </p>
      </div>
    );
  };

  return (
    <div className="card overflow-hidden">
      <div className="bg-white">
        <img
          className="w-full h-[25rem] object-contain object-center"
          src={image}
          alt={name}
        />
      </div>
      <section className="flex flex-col p-4">
        <p className="text-ellipsis text-center font-bold text-[2rem]">
          {name}
        </p>
        <div className="flex items-center justify-between p-4">
          <button className="btn btn_primary" onClick={addProductHandler}>
            {inCart ? "اضافه شد !" : "افزودن به سبد خرید"}
          </button>
          {renderPrice()}
        </div>
      </section>
    </div>
  );
};

const Products = ({ data: products, filter }) => {
  const getFilteredProducts = () => (filter ? filter([...products]) : products);

  return (
    <section className="grid gap-10 mt-8 mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {getFilteredProducts().map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </section>
  );
};

export default withFetchData(Products, getProducts);
