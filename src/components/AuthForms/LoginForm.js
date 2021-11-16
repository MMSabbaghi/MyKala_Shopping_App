import { useFormik } from "formik";
import TextField from "../common/TextField/TextField";
import * as Yup from "yup";
import "./AuthForms.css";

const LoginForm = () => {
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
      .min(6, "رمز عبور حداقل باید شامل ۶ کاراکتر باشد !"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
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
        <button type="submit" className="btn btn_primary">
          ورود
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
