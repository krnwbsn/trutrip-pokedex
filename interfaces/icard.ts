export interface ICard {
  color?: string;
  name?: string;
  pokemonId?: string;
  id?: number;
  types?: {
    color?: string;
    type?: string;
  }[];
}
