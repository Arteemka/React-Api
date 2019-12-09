import { ITEMS_FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "../actions/items";

const initialState = {
  items: []
};

export const items = (state = initialState, action) => {
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
