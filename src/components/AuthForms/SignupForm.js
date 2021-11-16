import { useFormik } from "formik";
import TextField from "../common/TextField/TextField";
import * as Yup from "yup";
import "./AuthForms.css";

const SignupForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("نام و نام خانوادگی را وارد کنید !")
      .min(4, "نام و نام خانوادگی حداقل باید شامل ۴ حرف باشند ! "),
    email: Yup.string()
      .required("ایمیل را وارد کنید !")
      .email("ایمیل وارد شده نامعتبر است !"),
    password: Yup.string()
      .required("رمز عبور را وارد کنید !")
      .min(6, "رمز عبور حداقل باید شامل ۶ کاراکتر باشد !"),
    confirmPassword: Yup.string()
      .required("تکرار رمز عبور را وارد کنید!")
      .oneOf([Yup.ref("password"), null], "رمز عبور و تکرار آن یکی نیستند!"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    validateOnMount:true
  });

  return (
    <div className="auth_form_group">
      <h1> فرم ثبت نام </h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fieldName="fullName"
          label="نام و نام خانوادگی"
          formik={formik}
        />
        <TextField fieldName="email" label="ایمیل" formik={formik} />
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
