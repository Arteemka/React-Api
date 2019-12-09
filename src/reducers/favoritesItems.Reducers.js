import { ITEMS_FAVORITES } from "../actions/favoritesItems";

const defaultState = {
  itemsFavorites: []
};

export const itemsFavorites = (state = defaultState, action) => {
  switch (action.type) {
    case ITEMS_FAVORITES:
      return {
        ...state,
        itemsFavorites: action.payload
      };
    default:
      return state;
  }
};
