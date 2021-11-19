import styles from "./ErrorContent.module.css";

const ErrorContent = ({ imageSrc, message, children, imageWidth = 300 }) => {
  return (
    <div className={styles.error_content}>
      <img src={imageSrc} alt={message} width={imageWidth} />
      <p> {message} </p>
      {children}
    </div>
  );
};

export default ErrorContent;
