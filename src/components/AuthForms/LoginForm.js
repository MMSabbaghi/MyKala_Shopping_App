import { useFormik } from "formik";
import TextField from "../common/TextField/TextField";
import * as Yup from "yup";
import "./AuthForms.css";
import { loginUser } from "../../services/authServices";
import notify from "../../utils/notificationManager";
import { useNavigate } from "react-router";
import { useSetAuth } from "../../context/AuthProvider/Provider";
import useRedirectUrl from "../../hooks/useRedirectUrl";

const LoginForm = () => {
  const navigate = useNavigate();
  const setAuth = useSetAuth();
  const redirectUrl = useRedirectUrl();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("ایمیل را وارد کنید !")
      .email("ایمیل وارد شده نامعتبر است !"),
    password: Yup.string()
      .required("رمز عبور را وارد کنید !")
      .min(8, "رمز عبور حداقل باید شامل ۸ کاراکتر باشد !"),
  });

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      notify("success", "با موفقیت وارد شدید !");
      navigate(`/${redirectUrl}`);
    } catch (error) {
      const { message } = error.response.data;
      notify("error", message);
    }
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="auth_form_group">
      <h1> فرم ورود </h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          formik={formik}
          type="email"
          label="ایمیل"
          fieldName="email"
        />
        <TextField
          formik={formik}
          type="password"
          label="رمز عبور"
          fieldName="password"
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className="btn btn_primary"
        >
          ورود
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
