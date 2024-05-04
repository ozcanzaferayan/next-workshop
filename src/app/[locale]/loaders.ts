import { Pokemon } from "@/lib/db";

export const API_URL = "http://localhost:3001";

export async function getPokemons(): Promise<Pokemon[]> {
  return (await fetch(`${API_URL}/pokemons`)).json();
}

export async function getPokemon(id: string): Promise<Pokemon> {
  return (await fetch(`${API_URL}/pokemons/${id}`)).json();
}
