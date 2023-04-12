import { ADD_USER, DELETE_USER, UPDATE_USER } from "./type";
import data from "../../data/data_.json";
const initialState = {
  users: [],
};

const reducer = (
  state = data.users ? data.users : initialState.users,
  action
) => {
  switch (action.type) {
    case ADD_USER:
      console.log("ADD_USER", action.payload);
      let users = [...state, action.payload];
      return users;

    case DELETE_USER:
      console.log("DELETE_USER", action.payload);
      let filterUsers = state.filter(
        (user) => action.payload !== user.id
      );
      return filterUsers;

    case UPDATE_USER:
      console.log("UPDATE_USER", action.payload);
      let updateUser = state.map((user) => {
        if (action.payload.id === user.id) {
          console.log(action.payload);
          return action.payload;
        }
        return user;
      });

      return updateUser;
    
    default:
      return state;
  }
};

export default reducer;
