import {
  ITEMS_FETCH_DATA_SUCCESS,
  END_PAGE,
  CURRENT_PAGE,
  ITEMS_FETCH_LOAD_MORE,
  ITEMS_FETCH_DATA_ERROR
} from "../actions/items";

const initialState = {
  items: [],
  endPage: null,
  page: 1,
  error: false
};

export const items = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: action.payload
      };
    case ITEMS_FETCH_DATA_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case END_PAGE:
      return {
        ...state,
        endPage: action.payload
      };
    case CURRENT_PAGE:
      return {
        ...state,
        page: action.payload
      };
    case ITEMS_FETCH_LOAD_MORE:
      return {
        ...state,
        items: [...state.items, ...action.payload]
      };
    default:
      return state;
  }
};
