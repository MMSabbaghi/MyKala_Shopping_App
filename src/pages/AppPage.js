import { useEffect } from "react";
const AppPage = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
};

export default AppPage;
