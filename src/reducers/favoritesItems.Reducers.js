import { ITEMS_FAVORITE } from "../actions/favoriteItems";

const defaultState = {
  itemsFavorite: []
};

export const itemsFavorite = (state = defaultState, action) => {
  switch (action.type) {
    case ITEMS_FAVORITE:
      return {
        ...state,
        itemsFavorite: action.payload
      };
    default:
      return state;
  }
};
