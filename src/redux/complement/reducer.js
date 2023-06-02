import {

  UPDATE_RUBRIQUE,
  DELETE_RUBRIQUE,
  ADD_RUBRIQUE,
} from "./type";
import data from "../../data/data_.json";
import { v4 as uuid } from "uuid";
const initialState = {
  rubriques: [],
  autres: [],
  douanes: [],
};

const reducer = (
  state = data.complements ? data.complements : initialState,
  action
) => {
  switch (action.type) {
    // Rubrique
    case ADD_RUBRIQUE:
      console.log("ADD_RUBRIQUE", action.payload);
      let rubriques = [...state.rubriques, {...action.payload, uuid:uuid()}];
      return { ...state, rubriques };

    case DELETE_RUBRIQUE:
      console.log("DELETE_RUBRIQUE", action.payload);
      let filterRubriques = state.rubriques.filter(
        (rubrique) => action.payload !== rubrique.code
      );
      return { ...state, rubriques: filterRubriques };

    case UPDATE_RUBRIQUE:
      console.log("UPDATE_RUBRIQUE", action.payload);
      let updateRubriques = state.rubriques.map((rubrique) => {
        if (action.payload.code === rubrique.code) {
          return action.payload;
        }

        return rubrique;
      });

      return { ...state, rubriques: updateRubriques };

    default:
      return state;
  }
};

export default reducer;
