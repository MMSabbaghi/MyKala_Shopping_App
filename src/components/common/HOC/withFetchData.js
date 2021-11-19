import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";

const withFetchData = (Component, fetchMethod) => {
  return function ResultComponent(props) {
    const [request, setRequest] = useState({
      data: [],
      loading: true,
      error: false,
    });

    useEffect(() => {
      fetchMethod()
        .then((res) => {
          setRequest({ ...request, data: res.data, loading: false });
        })
        .catch((err) => {
          console.log(err);
          setRequest({ ...request, loading: false, error: true });
        });
    }, []);

    if (request.error) {
      return <p> خطا در دریافت اطلاعات! </p>;
    }
    if (request.loading) {
      return <Loader loading={true} />;
    }
    return <Component data={request.data} {...props} />;
  };
};

export default withFetchData;
