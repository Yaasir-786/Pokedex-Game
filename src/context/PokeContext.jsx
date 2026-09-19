import { createContext, useReducer } from "react";
import { PokeReducer } from "./PokeReducer";

const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const initialState = {
    visibility: false,
    score: 0,
    life: 3,
    pokemon: {
      image: null,
      name: null,
      options: [],
    },
  };

  const [state, dispatch] = useReducer(PokeReducer, initialState);

  return (
    <PokeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeContext;
