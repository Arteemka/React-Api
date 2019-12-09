export const ITEMS_FAVORITE = "ITEMS_FAVORITE";

export const setFavorite = itemsFavorite => {
  return {
    type: ITEMS_FAVORITE,
    payload: itemsFavorite
  };
};
