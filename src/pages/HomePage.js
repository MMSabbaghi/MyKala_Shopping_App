import shoppingImg from "../assets/images/shoping.gif";
import feature1Img from "../assets/images/24-hours-support.png";
import feature2Img from "../assets/images/express-delivery.png";
import feature3Img from "../assets/images/money.png";
import feature4Img from "../assets/images/original.png";
import Products from "../components/Products/Products";
import "./styles/HomePage.css";

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
        {features.map(({ img, desc }, index) => (
          <div className="feature" key={index}>
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
          </div>
        </div>
      </section>
      <section className="container home_products">
        <Products />
      </section>
      <SiteFeatures />
    </div>
  );
};

export default HomePage;
