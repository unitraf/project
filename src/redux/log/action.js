import { ADD_LOG, DELETE_ALL_LOG } from "./type";

export const addLog = (log) => {
  return {
    type: ADD_LOG,
    payload: log,
  };
};

export const deleteAllLog = () => {
  return {
    type: DELETE_ALL_LOG,
  };
};


export const neWLog =(log)=>{

  return dispatch=>{
      dispatch(addLog({log, horodatage: new Date(),}))
  }


}