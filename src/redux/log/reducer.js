import { ADD_LOG, DELETE_ALL_LOG } from "./type";
import data from "../../data/data_.json";
import { v4 as uuid } from "uuid";
const initialState = {
  logs: [],
};

const reducer = (state = data.logs ? data.logs : initialState.logs, action) => {
  switch (action.type) {
    // Article
    case ADD_LOG:
      console.log("ADD_LOG", action.payload);
      let logs = [...state, { ...action.payload, uuid: uuid() }];
      return logs;

    case DELETE_ALL_LOG:
      console.log("DELETE_ALL_LOG", state);

      return [];

    default:
      return state;
  }
};

export default reducer;
