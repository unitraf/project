
import { ADD_REGLEMENT, DELETE_REGLEMENT, UPDATE_REGLEMENT } from "./type";
// reglement
export const addReglement = (reglement) => {

  return {
    type: ADD_REGLEMENT,
    payload: reglement,
  };
};

export const deleteReglement = (reference) => {

  return {
    type: DELETE_REGLEMENT,
    payload: reference,
  };
};

export const updateReglement = (updateReglement) => {
  return {
    type: UPDATE_REGLEMENT,
    payload: updateReglement,
  };
};
