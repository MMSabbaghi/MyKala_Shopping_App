import shoppingImg from "../assets/images/shoping.gif";
import feature1Img from "../assets/images/24-hours-support.png";
import feature2Img from "../assets/images/express-delivery.png";
import feature3Img from "../assets/images/money.png";
import feature4Img from "../assets/images/original.png";
import Products from "../components/Products/Products";
import "./styles/HomePage.css";
import { Link } from "react-router-dom";

const SiteFeatures = () => {
  const features = [
    { img: feature1Img, desc: "پشتیبانی ۲۴ ساعته" },
    { img: feature2Img, desc: "تحویل سریع" },
    { img: feature3Img, desc: "پرداخت در محل" },
    { img: feature4Img, desc: "ضمانت اصل بودن" },
  ];
  return (
    <section className="site_features">
      <div className="container">
        {features.map(({ img, desc }) => (
          <div className="feature">
            <img src={img} alt={desc} />
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="home_page">
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
      <SiteFeatures />
      <section className="home_products">
        <div className="container">
          <h3> آخرین تخفیف ها </h3>
          <Products
            filter={(ps) => ps.filter((p) => !!p.discount).slice(0, 3)}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
