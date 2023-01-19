import React, { useState } from "react";
import { Container, Typography, Pagination } from "@mui/material";
import { styled } from "@mui/material/styles";
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

let pageSize = 5;

const ArticlesContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100vh",
  margin: "0 auto",
  position: "relative",
  overflow: "hidden",
  padding: "7vh 5px 3rem",
  [theme.breakpoints.up("md")]: {
    maxWidth: "1000px",
  },
}));

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(getDefaultPage());
  const { error, loading, data } = useQuery(QUERY_ARTICLES);

  const lastPost = currentPage * pageSize;
  const firstPost = lastPost - pageSize;
  const posts = data?.articles.data.slice(firstPost, lastPost);

  const handlePageChange = (e, page) => {
    localStorage.setItem("articlesPage", page);
    setCurrentPage(page);
  };

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  if (loading) {
    return (
      <ArticlesContainer>
        <Loader />
      </ArticlesContainer>
    );
  }

  return (
    <ArticlesContainer>
      <List articles={posts} />
      <Pagination count={3} page={currentPage} onChange={handlePageChange} />
    </ArticlesContainer>
  );
};

export default Articles;

const getDefaultPage = () => {
  const selPage = localStorage.getItem("articlesPage");

  return Number(selPage) || 1;
};
