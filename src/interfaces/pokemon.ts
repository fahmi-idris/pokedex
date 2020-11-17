export interface PokemonList {
  id: string;
  name: string;
  url: string;
}

export interface PokemonTypeList {
  pokemon: PokemonList;
}
