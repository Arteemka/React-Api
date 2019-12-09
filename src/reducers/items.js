import { ITEMS_FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "../actions/items";

const defaultState = {
  items: []
};

export const items = (state = defaultState, action) => {
  switch (action.type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        products: action.payload
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
