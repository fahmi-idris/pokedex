import { PokemonList } from 'interfaces/pokemon';
import { LIMIT, OFFSET } from 'utils/constants';

const API = process.env.API || 'https://pokeapi.co/api/v2';
const IMAGE_STORAGE =
  process.env.IMAGE_STORAGE || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

export const renderPokemonImage = (id: string): string => `${IMAGE_STORAGE}/${id}.png`;

export const renderPokemonId = (data: PokemonList): string => {
  const rx = /https:\/\/pokeapi.co\/api\/v2\/pokemon\/([A-Za-z0-9-_]+)\//;
  const urlMatch = rx.exec(data?.url);
  if (urlMatch) {
    return urlMatch[1];
  }
  return '0';
};

export const getAllPokemon = (page: string): string => {
  const limit = page ? parseInt(page as string, 10) * LIMIT : LIMIT;
  return `${API}/pokemon/?limit=${limit}&offset=${OFFSET}`;
};

export const getPokemonByType = (type: string): string => `${API}/type/${type}`;
