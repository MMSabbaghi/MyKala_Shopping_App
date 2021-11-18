import "./styles/AuthLayout.css";
import authImg from "../assets/images/Secure login-rafiki.svg";
import { NavLink } from "react-router-dom";
import SiteLayout from "./SiteLayout";
import useRedirectUrl from "../hooks/useRedirectUrl";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthProvider/Provider";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();
  const userData = useAuth();

  useEffect(() => {
    if (userData) navigate("/");
  }, [userData]);

  const redirectUrl = useRedirectUrl();
  const getRouteWithRedirect = (route) =>
    redirectUrl ? `${route}?redirect=${redirectUrl}` : route;

  const getNavLinkClass = ({ isActive }) => (isActive ? "active_form" : "");
  return (
    <SiteLayout>
      <div className="container auth_page">
        <div className="auth_form">
          <div className="toggle_form">
            <NavLink
              to={getRouteWithRedirect("/login")}
              className={getNavLinkClass}
            >
              ورود
            </NavLink>
            <NavLink
              to={getRouteWithRedirect("/signup")}
              className={getNavLinkClass}
            >
              ثبت نام
            </NavLink>
          </div>
          {children}
        </div>
        <img src={authImg} alt="auth" />
      </div>
    </SiteLayout>
  );
};

export default AuthLayout;
