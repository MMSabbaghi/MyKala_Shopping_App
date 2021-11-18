import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthProvider/Provider";

const AppPage = ({ title, authorize, path, children }) => {
  const navigate = useNavigate();
  const redirectUrl = path.replace("/", "");
  const auth = useAuth();

  useEffect(() => {
    if (authorize && !auth) navigate(`/login?redirect=${redirectUrl}`);
    else document.title = title;
  }, [title, auth]);

  return <>{children}</>;
};

export default AppPage;
