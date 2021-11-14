import { BiCheckShield } from "react-icons/bi";
const CartItem = ({ product }) => {
  const { name, image, description } = product;
  return (
    <article className="cart_item">
      <img src={image} alt={name} />
      <section className="desc">
        <p>{name}</p>
        <ul>
          {description.map(({ support }) => (
            <li>
              <BiCheckShield /> {support}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default CartItem;
