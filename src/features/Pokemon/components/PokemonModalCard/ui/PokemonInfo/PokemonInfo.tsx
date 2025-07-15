import { PokemonDetails } from '@/features/Pokemon/types';

type PokemonInfoProps = Pick<
PokemonDetails, 'id' | 'height' | 'weight' | 'types' | 'abilities'
>

export function PokemonInfo({ id, height, weight, types, abilities }: PokemonInfoProps) {
  return (
    <div>
      <p><strong>ID:</strong> #{id}</p>
      <p><strong>Height:</strong> {height / 10} m</p>
      <p><strong>Weight:</strong> {weight / 10} kg</p>
      <p>
        <strong>Types:</strong> {types?.map((t) => t.type.name).join(', ')}
      </p>
      <p>
        <strong>Abilities:</strong> {abilities?.map((a) => a.ability.name).join(', ')}
      </p>
    </div>
  );
}