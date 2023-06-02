import { ADD_JOURNAL, DELETE_JOURNAL, UPDATE_JOURNAL } from "./type";
import data from "../../data/data_.json";
import { v4 as uuid } from "uuid";
const initialState = {
  journaux: [],
};

const reducer = (
  state = data.journaux? data.journaux: initialState.journaux,
  action
) => {
  switch (action.type) {
    case ADD_JOURNAL:
      console.log("ADD_JOURNAL", action.payload);
      let journaux= [...state,{ ...action.payload, uuid:uuid()}];
      return journaux;

    case DELETE_JOURNAL:
      console.log("DELETE_JOURNAL", action.payload);
      let filterJournaux = state.filter(
        (journal) => action.payload.uuid !== journal.uuid
      );
      return filterJournaux;

    case UPDATE_JOURNAL:
      console.log("UPDATE_JOURNAL", action.payload);
      let updateJournaux = state.map((journal) => {
        if (action.payload.uuid === journal.uuid) {
          return action.payload;
        }
        return journal;
      });

      return updateJournaux;
    
    default:
      return state;
  }
};

export default reducer;
