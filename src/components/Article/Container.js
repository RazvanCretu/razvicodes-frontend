import React from "react";
import styles from "../../styles/Article/Container.module.css";

const Container = ({ children }) => {
  return <div className={`${styles.container} hide__scroll`}>{children}</div>;
};

export default Container;
