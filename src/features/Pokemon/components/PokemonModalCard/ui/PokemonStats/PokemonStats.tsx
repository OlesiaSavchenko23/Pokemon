import { PokemonDetails } from '@/features/Pokemon/types';
import styles from './PokemonStats.module.css';

interface PokemonStatsProps {
  pokemonStat: PokemonDetails['stats'];
}

export function PokemonStats({ pokemonStat }: PokemonStatsProps) {
  return (
    <div className={styles.statsSection}>
      <h3>Base Stats</h3>
      {pokemonStat?.map((stat) => (
        <div key={stat.stat.name} className={styles.statItem}>
          <div className={styles.statHeader}>
            <span>{stat.stat.name}:</span>
            <span>{stat.base_stat}</span>
          </div>
          <div className={styles.progressBarBackground}>
            <div
              className={styles.progressBar}
              style={{ width: `${(stat.base_stat / 255) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
