import { React } from "react";
import styles from "../styles/Home.module.css";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <p>Hi 👋, I am Razvan</p>
        <h1 className={styles.slideInRight}>A Self-Thought</h1>
        <h1 className={styles.slideInLeft}>Web Developer</h1>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/razvan-cretu-8a866b151"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/RazvanCretu"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/razvan.cretu.50"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};
