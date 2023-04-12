
import { ADD_RUBRIQUE, UPDATE_RUBRIQUE, DELETE_RUBRIQUE } from "./type";


export const addRubrique = (rubrique) => {

  return {
    type: ADD_RUBRIQUE,
    payload: rubrique,
  };
};


export const deleteRubrique = (code) => {

  return {
    type: DELETE_RUBRIQUE,
    payload: code,
  };
};


export const updateRubrique = (rubrique) => {
  return {
    type: UPDATE_RUBRIQUE,
    payload: rubrique,
  };
};

