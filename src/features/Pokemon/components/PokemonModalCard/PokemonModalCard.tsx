import { useState } from 'react';
import Image from 'next/image';
import { ModalWindow } from '@/shared/ui/molecules';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemonById } from '@/features/Pokemon/services';
import {EvolutionTriggersTable } from '../EvolutionTriggersTable/EvolutionTriggersTable';
import styles from './PokemonModalCard.module.css';
import { PokemonModalCardProps } from './types';
import { PokemonStats, PokemonInfo } from './ui';

export function PokemonModalCard({ id, isOpen, onClose }: PokemonModalCardProps) {
  const [showEvolutionTriggers, setShowEvolutionTriggers] = useState<boolean>(false);
  const { data: pokemon, isPending, isError } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => fetchPokemonById(id),
  });

  return (
    <ModalWindow isOpen={isOpen} onClose={onClose}>
       {isPending && <div className={styles.loading}>Loading Pokémon data...</div>}

       {isError && (
        <div className={styles.error}>
          Failed to load Pokémon
        </div>
      )}

      {!isPending && !isError && pokemon && (
      <>
        <h2 className={styles.title}>{pokemon.name}</h2>

        <div className={styles.infoContainer}>
          {pokemon.sprites?.front_default && (
            <Image
              src={pokemon.sprites?.front_default}
              alt={pokemon.name}
              width={150}
              height={150}
            />
          )}
          <PokemonInfo
            id={pokemon.id}
            height={pokemon.height}
            weight={pokemon.weight}
            types={pokemon.types}
            abilities={pokemon.abilities}
          />
        </div>

        {pokemon.stats.length && (
         <PokemonStats pokemonStat={pokemon.stats} />
        )}

        <div>
          <button
            className={styles.evolutionButton}
            onClick={() => setShowEvolutionTriggers(!showEvolutionTriggers)}
          >
            {showEvolutionTriggers ? 'Hide' : 'Show'} Evolution Triggers
          </button>

          {showEvolutionTriggers && <EvolutionTriggersTable />}
        </div>
      </>)}
    </ModalWindow>
  );
}
