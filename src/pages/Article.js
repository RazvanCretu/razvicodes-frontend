import React, { Fragment } from "react";
import Container from "../components/Article/Container";
import Hero from "../components/Article/Hero";
import Content from "../components/Article/Content";
import Markdown from "../components/Article/Markdown";
import Loader from "../components/Loader";

import Moment from "react-moment";

import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

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

  const article = data?.articles.data[0];

  return (
    <Container>
      {error && <p>{error.message}</p>}
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Hero>
            <h1>{article.attributes.title}</h1>
            <Moment format="YY MMM dddd Do">
              {article.attributes.publishedAt}
            </Moment>
          </Hero>
          <Content>
            <Markdown children={article.attributes.content} />
          </Content>
        </Fragment>
      )}
    </Container>
  );
};
