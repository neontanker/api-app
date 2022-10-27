import { useEffect, useState } from "react";
import PageNumberItem from "./PageMenuItem";
import classes from "./PageMenuList.module.css";

// Gets the "first" page depending on "distance" which is half of the max shown pages then does some checks to make sure we're not out of bounds and consistent
const getFirstPage = (activePage, totalPages, maxPagesShown) => {
  const distance = Math.floor(maxPagesShown / 2);
  const newFirstPage = activePage - distance;
  const newLastPage = activePage + distance;
  let result = 1;
  if (newFirstPage <= 1) {
    result = 1;
  } else if (newLastPage <= totalPages) {
    result = newFirstPage;
  } else if (newLastPage >= totalPages) {
    let newCalcFirstPage = totalPages - maxPagesShown + 1;
    if (newCalcFirstPage >= 1) {
      result = newCalcFirstPage;
    }
  }
  return result;
};
// Gets the "last" page based on the first page
const getLastPage = (firstPage, totalPages, maxPagesShown) => {
  const minPages = Math.min(totalPages, maxPagesShown);
  const lastPage = firstPage + minPages - 1;
  return lastPage;
};

const PageNumberList = (props) => {
  const { changePageHandler, paginationOptions, maxPagesShown = 5 } = props;
  const [firstPage, setFirstPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  /* 
  paginationOptions.
  hasNextPage
  hasPrevPage
  limit
    nextPage
    page
    pagingCounter
    prevPage
    totalDocs
    totalPages*/
  const { totalPages, page } = paginationOptions;

  // Gets the "last" page based on the first page
  useEffect(() => {
    const firstPage = getFirstPage(page, totalPages, maxPagesShown);
    const lastPage = getLastPage(firstPage, totalPages, maxPagesShown);
    setLastPage(lastPage);
    setFirstPage(firstPage);
  }, [page, totalPages, maxPagesShown]);

  // const pageArray = [...Array(totalPages + 1).keys()].slice(1);
  const pageArray = Array.from(
    { length: lastPage - firstPage + 1 },
    (_, i) => firstPage + i
  );

  const pageMenuList = pageArray.map((num, i) => (
    <PageNumberItem
      active={num === page}
      number={num}
      key={num}
      onClick={() => page !== num && changePageHandler(num)}
    />
  ));

  return (
    <ul className={classes.pageMenu}>
      <PageNumberItem onClick={() => page !== 1 && changePageHandler(1)}>
        [1]
      </PageNumberItem>
      <PageNumberItem onClick={() => page !== 1 && changePageHandler(page - 1)}>
        -
      </PageNumberItem>
      {pageMenuList}
      <PageNumberItem
        onClick={() => page !== totalPages && changePageHandler(page + 1)}
      >
        +
      </PageNumberItem>
      <PageNumberItem
        onClick={() => page !== totalPages && changePageHandler(totalPages)}
      >
        [{totalPages}]
      </PageNumberItem>
    </ul>
  );
};
export default PageNumberList;
