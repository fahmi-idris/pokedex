import {
  renderPokemonImage,
  renderPokemonId,
  capitalize,
  formatHeight,
  formatWeight,
  getAllPokemon,
  toFeet,
} from '../formatter';
import { pokemonDummy } from '../__fixtures__/dummyData';

describe('utils/formatter', () => {
  describe('renderPokemonImage', () => {
    test('should render pokemon image URL', () => {
      const testString = '1';
      expect(renderPokemonImage(testString)).toEqual(
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      );
    });

    test('should render pokemon id from URL', () => {
      expect(renderPokemonId(pokemonDummy)).toEqual('1');
    });

    test('should capitalize text', () => {
      const testString = 'lorem';
      expect(capitalize(testString)).toEqual('Lorem');
    });

    test('should format height to formatter height', () => {
      const height = 4;
      expect(formatHeight(height)).toEqual(`1 feet 4" (0.4m)`);
    });

    test('should format weight to formatter weight', () => {
      const weight = 200;
      expect(formatWeight(weight)).toEqual(`44.09 lbs (20kg)`);
    });

    test('should render all pokement endpoint height', () => {
      const page = '2';
      expect(getAllPokemon(page)).toEqual('/pokemon/?limit=40&offset=0');
    });

    test('should format height feet', () => {
      const height = 4 * 10;
      expect(toFeet(height)).toEqual(`1 feet 4"`);
    });
  });
});
