import type { TUuid } from '@/shared/types'
import type { PokemonSprites } from './PokemonSprites'
import type { PokemonType } from './PokemonType'
import type { PokemonAbility } from './PokemonAbility'
import type { PokemonStat } from './PokemonStat'

export interface PokemonDetails {
  id: TUuid;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  base_experience: number;
  order: number;
}