import { useFormik } from "formik";
import TextField from "../common/TextField/TextField";
import * as Yup from "yup";
import "./AuthForms.css";
import { signUpUser } from "../../services/authServices";
import notify from "../../utils/notificationManager";
import { useNavigate } from "react-router";
import { useSetAuth } from "../../context/AuthProvider/Provider";
import useRedirectUrl from "../../hooks/useRedirectUrl";
import { useState } from "react";
import Loader from "../common/Loader/Loader";

const SignupForm = () => {
  const navigate = useNavigate();
  const setAuth = useSetAuth();
  const redirectUrl = useRedirectUrl();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("نام و نام خانوادگی را وارد کنید !")
      .min(6, "نام و نام خانوادگی حداقل باید شامل ۶ حرف باشند ! "),
    email: Yup.string()
      .required("ایمیل را وارد کنید !")
      .email("ایمیل وارد شده نامعتبر است !"),
    password: Yup.string()
      .required("رمز عبور را وارد کنید !")
      .min(8, "رمز عبور حداقل باید شامل ۸ کاراکتر باشد !"),
    confirmPassword: Yup.string()
      .required("تکرار رمز عبور را وارد کنید!")
      .oneOf([Yup.ref("password"), null], "رمز عبور و تکرار آن یکی نیستند!"),
    phoneNumber: Yup.string()
      .required("شماره همراه را وارد کنید !")
      .matches(
        /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
        "شماره همراه نامعتبر است !"
      ),
  });

  const onSubmit = async (values) => {
    const userData = { ...values };
    delete userData.confirmPassword;
    setLoading(true);
    try {
      const { data } = await signUpUser(userData);
      setAuth(data);
      notify("success", "ثبت نام با موفقیت انجام شد !");
      navigate(`/${redirectUrl}`);
    } catch (error) {
      const { message } = error.response.data;
      notify("error", message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    validateOnMount: true,
  });

  if (loading) {
    return <Loader loading={true} />;
  }

  return (
    <div className="auth_form_group">
      <h1> فرم ثبت نام </h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fieldName="name"
          label="نام و نام خانوادگی"
          formik={formik}
        />
        <TextField fieldName="email" label="ایمیل" formik={formik} />
        <TextField
          fieldName="phoneNumber"
          label="شماره همراه"
          formik={formik}
        />
        <TextField
          fieldName="password"
          label="رمزعبور"
          formik={formik}
          type="password"
        />
        <TextField
          fieldName="confirmPassword"
          label="تکرار رمزعبور"
          formik={formik}
          type="password"
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className="btn btn_primary"
        >
          ثبت نام
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
