import { Route } from "./Classes";
import { lazy } from "react";
/** pages */
const HomePage = lazy(()=> import("../pages/HomePage"))
const NotFound404Page = lazy(()=> import("../pages/NotFound404Page"))
const CartPage = lazy(()=> import("../pages/CartPage"))
const CheckOutPage = lazy(()=> import("../pages/CheckOutPage"))
const LoginForm = lazy(()=> import("../components/AuthForms/LoginForm"))
const SignupForm = lazy(()=> import("../components/AuthForms/SignupForm"))
const AuthLayout = lazy(()=> import("../layout/AuthLayout"))
const ProfilePage = lazy(()=> import("../pages/ProfilePage"))
const ProductsPage = lazy(()=> import("../pages/ProductsPage"))

const routes = [
  new Route("خانه", "/", HomePage),
  new Route("سبد خرید شما", "/cart", CartPage),
  new Route("محصولات", "/products", ProductsPage),
  new Route("ورود", "/login", LoginForm, { layout: AuthLayout }),
  new Route("ثبت نام", "/signup", SignupForm, { layout: AuthLayout }),
  new Route("ثبت سفارش", "/checkout", CheckOutPage, { authorize: true }),
  new Route("پروفایل شما", "/profile", ProfilePage, { authorize: true }),
  new Route("صفحه یافت نشد !", "*", NotFound404Page),
];

export default routes;
