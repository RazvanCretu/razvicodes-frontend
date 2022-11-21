import React from "react";
import { usePagination, DOTS } from "../hooks/usePagination";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import styles from "../styles/Pagination.module.css";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    // if (currentPage !== lastPage) {
    onPageChange(currentPage + 1);
    // }
  };

  const onPrevious = () => {
    // if (currentPage > 1) {
    onPageChange(currentPage - 1);
    // }
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={`${styles.paginationContainer} ${className}`}>
      {/* Left navigation arrow */}
      <li
        className={`${styles.paginationItem} ${
          currentPage === 1 ? styles.disabled : ""
        }`}
        onClick={onPrevious}
      >
        <RiArrowDropLeftLine />
      </li>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li className={`${styles.paginationItem} ${styles.dots}`}>
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={pageNumber}
            className={`${styles.paginationItem} ${
              pageNumber === currentPage ? styles.selected : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={`${styles.paginationItem} ${
          currentPage === lastPage ? styles.disabled : ""
        }`}
        onClick={onNext}
      >
        <RiArrowDropRightLine />
      </li>
    </ul>
  );
};

export default Pagination;
