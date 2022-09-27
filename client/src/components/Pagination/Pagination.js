import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeCurrentPageAction,
  setPageResultsAction,
} from "../../store/actionsCreators";

import "./pagination.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.results);
  const currentPage = useSelector((state) => state.currentPage);

  const pageCount = Math.ceil(results.length / 5);

  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  useEffect(() => {
    dispatch(setPageResultsAction(results));
  }, [currentPage]);

  const renderPages = (pages) => {
    return pages.map((page) => {
      return (
        <li
          onClick={() => dispatch(changeCurrentPageAction(page))}
          key={page}
          className={
            page === currentPage
              ? "pagination__item pagination-active"
              : "pagination__item"
          }
        >
          {page}
        </li>
      );
    });
  };

  return <ul className="pagination__list">{renderPages(pages)}</ul>;
};

export default Pagination;
