import React from "react";
import Container from "../components/Articles/Container";
import List from "../components/Articles/List";
import Loader from "../components/Loader";

import { useQuery, gql } from "@apollo/client";

const QUERY_ARTICLES = gql`
  query Articles {
    articles(sort: "publishedAt:desc") {
      data {
        id
        attributes {
          title
          slug
          publishedAt
        }
      }
    }
  }
`;

const Articles = () => {
  const { error, loading, data } = useQuery(QUERY_ARTICLES);
  return (
    <Container>
      {error && <p>{error.message}</p>}
      {loading && <Loader />}
      {data && <List articles={data.articles.data} />}
    </Container>
  );
};

export default Articles;
