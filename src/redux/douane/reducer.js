import { ADD_BUREAU, DELETE_BUREAU, UPDATE_BUREAU } from "./type";
import data from "../../data/data_.json";
import { v4 as uuid } from "uuid";
const initialState = {
  bureaux: [],
};

const reducer = (
  state = data.bureaux ? data.bureaux : initialState.bureaux,
  action
) => {
  switch (action.type) {
    case ADD_BUREAU:
      console.log("ADD_BUREAU", action.payload);
      let bureaux = [...state,{ ...action.payload, uuid:uuid()}];
      return bureaux;

    case DELETE_BUREAU:
      console.log("DELETE_BUREAU", action.payload);
      let filterBureaux = state.filter(
        (bureau) => action.payload.uuid !== bureau.uuid
      );
      return filterBureaux;

    case UPDATE_BUREAU:
      console.log("UPDATE_BUREAU", action.payload);
      let updateBureau = state.map((bureau) => {
        if (action.payload.uuid === bureau.uuid) {
          return action.payload;
        }
        return bureau;
      });

      return updateBureau;
    
    default:
      return state;
  }
};

export default reducer;
