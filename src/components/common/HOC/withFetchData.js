import { useState, useEffect, useCallback } from "react";
import Loader from "../Loader/Loader";
import ErrorContent from "../ErrorContent/ErrorContent";
import dataErrorImg from "../../../assets/images/Questions-bro.svg";
import { Link } from "react-router-dom";

const withFetchData = (Component, fetchMethod) => {
  return function ResultComponent(props) {
    const [request, setRequest] = useState({
      data: [],
      loading: true,
      error: false,
    });
    const setError = () =>
      setRequest((req) => ({ ...req, loading: false, error: true }));

    const fetchData = useCallback(async () => {
      try {
        const { data, error } = await fetchMethod();
        error
          ? setError()
          : setRequest((req) => ({ ...req, data, loading: false }));
      } catch (error) {
        setError();
      }
    }, []);

    useEffect(() => {
      fetchData();
    }, [fetchData]);

    if (request.error) {
      return (
        <ErrorContent
          imageSrc={dataErrorImg}
          message={"خطا در دریافت اطلاعات!"}
        >
          <Link to="/">تماس با پشتیبانی</Link>
        </ErrorContent>
      );
    }
    if (request.loading) {
      return <Loader loading={true} />;
    }
    return <Component data={request.data} {...props} />;
  };
};

export default withFetchData;
