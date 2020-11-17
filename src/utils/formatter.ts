import { PokemonList } from 'interfaces/pokemon';
import { LIMIT, OFFSET } from 'utils/constants';

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
  return `/pokemon/?limit=${limit}&offset=${OFFSET}`;
};

export const formatWeight = (weight: number): string => {
  const lbs = Math.floor(weight * 22.046) / 100;
  return `${lbs} lbs (${weight / 10}kg)`;
};

export const toFeet = (meters: number): string => {
  const realFeet = (meters * 0.3937) / 12;
  const feet = Math.floor(realFeet);
  const inches = Math.round((realFeet - feet) * 12);
  return `${feet} feet ${inches}"`;
};

export const formatHeight = (height: number): string => `${toFeet(height * 10)} (${height / 10}m)`;

export const capitalize = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1);
