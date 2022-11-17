import { React } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./Navigation";
import styles from "../styles/Layout.module.css";

export const Layout = () => {
  return (
    <main className={styles.layout}>
      <NavBar />
      <Outlet />
    </main>
  );
};
