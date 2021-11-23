import styles from "./Loader.module.css";

const Loader = ({ loading, size = 60 }) => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
