import {

  UPDATE_BANQUE,
  DELETE_BANQUE,
  ADD_BANQUE,
  ADD_SOCIETE,
  ADD_REGLEMENT,
  UPDATE_EXERCICE,
  ADD_TYPE,
  DELETE_TYPE,
  UPDATE_TYPE,
} from "./type";
import data from "../../data/data_.json";
const initialState = {
  infos: {},
  banques: [],
  reglements: [],
  exercice: {},
  typeClients:[],
  license:{}
};

const reducer = (
  state = data.societe ? data.societe : initialState,
  action
) => {
  switch (action.type) {

    // Societe
    case ADD_SOCIETE:
      console.log("ADD_SOCIETE", action.payload);

      return { ...state, infos: action.payload };

    // Modes de reglement
    case ADD_REGLEMENT:
      console.log("ADD_REGLEMENT", action.payload);
      let reglements = [...state.reglements, action.payload];
      return { ...state, reglements };

    // Banque
    case ADD_BANQUE:
      console.log("ADD_BANQUE", action.payload);
      let banques = [...state.banques, action.payload];
      return { ...state, banques };

    case DELETE_BANQUE:
      console.log("DELETE_BANQUE", action.payload);
      let filterBanques = state.banques.filter(
        (banque) => action.payload !== banque.code
      );
      return { ...state, banques: filterBanques };

    case UPDATE_BANQUE:
      console.log("UPDATE_BANQUE", action.payload);
      let updateBanques = state.banques.map((banque) => {
        if (action.payload.code === banque.code) {
          return action.payload;
        }

        return banque;
      });

      return { ...state, banques: updateBanques };
    // Type Clients
    case ADD_TYPE:
      console.log("ADD_TYPE", action.payload);
      let typeClients = [...state.typeClients || [], action.payload];
      return { ...state, typeClients };

    case DELETE_TYPE:
      console.log("DELETE_TYPE", action.payload);
      let filterTypes = state.typeClients.filter(
        (type) => action.payload !== type.code
      );
      return { ...state, typeClients: filterTypes };

    case UPDATE_TYPE:
      console.log("UPDATE_TYPE", action.payload);
      let updateTypes = state.typeClients.map((type) => {
        if (action.payload.code === type.code) {
          return action.payload;
        }

        return type;
      });

      return { ...state, typeClients: updateTypes };

      // Exercice
    case UPDATE_EXERCICE:
      console.log("UPDATE_EXERCICE", action.payload);

      return { ...state, exercice: action.payload };

    default:
      return state;
  }
};

export default reducer;
