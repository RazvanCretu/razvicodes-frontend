import React from "react";
import styles from "../../styles/About/Container.module.css";

const Container = ({ children }) => {
  return <div className={styles.About}>{children}</div>;
};

export default Container;
