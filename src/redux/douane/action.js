
import { ADD_BUREAU, DELETE_BUREAU, UPDATE_BUREAU  } from "./type";
// bureau
export const addBureau = (bureau) => {

  return {
    type: ADD_BUREAU,
    payload: bureau,
  };
};

export const deleteBureau = (code) => {

  return {
    type: DELETE_BUREAU,
    payload: code,
  };
};

export const updateBureau = (updateBureau) => {
  return {
    type: UPDATE_BUREAU,
    payload: updateBureau,
  };
};
