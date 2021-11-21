import { useState, useEffect } from "react";
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

    useEffect(() => {
      fetchMethod()
        .then((res) => {
          const data = res.docs.map((doc) => ({ ...doc.data(), _id: doc.id }));
          setRequest((req) => ({ ...req, data, loading: false }));
        })
        .catch((err) => {
          setRequest((req) => ({ ...req, loading: false, error: true }));
        });
    }, []);

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
