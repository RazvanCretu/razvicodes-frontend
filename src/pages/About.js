import React from "react";
import Loader from "../components/Loader";
import { useQuery, gql } from "@apollo/client";
import { Container as MUIContainer, Box, Typography } from "@mui/material";
import { styled } from "@mui/material";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiHeroku,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiGraphql,
  SiElectron,
  SiRedux,
} from "react-icons/si";
import DownloadCV from "../components/About/DownloadCV";

const UPLOAD_FILES = gql`
  query Files {
    uploadFiles(filters: { name: { contains: "Razvan WebDev CV" } }) {
      data {
        id
        attributes {
          name
          hash
          ext
          createdAt
          url
        }
      }
    }
  }
`;

const Container = styled(MUIContainer)(({ theme }) => ({
  minHeight: "100vh",
  padding: "7vh 20% 0",
  fontSize: "1.2rem",
  fontWeight: 400,
  display: "flex",
  flexFlow: "wrap",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    padding: "7vh 2rem 0",
  },
}));

const Section = styled(Box)(({ theme }) => ({
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "400px",
}));

export const About = () => {
  const { error, loading, data } = useQuery(UPLOAD_FILES);

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Section
        component="section"
        sx={{
          alignItems: "unset",
          "& p": {
            fontSize: "1.2rem",
            margin: "1rem 0",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            m: "2rem auto",
            animation: "bounce2 1.7s ease forwards",
            "@keyframes bounce2": {
              "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
              "40%": { transform: "translateY(-30px)" },
              "60%": { transform: "translateY(-15px)" },
            },
          }}
        >
          About Me
        </Typography>
        <Typography>I am a self-taught junior web developer.</Typography>
        <Typography>
          I have started my journey learning frontend technologies such as
          React.js and GraphQL and along the way I have also managed to
          integrate global state management tools as Redux and Redux Toolkit.
        </Typography>
        <Typography>
          I wish to dive deeper in the domain and learn backend technologies
          too. Thus being able to build cool fullstack web applications or even
          cross-platform applications with Electron.js .
        </Typography>
      </Section>
      <Section component="section">
        <Typography variant="h4" sx={{ fontWeight: 500, m: "2rem 0" }}>
          Technologies
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            margin: "3rem",
            "& svg": {
              width: "48px",
              height: "48px",
              margin: "0 1rem 1rem",
            },
          }}
        >
          <SiJavascript />
          <SiReact />
          <SiElectron />
          <SiRedux />
          <SiGraphql />
          <SiNodedotjs />
          <SiGit />
          <SiHeroku />
          <SiMysql />
          <SiPostgresql />
          <SiPython />
        </Box>
      </Section>
      <Section component="section">
        <Typography variant="h4" sx={{ fontWeight: 500, m: "2rem 0" }}>
          Contact
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Do you think that we can work alongside or have a cool project that I
          could work on?
        </Typography>
        <Box sx={{ margin: "5rem 0rem" }}>
          <Typography
            component="a"
            href="mailto:razvan.cretu97@gmail.com"
            rel="noreferrer"
            sx={{
              padding: "0.75rem 0.5rem",
              border: ".2rem solid var(--text-secondary)",
              borderRadius: "15px",
              marginRight: "2rem",
              fontWeight: 600,
            }}
          >
            Email Me
          </Typography>
          <DownloadCV cv={data.uploadFiles.data[0]} />
        </Box>
      </Section>
    </Container>
  );
};
