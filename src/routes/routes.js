import { Route } from "./Classes";
import importPage from "../utils/importPage";

/** pages */
const HomePage = importPage(() => import("../pages/HomePage"));
const NotFound404Page = importPage(() => import("../pages/NotFound404Page"));
const CartPage = importPage(() => import("../pages/CartPage"));
const CheckOutPage = importPage(() => import("../pages/CheckOutPage"));
const LoginForm = importPage(() => import("../components/AuthForms/LoginForm"));
const SignupForm = importPage(() =>import("../components/AuthForms/SignupForm"));
const AuthLayout = importPage(() => import("../layout/AuthLayout"));
const ProfilePage = importPage(() => import("../pages/ProfilePage"));
const ProductsPage = importPage(() => import("../pages/ProductsPage"));

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
