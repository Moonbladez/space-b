//modules
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

//styles
import styles from "./Pagination.module.scss";

export const Pagination = ({ page, numberOfPages, handlePageSet }) => {
  const pagesAsArray = Array.from(Array(numberOfPages).keys()).map(
    (interger) => interger
  );
  const selectedPage = page;
  const previousPage = () => handlePageSet(page >= 1 ? page - 1 : page);
  const currentPage = (page) => handlePageSet(page);
  const nextPage = () =>
    handlePageSet(page < numberOfPages - 1 ? page + 1 : page);

  return (
    <nav className={styles.pagination}>
      {page !== 0 && (
        <button onClick={previousPage} type="button">
          <AiOutlineArrowLeft aria-aria-controls="pagination left" />
        </button>
      )}

      {pagesAsArray.map((page) => (
        <button
          onClick={() => currentPage(page)}
          type="button"
          key={page}
          data-page={page}
          className={selectedPage === page ? styles.selected : ""}
        >
          {page + 1}
        </button>
      ))}
      {page < numberOfPages - 1 && (
        <button onClick={nextPage} type="button">
          <AiOutlineArrowRight aria-aria-controls="pagination right" />
        </button>
      )}
    </nav>
  );
};
