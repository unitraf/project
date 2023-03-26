
import { ADD_TARIF, DELETE_TARIF, UPDATE_TARIF } from "./type";


export const addTarif = (tarif) => {

  return {
    type: ADD_TARIF,
    payload: tarif,
  };
};

export const deleteTarif = (tarif) => {
 
  return {
    type: DELETE_TARIF,
    payload: tarif,
  };
};

export const updateTarif = (tarif) => {
  
  return {
    type: UPDATE_TARIF,
    payload: tarif,
  };
};
