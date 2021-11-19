import shoppingImg from "../assets/images/shoping.gif";
import "./styles/HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section className="overview">
        <div className="container">
          <img src={shoppingImg} alt="shopping" />
          <div className="desc">
            <h2> فروشگاه اینترنتی مای کالا </h2>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،</p>
            <Link to="/products" className="btn btn_primary">
              مشاهده محصولات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
