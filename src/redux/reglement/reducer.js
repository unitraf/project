import { ADD_REGLEMENT, DELETE_REGLEMENT, UPDATE_REGLEMENT } from "./type";
import data from "../../data/data_.json";
import { v4 as uuid } from "uuid";
const initialState = {
  reglements: [],
};

const reducer = (
  state = data.reglements ? data.reglements : initialState.reglements,
  action
) => {
  switch (action.type) {
    case ADD_REGLEMENT:
      console.log("ADD_REGLEMENT", action.payload);
      let reglements = [...state, { ...action.payload, uuid: uuid() }];
      return reglements;

    case DELETE_REGLEMENT:
      console.log("DELETE_REGLEMENT", action.payload);
      let filterReglement = state.filter(
        (reglement) => action.payload !== reglement.reference
      );
      return filterReglement;

    case UPDATE_REGLEMENT:
      console.log("UPDATE_REGLEMENT", action.payload);
      let updateReglement = state.map((reglement) => {
        if (action.payload.reference === reglement.reference) {
          return action.payload;
        }
        return reglement;
      });

      return updateReglement;

    default:
      return state;
  }
};

export default reducer;
