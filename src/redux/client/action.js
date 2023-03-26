
import { ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT , } from "./type";

export const addClient = (client) => {

  return {
    type: ADD_CLIENT,
    payload: client,
  };
};

export const deleteClient = (nif) => {

  return {
    type: DELETE_CLIENT,
    payload: nif,
  };
};

export const updateClient = (updateClient) => {
  return {
    type: UPDATE_CLIENT,
    payload: updateClient,
  };
};

