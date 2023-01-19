import React from "react";
import Container from "../components/Article/Container";
import Hero from "../components/Article/Hero";
import Content from "../components/Article/Content";
import Markdown from "../components/Article/Markdown";
import Loader from "../components/Loader";

import Moment from "react-moment";

import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Typography } from "@mui/material";

const QUERY_ARTICLE = gql`
  query Article($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          slug
          content
          publishedAt
        }
      }
    }
  }
`;

export const Article = () => {
  const { slug } = useParams();
  const { error, loading, data } = useQuery(QUERY_ARTICLE, {
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
    <Container>
      <Hero>
        <h1>{article.attributes.title}</h1>
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
