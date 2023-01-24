import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
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

export const GET_ARTICLE_BY_SLUG = gql`
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
