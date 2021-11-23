import "./Footer.css";
import { BiPhone, BiEnvelope } from "react-icons/bi";
import { FaLinkedinIn, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const footrLinks = [
    { to: "/", label: "درباره ما" },
    { to: "/", label: "ارتباط با ما" },
    { to: "/", label: "استخدام" },
    { to: "/", label: "قوانین" },
    { to: "/", label: "اخبار" },
    { to: "/", label: "بلاگ" },
  ];

  return (
    <footer className="main_footer">
      <div className="container">
        <section className="footer_info">
          <div className="info">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </section>
        <section className="footer_info">
          <div className="info">
            <BiPhone />
            <p> ۰۲۱-۱۲۳۴۵۶۷</p>
          </div>
          <div className="info">
            <BiEnvelope />
            <p> example@mykala.com</p>
          </div>
        </section>

        <section className="quick_access">
          <ul>
            {footrLinks.map(({ to, label }, index) => (
              <li key={index}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="social_media">
          <Link to="/">
            <FaLinkedinIn />
          </Link>
          <Link to="/">
            <FaTelegramPlane />
          </Link>
          <Link to="/">
            <FaInstagram />
          </Link>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
