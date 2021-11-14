import Navbar from "../components/Navbar/Navbar";

const SiteLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default SiteLayout;
