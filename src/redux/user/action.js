
import { ADD_USER, DELETE_USER, UPDATE_USER , } from "./type";

export const addUser = (user) => {

  return {
    type: ADD_USER,
    payload: user,
  };
};

export const deleteUser = (idUser) => {

  return {
    type: DELETE_USER,
    payload: idUser,
  };
};

export const updateUser = (updateUser) => {
  return {
    type: UPDATE_USER,
    payload: updateUser,
  };
};

