import toPersianNumber from "../../utils/toPersianNumber";
import "./Products.css";
import notify from "../../utils/notificationManager";
import { useCart, useCartDispatch } from "../../context/CartProvider/Provider";
import { ADD_TO_CART } from "../../context/CartProvider/Types";
import checkInCart from "../../utils/checkInCart";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/productsService";
import Loader from "../common/Loader/Loader";

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
      <div className="price_discount row">
        <p> {toPersianNumber(price)}</p>
        <span> {toPersianNumber(discount)}% </span>
        <p> {toPersianNumber(offPrice)}دلار </p>
      </div>
    );
  };

  return (
    <div className="product_item">
      <img src={image} alt={name} />
      <section>
        <p className="product_name">{name}</p>
        <div>
          <button className="btn btn_primary" onClick={addProductHandler}>
            {inCart ? "اضافه شد !" : "افزودن به سبد خرید"}
          </button>
          {renderPrice()}
        </div>
      </section>
    </div>
  );
};

const Products = () => {
  const [status, setStatus] = useState({
    data: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    getProducts()
      .then((res) => {
        setStatus({ ...status, data: res.data, loading: false });
      })
      .catch((err) => {
        setStatus({ ...status, loading: false, error: true });
      });
  }, []);

  if (status.error) {
    return <p> خطا در دریافت اطلاعات! </p>;
  } else if (status.loading) {
    return <Loader loading={true} size={120} />;
  } else {
    return (
      <section className="products">
        {status.data.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </section>
    );
  }
};

export default Products;
