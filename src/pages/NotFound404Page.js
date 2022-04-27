import { Link } from "react-router-dom";
import error404img from "../assets/images/404-error.svg";
import ErrorContent from "../components/common/ErrorContent/ErrorContent";

const NotFound404Page = () => {
  return (
    <ErrorContent
      imageSrc={error404img}
      imageWidth={600}
      message={"صفحه مورد نظر یافت نشد !"}
    >
      <Link to="/"> بازگشت به صفحه اصلی </Link>
    </ErrorContent>
  );
};

export default NotFound404Page;
