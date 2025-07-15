import { PokemonListItem } from '../../../types';

export interface PockemonTableProps {
  data: {
    results: PokemonListItem[];
    count: number;
  };
  currentPage: number;
  searchQuery?: string;
  onRowClick: (pokemon: PokemonListItem) => void;
  onPageChange: (page: number) => void;
}