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
    <footer className="bg-secondary text-center">
      <div className="container flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-16 py-12">
        <section>
          <div className="flex items-center mb-4">
            <p className="my-2 md:text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </section>
        <section className="mx-auto">
          <div className="flex items-center mb-4">
            <BiPhone className="text-4" />
            <p className="my-2 text-justify"> ۰۲۱-۱۲۳۴۵۶۷</p>
          </div>
          <div className="flex items-center mb-4">
            <BiEnvelope className="text-4" />
            <p className="my-2 text-justify"> example@mykala.com</p>
          </div>
        </section>

        <section>
          <ul className="grid grid-cols-2 gap-7">
            {footrLinks.map(({ to, label }, index) => (
              <li className="hover:text-primary hover:italic" key={index}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex justify-center">
          {[FaLinkedinIn, FaTelegramPlane, FaInstagram].map((Icon, index) => (
            <Link
              key={index}
              to="/"
              className="grid place-content-center w-12 h-12 rounded-full border border-[#222] m-2 hover:text-primary hover:border-primary"
            >
              <Icon />
            </Link>
          ))}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
