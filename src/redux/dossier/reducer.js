import { ADD_DOSSIER, DELETE_DOSSIER, UPDATE_DOSSIER } from "./type";
import data from "../../data/data_.json";
import { v4 as uuid } from "uuid";
const initialState = {
  dossiers: [],
};

const reducer = (state =data.dossiers?data.dossiers: initialState.dossiers, action) => {
  // console.log(data.dossiers&&data.dossiers.length);
  switch (action.type) {
    case ADD_DOSSIER:
      console.log("ADD_DOSSIER", action.payload);
      let dossiers = [...state, {...action.payload, uuid:uuid()}];
      localStorage.setItem("dossiers",JSON.stringify(dossiers) )
      return dossiers;

    case DELETE_DOSSIER:
      console.log("DELETE_DOSSIER", action.payload);
      let filterDossiers = state.filter(
        (dossier) => action.payload !== dossier.numero
      );
      localStorage.setItem("dossiers",JSON.stringify(filterDossiers) )
      return filterDossiers;

    case UPDATE_DOSSIER:
      console.log("UPDATE_DOSSIER", action.payload);
      let updateDossier = state.map((dossier) => {
        if (action.payload.numero === dossier.numero) {
          return action.payload;
        }
        return dossier;
      });
      localStorage.setItem("dossiers",JSON.stringify(updateDossier) )
      return updateDossier;

    default:
      return state;
  }
};

export default reducer;
