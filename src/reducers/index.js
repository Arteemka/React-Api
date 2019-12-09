import { combineReducers } from "redux";

import { items } from "./itemsReducers";
import { itemsFavorite } from "./favoritesItems.Reducers";

export const reducer = combineReducers({
  items: items,
  itemsFavorite: itemsFavorite
});
