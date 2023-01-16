import React, { Fragment } from "react";
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

  return (
    <Container>
      {error ? <p>{error.message}</p> : null}
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Section
            component="section"
            sx={{
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
                m: "2rem 0",
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
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu
              nisl id tortor semper lobortis. Suspendisse tristique velit sit
              amet leo tempus, vel facilisis tellus sollicitudin. Nulla at ipsum
              eu arcu dapibus vestibulum. Suspendisse iaculis metus eros, sed
              consequat lorem tempor in. In elementum, quam sed facilisis porta,
              arcu orci euismod ante, eget tristique quam urna a quam. Donec
              euismod ultrices dapibus. Sed purus eros, mollis at fermentum id,
              accumsan et diam. Maecenas a ante rutrum, egestas diam sagittis,
              sollicitudin leo. Curabitur rhoncus, elit sit amet laoreet
              accumsan, magna metus venenatis nibh, a interdum arcu eros vitae
              augue.
            </Typography>
            <Typography>
              Nulla eget tristique sapien. Suspendisse pulvinar id metus id
              dignissim. Quisque nec feugiat orci. Nullam vel nisi id sapien
              auctor vestibulum. Sed id eleifend purus. Aenean sagittis at nisi
              id pellentesque. Vestibulum mauris neque, accumsan sit amet risus
              eu, dapibus luctus felis. Maecenas quis orci urna. Morbi et rutrum
              ipsum. Pellentesque finibus venenatis nunc. Donec a lobortis quam.
              Etiam elit lectus, tempus sit amet dolor in, pulvinar porta lacus.
              Nullam eu felis eros. Quisque massa tellus, mollis a eros at,
              tincidunt imperdiet erat.
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
              Do you think that we can work alongside or have a cool project
              that I could work on?
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
        </Fragment>
      )}
    </Container>
  );
};
