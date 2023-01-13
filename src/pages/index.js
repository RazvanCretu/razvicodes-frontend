import React, { useState } from "react";
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
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          h3: {
            fontSize: "calc(3rem + .5vmin)",
          },
        }}
      >
        {/* <Dropdown /> */}
        {/* <Burger isOpen={isOpen} handleSwitch={handleSwitch} /> */}
        <Typography
          sx={{
            fontSize: "1.1rem",
            margin: "0 0 2rem 0",
            animation: "fadeIn 3s",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          Hi 👋, I am Razvan
        </Typography>
        <Typography
          variant="h3"
          sx={{
            animation: "slideInRight .75s",
            "@keyframes slideInRight": {
              "0%": { transform: "translateX(100%)", opacity: 0 },
              "100%": { transform: "translateX(0%)", opacity: 1 },
            },
          }}
        >
          A Self-Taught
        </Typography>
        <Typography
          variant="h3"
          sx={{
            animation: "slideInLeft 1.5s",
            "@keyframes slideInLeft": {
              "0%": { transform: "translateX(-100%)", opacity: 0 },
              "100%": { transform: "translateX(0%)", opacity: 1 },
            },
          }}
        >
          Web Developer
        </Typography>
        <Box
          sx={{
            margin: "5rem 0",
            color: "var(--active)",
            animation: "fadeIn 2s",
            a: {
              margin: ".4rem",
              height: "100%",
            },
            svg: {
              color: "inherit",
              height: "calc(3rem + .2vmin)",
              width: "calc(3rem + .2vmin)",
            },
          }}
        >
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
