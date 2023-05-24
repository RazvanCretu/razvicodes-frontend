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
  SiDocker,
} from "react-icons/si";
import DownloadCV from "../components/About/DownloadCV";
import CyberButton from "../components/Buttons";

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
    padding: "0 2rem 7vh",
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
    <Container
      sx={{
        "& p": {
          fontSize: "1.2rem",
          margin: "1rem 0",
        },
      }}
    >
      <Section
        component="section"
        sx={{
          alignItems: "unset",
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
        <Typography
          sx={{
            span: {
              marginRight: "1rem",
            },
          }}
        >
          <span>👋</span>I am a self-taught Software Developer.
        </Typography>
        <Typography>
          Currently I have 3.5 years of experience as a Data Engineer and I'm
          looking for a career reconversion into Web Development.
        </Typography>
        {/* <Typography>
          I have started my journey learning frontend technologies such as
          React.js and Next.js and along the way I have also managed to
          integrate global state management tools as Redux and Redux Toolkit.
        </Typography>
        <Typography>
          I wish to dive deeper in the domain and learn backend technologies
          too. Thus being able to build cool fullstack web applications or even
          cross-platform applications with Electron.js .
        </Typography> */}
      </Section>
      <Section component="section">
        <Typography variant="h4" sx={{ fontWeight: 500, m: "2rem 0" }}>
          Technologies
        </Typography>
        <Typography>
          These are the technologies that I enjoy working with the most.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            margin: "1rem",
            "& svg": {
              width: "48px",
              height: "48px",
              margin: "0 1rem 1rem",
            },
          }}
        >
          <SiPython />
          <SiJavascript />
          <SiReact />
          <SiRedux />
          <SiGraphql />
          <SiNodedotjs />
          <SiElectron />
          <SiMysql />
          <SiPostgresql />
          <SiGit />
          <SiHeroku />
          <SiDocker />
        </Box>
      </Section>
      <Section component="section">
        <Typography variant="h4" sx={{ fontWeight: 500, m: "2rem 0" }}>
          Contact
        </Typography>
        <Typography>
          Do you think that we can work alongside or have a cool project that I
          could work on?
        </Typography>
        <Box sx={{ margin: "5rem 0rem" }}>
          <CyberButton
            component="a"
            href="mailto:razvan.cretu97@gmail.com"
            rel="noreferrer"
            target="_blank"
            sx={{
              "--bg": "purple",
              "--button-font-size": "1rem",
              "--button-padding-v": "0.6rem",
              "--button-padding-h": "1.75rem",
              "--button-cutout": ".77rem",
            }}
            disableHover
            hideTag
          >
            Email
          </CyberButton>
          <DownloadCV cv={data.uploadFiles.data[0]} />
        </Box>
      </Section>
    </Container>
  );
};
