
import { ADD_JOURNAL, DELETE_JOURNAL, UPDATE_JOURNAL } from "./type";
// journal
export const addJournal = (journal) => {

  return {
    type: ADD_JOURNAL,
    payload: journal,
  };
};

export const deleteJournal = (journal) => {

  return {
    type: DELETE_JOURNAL,
    payload: journal,
  };
};

export const journal = (journal) => {
  return {
    type: UPDATE_JOURNAL,
    payload: journal,
  };
};
