import { Route } from "./Classes";
import HomePage from "../pages/HomePage";
import NotFound404Page from "../pages/NotFound404Page";
import ProductsPage from "../pages/ProductsPage";

const routes = [
  new Route("خانه", "/", HomePage),
  new Route("محصولات", "/products", ProductsPage),
  new Route("صفحه یافت نشد !", "*", NotFound404Page),
];

export default routes;
