import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { Box, Container, Typography, Link } from "@mui/material";

export const Home = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          h3: {
            fontSize: "calc(2.5rem + .5vmin)",
          },
        }}
      >
        {/* <Typography
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
        </Typography> */}
        <Box
          sx={{
            color: "text.opposite",
            textShadow: "cyan 1px 1px, darkcyan 2px 2px",
            "& .MuiTypography-root": {
              fontFamily: "Cyberpunk",
              textTransform: "uppercase",
              letterSpacing: "-.25em",
            },
            "& span:first-of-type": {
              fontSize: "1.5em",
              position: "relative",
              top: "-.2em",
            },
            "& span:last-of-type": {
              fontSize: "1.5em",
              position: "relative",
              bottom: "-.2em",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              animation: "slideInRight .75s",
              fontWeight: 600,
              "@keyframes slideInRight": {
                "0%": { transform: "translateX(100%)", opacity: 0 },
                "100%": { transform: "translateX(0%)", opacity: 1 },
              },
            }}
          >
            <span>R</span>
            azvi
            <span>C</span>
            odes
          </Typography>
          {/* <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              animation: "slideInLeft 1.5s",
              "@keyframes slideInLeft": {
                "0%": { transform: "translateX(-100%)", opacity: 0 },
                "100%": { transform: "translateX(0%)", opacity: 1 },
              },
            }}
          > */}
          {/* </Typography> */}
        </Box>
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
