import { products } from "../../data";
import toPersianNumber from "../../utils/toPersianNumber";
import "./Products.css";
import notify from "../../utils/notificationManager";
import { useCartDispatch } from "../../context/CartProvider/Provider";
import { ADD_TO_CART } from "../../context/CartProvider/Types";

const ProductItem = (props) => {
  const { image, name, price } = props.product;
  const dispatch = useCartDispatch();

  const addProductHandler = () => {
    dispatch({ type: ADD_TO_CART, payload: props.product });
    notify("success", "محصول با موفقیت اضافه شد");
  };
  return (
    <div className="product_item">
      <img src={image} alt={name} />
      <section>
        <p className="product_name">{name}</p>
        <div>
          <button className="btn btn_primary" onClick={addProductHandler}>
            افزودن به سبد خرید
          </button>
          <p>{toPersianNumber(price)}دلار</p>
        </div>
      </section>
    </div>
  );
};

const Products = () => {
  return (
    <section className="products">
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </section>
  );
};

export default Products;
