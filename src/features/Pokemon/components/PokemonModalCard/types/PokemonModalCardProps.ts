import type { PokemonDetails } from '@/features/Pokemon/types'
export interface PokemonModalCardProps {
  id: PokemonDetails['id'];
  isOpen: boolean;
  onClose: () => void;
}
