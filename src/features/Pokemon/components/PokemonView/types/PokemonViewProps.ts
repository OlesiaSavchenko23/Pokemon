import { PokemonListResponse, PokemonListItem } from '../../../types';

export interface PokemonViewProps {
  data: PokemonListResponse;
  currentPage: number;
  searchQuery: string;
  onRowClick: (pokemon: PokemonListItem) => void;
  onPageChange: (page: number) => void;
  onSearch: (query: string) => void;
}