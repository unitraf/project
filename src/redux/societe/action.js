
import { ADD_SOCIETE, ADD_REGLEMENT, ADD_BANQUE, UPDATE_BANQUE, DELETE_BANQUE, ADD_EXERCICE, DELETE_EXERCICE, UPDATE_EXERCICE, ADD_TYPE, DELETE_TYPE, UPDATE_TYPE } from "./type";

// SOCIETE
export const addSociete = (societe) => {

  return {
    type: ADD_SOCIETE,
    payload: societe,
  };
};
// MODE
export const addReglement = (reglement) => {

  return {
    type: ADD_REGLEMENT,
    payload: reglement,
  };
};

// BANQUE
export const addBanque = (banque) => {

  return {
    type: ADD_BANQUE,
    payload: banque,
  };
};


export const deleteBanque = (code) => {

  return {
    type: DELETE_BANQUE,
    payload: code,
  };
};


export const updateBanque = (banque) => {
  return {
    type: UPDATE_BANQUE,
    payload: banque,
  };
};
// EXERCICE
export const addExercice = (exercice) => {

  return {
    type: ADD_EXERCICE,
    payload: exercice,
  };
};



export const updateExercice = (exercice) => {
  return {
    type: UPDATE_EXERCICE,
    payload: exercice,
  };
};

// TYPE client
export const addType = (type) => {

  return {
    type: ADD_TYPE,
    payload: type,
  };
};

export const deleteType = (code) => {

  return {
    type: DELETE_TYPE,
    payload: code,
  };
};

export const updateType = (type) => {
  return {
    type: UPDATE_TYPE,
    payload: type,
  };
};

