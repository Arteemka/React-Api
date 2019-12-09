export const ITEMS_FAVORITES = "ITEMS_FAVORITES";

export const getFavorites = itemsFavorites => {
  return {
    type: ITEMS_FAVORITES,
    payload: itemsFavorites
  };
};
