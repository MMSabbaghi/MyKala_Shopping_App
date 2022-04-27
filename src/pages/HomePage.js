import shoppingImg from "../assets/images/shoping.gif";
import feature1Img from "../assets/images/24-hours-support.png";
import feature2Img from "../assets/images/express-delivery.png";
import feature3Img from "../assets/images/money.png";
import feature4Img from "../assets/images/original.png";
import Products from "../components/Products/Products";

const SiteFeatures = () => {
  const features = [
    { img: feature1Img, desc: "پشتیبانی ۲۴ ساعته" },
    { img: feature2Img, desc: "تحویل سریع" },
    { img: feature3Img, desc: "پرداخت در محل" },
    { img: feature4Img, desc: "ضمانت اصل بودن" },
  ];
  
  return (
    <section className="bg-primary text-secondary py-8">
      <div className="container grid grid-cols-2 md:grid-cols-4 md:gap-3 gap-5">
        {features.map(({ img, desc }, index) => (
          <div key={index}>
            <img className="w-20 invert mx-auto mb-4" src={img} alt={desc} />
            <p className="text-center">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
        <section className="bg-secondary py-8">
          <div className="container grid md:grid-cols-2 gap-8 grid-cols-1">
            <img src={shoppingImg} className="max-w-full" alt="shopping" />
            <div className="flex flex-col items-center justify-center gap-8 text-center">
              <h2 className="font-bold text-2xl"> فروشگاه اینترنتی مای کالا </h2>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،</p>
            </div>
          </div>
        </section>
        <section className="container py-4 min-h-[5rem]">
          <Products />
        </section>
      <SiteFeatures />
    </>
  );
};

export default HomePage;
