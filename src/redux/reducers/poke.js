import { IS_LOGED, GET_POKEMON, GET_POKEMON_OK, GET_POKEMON_ERROR } from "../actionTypes";

const initialState = {
  isLoged: false,
  isPending: false,
  isError: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOGED:
      return { ...state, isLoged: action.payload };
    case GET_POKEMON:
        return { ...state, isPending: true, pokeData: null };
    case GET_POKEMON_OK:
      return { ...state, isPending: false, pokeData: action.payload };
    case GET_POKEMON_ERROR:
      return { ...state, isPending: false, isError: true };
    default:
      return state;
  }
}
