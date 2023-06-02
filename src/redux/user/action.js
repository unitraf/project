
import { ADD_USER, DELETE_USER, UPDATE_USER , } from "./type";

export const addUser = (user) => {

  return {
    type: ADD_USER,
    payload: user,
  };
};

export const deleteUser = (user) => {

  return {
    type: DELETE_USER,
    payload: user,
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

