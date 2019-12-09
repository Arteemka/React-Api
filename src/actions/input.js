export const CHANGE_TEXT = "CHANGE_TEXT";

export const setFieldText = text => {
  return {
    type: CHANGE_TEXT,
    payload: text
  };
};
