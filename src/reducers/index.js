import { combineReducers } from "redux";

import { findReducers } from "./textReducers";
import { items } from "./itemsReducers";
import { itemsFavorites } from "./favoritesItems.Reducers";

export const reducer = combineReducers({
  text: findReducers,
  items: items,
  itemsFavorites: itemsFavorites
});
