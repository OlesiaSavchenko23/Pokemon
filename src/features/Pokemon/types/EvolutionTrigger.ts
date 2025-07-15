export interface EvolutionTrigger {
  name: string;
  url: string;
}

export interface EvolutionTriggerResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: EvolutionTrigger[];
}
