import { ADD_TARIF, DELETE_TARIF, UPDATE_TARIF } from "./type";
import data from "../../data/data_.json";
const initialState = {
  tarifs: [],
};

const reducer = (state = data.tarifs ? data.tarifs : initialState.tarifs, action) => {
  // console.log(data.tarifs&&data.tarifs.length);
  switch (action.type) {
    case ADD_TARIF:
      console.log("ADD_TARIF", action.payload);
      let tarifs = [  ...state, action.payload];
      return tarifs;

    case DELETE_TARIF:
      console.log("DELETE_TARIF", action.payload);
      let filterTarifs = state.filter(
        (tarif) => action.payload.nts !== tarif.nts
      );
      return filterTarifs;

    case UPDATE_TARIF:
      console.log("UPDATE_TARIF", action.payload);
      let updateTarif = state.map((tarif) => {
        if (action.payload.nts === tarif.nts) {
          return action.payload;
        }
        return tarif;
      });

      return updateTarif;

    default:
      return state;
  }
};

export default reducer;
