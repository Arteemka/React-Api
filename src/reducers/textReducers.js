import { CHANGE_TEXT } from "../actions/input";

const defaultState = {
  text: ""
};

export const findReducers = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
