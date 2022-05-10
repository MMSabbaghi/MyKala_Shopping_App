import { useFormik } from "formik";
import TextField from "../common/TextField/TextField";
import * as Yup from "yup";
import { loginUser } from "../../services/authServices";
import notify from "../../utils/notificationManager";
import { useSetAuth } from "../../context/AuthProvider/Provider";
import withLoading from "../common/HOC/withLoading";

const LoginForm = ({ setLoading }) => {
  const setAuth = useSetAuth();

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
    setLoading(true);
    const { user, error } = await loginUser(values);
    if (error) {
      notify("error", error);
    } else {
      setAuth(user);
      notify("success", "با موفقیت وارد شدید !");
    }
    setLoading(false);
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <h1 className="w-fit text-[3rem] my-4 mx-auto border-b-2 border-b-primary"> فرم ورود </h1>
      <form className="flex flex-col gap-2 mt-0 px-4 my-4" onSubmit={formik.handleSubmit}>
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
          className="btn btn_primary mt-4 text-[1.8rem]"
        >
          ورود
        </button>
      </form>
    </>
  );
};

export default withLoading(LoginForm);
