import { PuffLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = ({ loading, size = 60 }) => {
  return (
    <div className={styles.loader}>
      <PuffLoader loading={loading} color="var(--primary-color)" size={size} />
    </div>
  );
};

export default Loader;
