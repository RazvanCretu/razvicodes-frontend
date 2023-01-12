import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
// import Dropdown from "../components/Dropdown";
// import Burger from "../components/Burger";
import { Box, Container, Typography, Link } from "@mui/material";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSwitch = () => setIsOpen(!isOpen);

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        {/* <Dropdown /> */}
        {/* <Burger isOpen={isOpen} handleSwitch={handleSwitch} /> */}
        <Typography>Hi 👋, I am Razvan</Typography>
        <Typography variant="h3" className={styles.slideInRight}>
          A Self-Taught
        </Typography>
        <Typography variant="h3" className={styles.slideInLeft}>
          Web Developer
        </Typography>
        <Box className={styles.socials}>
          <Link
            href="https://www.linkedin.com/in/razvan-cretu-8a866b151"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/RazvanCretu"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.facebook.com/razvan.cretu.50"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
