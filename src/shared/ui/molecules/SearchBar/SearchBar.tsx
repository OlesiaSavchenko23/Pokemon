import React from 'react';
import styles from './SearchBar.module.css';
import type { SearchBarProps } from './types';

export function SearchBar({ value, onChange, onSubmit, onClear, hasQuery, placeholder }: SearchBarProps) {
  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <form onSubmit={onSubmit} className={styles.searchBarWrapper}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={styles.searchBarInput}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
      {hasQuery && (
        <button
          type="button"
          onClick={onClear}
          className={`${styles.button} ${styles.clearBtn}`}
        >
          Clear
        </button>
      )}
    </form>
  );
};
