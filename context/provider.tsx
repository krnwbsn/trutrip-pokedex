import React, { createContext, useReducer, useContext } from 'react';
import Reducer, { initialState, Action, State } from './reducer';

const stateCtx = createContext(initialState as any);
const dispatchCtx = createContext((() => undefined) as React.Dispatch<Action>);

const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState as any);

  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
    </dispatchCtx.Provider>
  );
};

export const useDispatch = () => {
  return useContext(dispatchCtx);
};

export const useGlobalState = <K extends keyof State>(property: K) => {
  const state = useContext(stateCtx);
  return state[property];
};

export default Provider;
