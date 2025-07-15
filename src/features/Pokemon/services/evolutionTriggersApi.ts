import { EvolutionTriggerResponse } from '../types';
import { POKEMON_API_CONFIG } from '../constants';

export async function fetchEvolutionTriggers(page: number = 1, limit: number = 10): Promise<EvolutionTriggerResponse> {
  const offset = (page - 1) * limit;

  const response = await fetch(`${POKEMON_API_CONFIG.url}/evolution-trigger/?limit=${limit}&offset=${offset}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch evolution triggers');
  }

  return response.json();
}