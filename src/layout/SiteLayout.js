import Navbar from "../components/Navbar/Navbar";

const SiteLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default SiteLayout;
