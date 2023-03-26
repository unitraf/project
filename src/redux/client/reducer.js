import { ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT } from "./type";
import data from "../../data/data_.json";
const initialState = {
  clients: [],
};

const reducer = (
  state = data.clients ? data.clients : initialState.clients,
  action
) => {
  switch (action.type) {
    case ADD_CLIENT:
      console.log("ADD_CLIENT", action.payload);
      let clients = [...state, action.payload];
      return clients;

    case DELETE_CLIENT:
      console.log("DELETE_CLIENT", action.payload);
      let filterClients = state.filter(
        (client) => action.payload !== client.nif
      );
      return filterClients;

    case UPDATE_CLIENT:
      console.log("UPDATE_CLIENT", action.payload);
      let updateClient = state.map((client) => {
        if (action.payload.nif === client.nif) {
          return action.payload;
        }
        return client;
      });

      return updateClient;
    
    default:
      return state;
  }
};

export default reducer;
