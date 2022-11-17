import React from "react";
import styles from "../../styles/Article/Content.module.css";

const Content = ({ children }) => {
  return <div className={`${styles.container} hideScroll`}>{children}</div>;
};

export default Content;
