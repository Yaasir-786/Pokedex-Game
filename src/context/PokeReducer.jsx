export const PokeReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_POKEMON":
      return {
        ...state,
        visibility: false,
        pokemon: action.payload,
      };

    case "INCREASE_SCORE":
      return {
        ...state,
        visibility: true,
        score: state.score + 100,
      };

    case "DECREASE_SCORE":
      return {
        ...state,
        visibility: true,
        score: state.score - 50,
        life: state.life - 1,
      };

    case "SKIP_POKEMON":
      return {
        ...state,
        visibility: false,
        pokemon: action.payload,
        score: state.score - 50,
        life: state.score <= -50 ? state.life - 1 : state.life,
      };

    default:
      return state;
  }
};
