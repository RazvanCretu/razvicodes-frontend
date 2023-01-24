import React from "react";
import Markdown from "../components/Article/Markdown";
import Loader from "../components/Loader";
import Moment from "react-moment";
import "moment-timezone";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ARTICLE_BY_SLUG } from "../queries";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

Moment.globalLocal = true;

const Hero = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "3rem 0 1rem 0",
  "& h1": {
    fontSize: "2.7rem",
    margin: "0 0 0rem 0",
  },
  "& time": {
    fontSize: "1.3rem",
    fontStyle: "italic",
  },
}));

const Content = styled(Box)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: 400,
  lineHeight: "1.5rem",
  "& h1": { margin: "3rem 0" },
  "& h2,h3,h4,h5,h6": {
    margin: "1.5rem 0",
  },
  "& ul": {
    margin: "1rem auto",
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  "& p": {
    margin: "1.3rem 0",
  },
  "& a": {
    color: theme.palette.success.light,
  },
  "& blockquote": {
    fontSize: "1.2em",
    width: "80%",
    margin: "50px auto",
    borderRadius: "7.5px",
    fontFamily: "Open Sans",
    fontStyle: "italic",
    color: "#555555",
    padding: "1.2em 30px 1.2em 50px",
    borderLeft: "8px solid #78C0A8",
    lineHeight: 1.6,
    position: "relative",
    background: "#EDEDED",
    "&::after": {
      fontFamily: "Arial",
      content: `${"'\u201C'"}`,
      color: "#78C0A8",
      fontSize: "3em",
      position: "absolute",
      left: "10px",
      top: "-10px",
    },
  },
}));

export const Article = () => {
  const { slug } = useParams();
  const { error, loading, data } = useQuery(GET_ARTICLE_BY_SLUG, {
    variables: { slug: slug },
  });

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  if (loading) {
    return <Loader />;
  }

  const article = data.articles.data[0];

  return (
    <Container
      sx={{
        minHeight: "100%",
        padding: "7vh 1rem 1rem",
      }}
    >
      <Hero>
        <Typography variant="h4">{article.attributes.title}</Typography>
        <Moment format="YY MMM dddd Do">
          {article.attributes.publishedAt}
        </Moment>
      </Hero>
      <Content>
        <Markdown children={article.attributes.content} />
      </Content>
    </Container>
  );
};
