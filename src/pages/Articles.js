import React, { useState } from "react";
import ArticlesList from "../components/Articles/List";
import Loader from "../components/Loader";
import { Container, Typography, Pagination } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from "../queries";

let pageSize = 5;

const ArticlesContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  minHeight: "100vh",
  margin: "0 auto",
  position: "relative",
  padding: "7vh 5px 3rem",
  [theme.breakpoints.up("md")]: {
    maxWidth: "1000px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "3rem 5px 7vh",
  },
}));

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(getDefaultPage());
  const { error, loading, data } = useQuery(GET_ARTICLES);

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  if (loading) {
    return <Loader />;
  }

  // make chunks of posts corresponding to each page
  const posts = data.articles.data.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / pageSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  const handlePageChange = (e, page) => {
    localStorage.setItem("articlesPage", page);
    setCurrentPage(page);
  };

  return (
    <ArticlesContainer>
      <ArticlesList articles={posts[currentPage - 1]} />
      <Pagination
        count={posts.length}
        page={currentPage}
        onChange={handlePageChange}
        sx={{
          position: "absolute",
          bottom: "10vh",
          marginTop: "3rem",
        }}
      />
    </ArticlesContainer>
  );
};

export default Articles;

const getDefaultPage = () => {
  const selPage = localStorage.getItem("articlesPage");

  return Number(selPage) || 1;
};
