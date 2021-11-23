import styles from "./Loader.module.css";

const Loader = ({ loading }) => {
  if (!loading) return null;
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
