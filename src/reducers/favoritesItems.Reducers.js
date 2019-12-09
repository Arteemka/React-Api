import { ITEMS_FAVORITE } from "../actions/favoriteItems";

const initialState = {
  itemsFavorite: []
};

export const itemsFavorite = (state = initialState, action) => {
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
