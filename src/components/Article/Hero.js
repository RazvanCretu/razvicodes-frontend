import React from "react";
import styles from "../../styles/Article/Hero.module.css";

const Hero = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Hero;
