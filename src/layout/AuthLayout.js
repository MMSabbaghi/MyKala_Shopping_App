import "./styles/AuthLayout.css";
import authImg from "../assets/images/Secure login-rafiki.svg";
import { NavLink } from "react-router-dom";
import SiteLayout from "./SiteLayout";

const AuthLayout = ({ children }) => {

  const getNavLinkClass=({isActive})=> isActive ? "active_form" :""

  return (
    <SiteLayout>
      <div className="container auth_page">
          <div className="auth_form">
            <div className="toggle_form">
              <NavLink to="/login" className={getNavLinkClass}>ورود</NavLink>
              <NavLink to="/signup" className={getNavLinkClass}>ثبت نام</NavLink>
            </div>
            {children}
          </div>
        <img src={authImg} alt="auth" />
      </div>
    </SiteLayout>
  );
};

export default AuthLayout;
