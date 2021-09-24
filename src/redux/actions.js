export const ADD_FAVORITE_CARD = "ADD_FAVORITE_CARD";
export const REMOVE_FAVORITE_CARD = "REMOVE_FAVORITE_CARD";

// Triggered when a card weather is added as a favorite
export const addFavorite = card => {
  return {
    type: ADD_FAVORITE_CARD,
    payload: card,
  };
};

// Triggered when a card weather is removed as a favorite
export const removeFavorite = id => {
  return {
    type: REMOVE_FAVORITE_CARD,
    payload: id,
  };
};
