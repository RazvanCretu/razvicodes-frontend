import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
// import Dropdown from "../components/Dropdown";
// import Burger from "../components/Burger";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSwitch = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Dropdown />
        <Burger isOpen={isOpen} handleSwitch={handleSwitch} />
        <p>Hi 👋, I am Razvan</p>
        <h1 className={styles.slideInRight}>A Self-Taught</h1>
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
