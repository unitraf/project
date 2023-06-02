import { ADD_EXO, DELETE_EXO, UPDATE_EXO} from "./type";
import data from "../../data/data_.json";
import { v4 as uuid } from "uuid";
const initialState = {
  exos: [],
};

const reducer = (
  state = data.exos ? data.exos : initialState.exos,
  action
) => {
  switch (action.type) {
    // Exo
    case ADD_EXO:
      console.log("ADD_EXO", action.payload);
      let exos = [...state, {...action.payload, uuid:uuid()}];
      return exos;

    case DELETE_EXO:
      console.log("DELETE_EXO", action.payload);
      let filterExos = state.filter(
        (exo) => action.payload.uuid !== exo.uuid
      );
      return filterExos;

    case UPDATE_EXO:
      console.log("UPDATE_EXO", action.payload);
      let updateExo = state.map((exo) => {
        if (action.payload.uuid === exo.uuid) {
      
          return action.payload;
        }
     
        return exo;
      });

      return updateExo;
     
    
    default:
      return state;
  }
};

export default reducer;
