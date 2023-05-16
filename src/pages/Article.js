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
import { Title1 } from "../components/Titles";

Moment.globalLocal = true;

const ArticleContainer = styled(Container)(({ theme }) => ({
  minHeight: "100%",
  padding: "7vh 1rem 1rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 1rem 7vh",
  },
}));

const Hero = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "2rem 0",
  h1: {
    lineHeight: 1,
    marginBottom: ".75rem",
  },
  time: {
    fontSize: "1.3rem",
    fontStyle: "italic",
  },
  [theme.breakpoints.down("sm")]: {
    h1: {
      fontSize: "4.2rem",
    },
  },
}));

const Content = styled(Box)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: 400,
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
  "& code": {
    fontFamily: "Oxanium !important",
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
  [theme.breakpoints.down("sm")]: {
    p: {
      lineHeight: 1.2,
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
    <ArticleContainer sx={{ color: "text.main" }}>
      <Hero>
        <Title1 variant="h1">{article.attributes.title}</Title1>
        <Typography component={Moment} format="YY MMM dddd Do">
          {article.attributes.publishedAt}
        </Typography>
      </Hero>
      <Content>
        <Markdown children={article.attributes.content} />
      </Content>
    </ArticleContainer>
  );
};
