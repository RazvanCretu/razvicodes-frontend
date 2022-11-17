import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";

import styles from "../../styles/Articles/List.module.css";

const List = ({ articles }) => {
  const animate = (i) => `slideInRight 1s ease-in ${0.25 * i}s forwards`;

  return (
    <ul className={styles.list}>
      {articles.map((article, i, arr) => (
        <li
          className={styles.item}
          style={{ animation: animate(i) }}
          key={article.id}
        >
          <div className={styles.itemHero}>
            <h2 className={styles.itemTitle}>{article.attributes.title}</h2>
            <Moment
              className={styles.itemTime}
              format="YY MMM dddd Do"
              tz="UTC+3"
            >
              {article.attributes.publishedAt}
            </Moment>
          </div>
          <Link className={styles.readMore} to={article.attributes.slug}>
            Read
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
