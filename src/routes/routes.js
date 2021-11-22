import { Route } from "./Classes";
import HomePage from "../pages/HomePage";
import NotFound404Page from "../pages/NotFound404Page";
import CartPage from "../pages/CartPage";
import CheckOutPage from "../pages/CheckOutPage";
import LoginForm from "../components/AuthForms/LoginForm";
import SignupForm from "../components/AuthForms/SignupForm";
import AuthLayout from "../layout/AuthLayout";
import ProfilePage from "../pages/ProfilePage";
import ProductsPage from "../pages/ProductsPage";

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
