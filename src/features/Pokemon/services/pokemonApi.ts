import { PokemonDetails, PokemonListResponse } from '../types';
import { POKEMON_API_CONFIG } from '../constants';

export async function fetchPokemonById(id: number): Promise<PokemonDetails> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon');
  }
  return response.json();
}

export async function fetchPokemonList(page: number, limit: number = 20): Promise<PokemonListResponse> {
  const offset = (page - 1) * limit;
  const res = await fetch(`${POKEMON_API_CONFIG.url}/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error('Failed to fetch Pokemon list');

  return res.json();
}

export async function searchPokemon(query: string): Promise<PokemonListResponse> {
  try {
    const res = await fetch(`${POKEMON_API_CONFIG.url}/pokemon/${query.toLowerCase()}`);
    if (!res.ok) return { results: [], count: 0, next: null, previous: null };

    const data = await res.json();
    return {
      results: [{ name: data.name, url: `${POKEMON_API_CONFIG.url}/pokemon/${data.id}/` }],
      count: 1,
      next: null,
      previous: null,
    };
  } catch {
    return { results: [], count: 0, next: null, previous: null };
  }
}