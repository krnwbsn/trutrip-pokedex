import { ICard } from '@interfaces/icard';

export const initialState = {
  myPokemon: [],
};

export interface State {
  myPokemon: ICard[];
}

export type Action = { type: 'SET_MY_POKEMON'; payload: State['myPokemon'] };

const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_MY_POKEMON':
      return {
        ...state,
        myPokemon: [...state.myPokemon, ...action.payload],
      };
    default:
      return state;
  }
};

export default Reducer;
