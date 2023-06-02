import {ADD_DEVIS,UPDATE_DEVIS, DELETE_DEVIS, ADD_PROSPECT, UPDATE_PROSPECT, DELETE_PROSPECT} from "./type";
import { v4 as uuid } from "uuid";
import data from "../../data/data_.json";
const initialState = {
  Prospects: [],
  devis: [],

};

const reducer = (
  state = data.prospections ? data.prospections : initialState,
  action
) => {
  switch (action.type) {

  
    // Prospect
    case ADD_PROSPECT:
      console.log("ADD_PROSPECT", action.payload);
      let prospects = [...state.prospects, {...action.payload, uuid:uuid()}];
      return { ...state, prospects };

    case DELETE_PROSPECT:
      console.log("DELETE_PROSPECT", action.payload);
      let filterProspects = state.prospects.filter(
        (prospect) => action.payload !== prospect.numero
      );
      return { ...state, prospects: filterProspects };

    case UPDATE_PROSPECT:
      console.log("UPDATE_PROSPECT", action.payload);
      let updateProspects = state.prospects.map((prospect) => {
        if (action.payload.numero === prospect.numero) {
          return action.payload;
        }

        return prospect;
      });

      return { ...state, prospects: updateProspects };
    // Devis
    case ADD_DEVIS:
      console.log("ADD_DEVIS", action.payload);
      let devis = [...state.devis || [], action.payload];
      return { ...state, devis };

    case DELETE_DEVIS:
      console.log("DELETE_DEVIS", action.payload);
      let filterDevis = state.devis.filter(
        (devis) => action.payload !== devis.numero
      );
      return { ...state, devis: filterDevis };

    case UPDATE_DEVIS:
      console.log("UPDATE_DEVIS", action.payload);
      let updateDevis = state.devis.map((devis) => {
        if (action.payload.numero === devis.numero) {
          return action.payload;
        }

        return devis;
      });

      return { ...state, devis: updateDevis };

     
    default:
      return state;
  }
};

export default reducer;
