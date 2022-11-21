import React, { Fragment, useEffect, useState } from "react";
import Container from "../components/Articles/Container";
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

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(Number(getDefaultPage()));
  const { error, loading, data } = useQuery(QUERY_ARTICLES, {
    variables: { page: currentPage, pageSize: PageSize },
  });

  useEffect(() => {
    localStorage.setItem("articlesPage", currentPage);
  }, [currentPage]);

  return (
    <Container>
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
    </Container>
  );
};

export default Articles;

const getDefaultPage = () => {
  const selPage = localStorage.getItem("articlesPage");

  return selPage || 1;
};
