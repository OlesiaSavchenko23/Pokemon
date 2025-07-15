import { useState, useCallback } from 'react';
import { SearchBar } from '@/shared/ui/molecules';
import { PokemonTable } from '../PokemonTable/PokemonTable'
import { PokemonViewProps } from './types';
import styles from './PokemonView.module.css';

export function PokemonView({
  data,
  currentPage,
  searchQuery,
  onRowClick,
  onPageChange,
  onSearch,
}: PokemonViewProps) {
  const [searchInput, setSearchInput] = useState<string>(searchQuery || '');

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  const handleInputChange = useCallback((val: string) => setSearchInput(val), []);
  const handleClear = useCallback(() => {
    setSearchInput('');
    onSearch('');
  }, [onSearch]);

  return (
    <div className={styles.container}>
      <SearchBar
        value={searchInput}
        onChange={handleInputChange}
        onSubmit={handleSearchSubmit}
        onClear={handleClear}
        hasQuery={!!searchQuery}
        placeholder="Search Pokemon by name..."
      />

      <PokemonTable
        data={data}
        currentPage={currentPage}
        onRowClick={onRowClick}
        onPageChange={onPageChange}
      />
    </div>
  );
}