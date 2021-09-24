import { combineReducers } from "redux";
import { ADD_FAVORITE_CARD, REMOVE_FAVORITE_CARD } from "../redux/actions";

export const initialState = [];

export const cardReducer = (favorites = initialState, action) => {
  if (action.type === ADD_FAVORITE_CARD) {
    if (!favorites.some(fav => fav.id === action.payload.id)) {
      return [...favorites, action.payload];
    }

    return favorites;
  }

  if (action.type === REMOVE_FAVORITE_CARD) {
    return favorites.filter(fav => fav.id !== action.payload.id);
  }

  return favorites;
};

export default combineReducers({
  favorites: cardReducer,
});
