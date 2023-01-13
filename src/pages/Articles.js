import React, { Fragment, useEffect, useState } from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import List from "../components/Articles/List";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

import { useQuery, gql } from "@apollo/client";

const QUERY_ARTICLES = gql`
  query Articles($pageSize: Int, $page: Int) {
    articles(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "publishedAt:desc"
    ) {
      data {
        id
        attributes {
          title
          slug
          publishedAt
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;

let PageSize = 5;

const ArticlesContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100vh",
  margin: "0 auto",
  position: "relative",
  [theme.breakpoints.up("lg")]: {
    maxWidth: "900px",
  },
}));

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(getDefaultPage());
  const { error, loading, data } = useQuery(QUERY_ARTICLES, {
    variables: { page: currentPage, pageSize: PageSize },
  });

  useEffect(() => {
    localStorage.setItem("articlesPage", currentPage);
  }, [currentPage]);

  return (
    <ArticlesContainer>
      {error && <p>{error.message}</p>}
      {loading && <Loader />}
      {data && (
        <Fragment>
          <List articles={data.articles.data} />
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.articles.meta.pagination.total}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </Fragment>
      )}
    </ArticlesContainer>
  );
};

export default Articles;

const getDefaultPage = () => {
  const selPage = localStorage.getItem("articlesPage");

  return Number(selPage) || 1;
};
