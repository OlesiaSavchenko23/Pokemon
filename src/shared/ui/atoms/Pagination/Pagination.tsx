import styles from './Pagination.module.css';
import type { PaginationProps, PageButtonProps } from './types';

function PageButton({ label, disabled, onClick }: PageButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.pageButton} ${disabled ? styles.pageButtonDisabled : ''}`}
    >
      {label}
    </button>
  );
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const handlePreviosPageChange = () => {
    onPageChange(currentPage - 1)
  }

  const handleNextPageChange = () => {
    onPageChange(currentPage + 1)
  }

  return (
    <div className={styles.pagination}>
      <PageButton
        label="Previous"
        disabled={currentPage === 1}
        onClick={handlePreviosPageChange}
      />
      <span>Page {currentPage} of {totalPages}</span>
      <PageButton
        label="Next"
        disabled={currentPage >= totalPages}
        onClick={handleNextPageChange}
      />
    </div>
  );
}
