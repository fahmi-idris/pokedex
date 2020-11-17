/* eslint-disable camelcase */
export interface PokemonList {
  id: string;
  name: string;
  url: string;
}

export interface PokemonTypeList {
  pokemon: PokemonList;
}

export interface PokemonDetailTypes {
  slot: number;
  type: Pick<PokemonList, 'name'>;
}

export interface PokemonDetailStats {
  base_stat: number;
  effort: number;
  stat: Pick<PokemonList, 'name'>;
}

export interface PokemonDetailAbilities {
  ability: Pick<PokemonList, 'name'>;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonDetail {
  id: string;
  name: string;
  weight: number;
  height: number;
  types: PokemonDetailTypes[];
  stats: PokemonDetailStats[];
  abilities: PokemonDetailAbilities[];
}
