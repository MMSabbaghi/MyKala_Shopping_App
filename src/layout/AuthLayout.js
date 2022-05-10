import authImg from "../assets/images/Secure login-rafiki.svg";
import { NavLink } from "react-router-dom";
import SiteLayout from "./SiteLayout";
import useQuery from "../hooks/useQuery";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthProvider/Provider";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();
  const userData = useAuth();
  const redirectUrl = useQuery().get("redirect") || "";

  useEffect(() => {
    if (userData) navigate(`/${redirectUrl}`);
  }, [userData, redirectUrl, navigate]);

  const getRouteWithRedirect = (route) =>
    redirectUrl ? `${route}?redirect=${redirectUrl}` : route;

  const getNavLinkClass = ({ isActive }) => {
    return ` ${
      isActive ? "bg-primary text-secondary" : ""
    } grid place-content-center text-[2rem]`;
  };

  return (
    <SiteLayout>
      <div className="container -mt-20 flex flex-col lg:grid lg:grid-cols-2">
        <div className="auth_form mt-40 p-4 h-fit bg-secondary shadow-lg rounded-lg">
          <div className="toggle_form w-[90%] h-16 m-auto border border-primary rounded-lg grid grid-cols-2">
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
