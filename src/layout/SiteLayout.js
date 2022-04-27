import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const SiteLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default SiteLayout;
