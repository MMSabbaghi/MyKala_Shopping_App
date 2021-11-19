import { useState } from "react";
import Loader from "../Loader/Loader";

const withLoading = (Component) => {
  return function ResultComponent(props) {
    const [loading, setLoading] = useState(false);
    if (loading) {
      return <Loader loading={true} />;
    }
    return <Component setLoading={setLoading} {...props} />;
  };
};

export default withLoading;
