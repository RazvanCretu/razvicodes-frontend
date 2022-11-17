import { React } from "react";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import styles from "../styles/Navigation.module.css";

export const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className={`${styles.bar} ${styles.text}`}>
      <div className={styles.hero_container}>
        <p className={styles.hero}>Razvan Cretu</p>
      </div>
      <div onClick={toggleTheme} className={styles.toggler}>
        {theme === "dark" ? (
          <FaSun className={styles.icon} />
        ) : (
          <FaMoon className={styles.icon} />
        )}
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
