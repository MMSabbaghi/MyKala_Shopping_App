const TextField = ({ fieldName, label, formik, type = "text" }) => {
  const renderError = () => {
    const { errors, touched } = formik;
    if (errors[fieldName] && touched[fieldName])
      return <span className="text-red text-2xl"> {formik.errors[fieldName]} </span>;
  };

  return (
    <div className="flex flex-col mx-2">
      <div className="flex items-center justify-between">
        <label className="text-[1.8rem]" htmlFor={fieldName}> {label} </label>
        {renderError()}
      </div>
      <input
      className="outline-none p-3 border-gray-2 border-[1px] mt-2 rounded-lg focus:border-primary"
        type={type}
        name={fieldName}
        id={fieldName}
        {...formik.getFieldProps(fieldName)}
      />
    </div>
  );
};

export default TextField;
