import styles from "./textfield.module.css";
const TextField = ({ fieldName, label, formik, type = "text" }) => {
  const renderError = (field) => {
    const { errors, touched } = formik;
    if (errors[field] && touched[field])
      return <span className={styles.error}> {formik.errors[field]} </span>;
  };

  return (
    <div className={styles.form_group}>
      <div className={styles.row}>
        <label htmlFor={fieldName}> {label} </label>
        {renderError(fieldName)}
      </div>
      <input
        type={type}
        name={fieldName}
        id={fieldName}
        {...formik.getFieldProps(fieldName)}
      />
    </div>
  );
};

export default TextField;
