import { useFormik } from "formik";
import TextField from "../common/TextField/TextField";
import * as Yup from "yup";
import { signUpUser } from "../../services/authServices";
import notify from "../../utils/notificationManager";
import { useSetAuth } from "../../context/AuthProvider/Provider";
import withLoading from "../common/HOC/withLoading";

const SignupForm = ({ setLoading }) => {
  const setAuth = useSetAuth();

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
    const { user, error } = await signUpUser(userData);
    if (error) {
      notify("error", error);
    } else {
      setAuth(user);
      notify("success", "ثبت نام با موفقیت انجام شد !");
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
      <h1 className="w-fit text-[3rem] my-4 mx-auto border-b-2 border-b-primary"> فرم ثبت نام </h1>
      <form className="flex flex-col gap-2 mt-0 px-4 my-4" onSubmit={formik.handleSubmit}>
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
          className="btn btn_primary mt-4 text-[1.8rem]"
        >
          ثبت نام
        </button>
      </form>
    </>
  );
};

export default withLoading(SignupForm);
