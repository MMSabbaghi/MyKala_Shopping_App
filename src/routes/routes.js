import { Route } from "./Classes";
import HomePage from "../pages/HomePage";
import NotFound404Page from "../pages/NotFound404Page";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import CheckOutPage from "../pages/CheckOutPage";
import LoginForm from "../components/AuthForms/LoginForm";
import SignupForm from "../components/AuthForms/SignupForm";
import AuthLayout from "../layout/AuthLayout";

const routes = [
  new Route("خانه", "/", HomePage),
  new Route("محصولات", "/products", ProductsPage),
  new Route("سبد خرید شما", "/cart", CartPage),
  new Route("ورود", "/login", LoginForm, { layout: AuthLayout }),
  new Route("ورود", "/signup", SignupForm, { layout: AuthLayout }),
  new Route("ثبت سفارش", "/checkout", CheckOutPage),
  new Route("صفحه یافت نشد !", "*", NotFound404Page),
];

export default routes;
