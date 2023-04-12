
import {ADD_DEVIS,UPDATE_DEVIS, DELETE_DEVIS, ADD_PROSPECT, UPDATE_PROSPECT, DELETE_PROSPECT} from "./type";



// Prospect
export const addProspect = (prospect) => {

  return {
    type: ADD_PROSPECT,
    payload: prospect,
  };
};


export const deleteProspect = (numero) => {

  return {
    type: DELETE_PROSPECT,
    payload: numero,
  };
};


export const updateProspect = (prospect) => {
  return {
    type: UPDATE_PROSPECT,
    payload: prospect,
  };
};

// Devis
export const addDevis = (devis) => {

  return {
    type: ADD_DEVIS,
    payload: devis,
  };
};


export const deleteDevis = (numero) => {

  return {
    type: DELETE_DEVIS,
    payload: numero,
  };
};


export const updateDevis = (devis) => {
  return {
    type: UPDATE_DEVIS,
    payload: devis,
  };
};