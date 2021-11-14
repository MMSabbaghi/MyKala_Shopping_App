import { Link } from "react-router-dom";
import error404img from "../assets/images/404-error.svg";
import "./styles/404Page.css";

const NotFound404Page = () => {
  return (
    <div className="page_404">
      <img src={error404img} alt="page not found" width="600" />
      <p> صفحه مورد نظر یافت نشد ! </p>
      <Link to="/"> بازگشت به صفحه اصلی </Link>
    </div>
  );
};

export default NotFound404Page;
