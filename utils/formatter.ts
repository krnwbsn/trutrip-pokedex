import { pokemonTypeColor } from './constant';

export const getFormattedId = (id: number) => {
  return id ? `#${id.toString().padStart(3, '0')}` : '';
};

export const getPokemonTypeColor = (pokemonType: string[]) => {
  if (pokemonType) {
    return pokemonTypeColor.filter(({ type }) => pokemonType.includes(type));
  }
  return [];
};

export const formattedName = (name: string) => {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
};
