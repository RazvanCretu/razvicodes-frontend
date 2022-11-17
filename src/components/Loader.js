import React, { useEffect } from "react";
import styles from "../styles/Loader.module.css";

const Loader = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {}, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <span className={styles.loader} />;
};

export default Loader;
