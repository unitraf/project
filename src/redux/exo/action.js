
import { ADD_EXO, DELETE_EXO, UPDATE_EXO  } from "./type";

export const addExo = (exo) => {

  return {
    type: ADD_EXO,
    payload: exo,
  }
};

export const deleteExo = (exo) => {

  return {
    type: DELETE_EXO,
    payload: exo,
  };
};
;

export const updateExo = (exo) => {
  return {
    type: UPDATE_EXO,
    payload: exo,
  };
};


