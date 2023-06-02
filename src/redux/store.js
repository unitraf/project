import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import dossierReducer from "./dossier/reducer";
import clientReducer from "./client/reducer";
import articleReducer from "./article/reducer";
import tarifReducer from "./tarif/reducer";
import userReducer from "./user/reducer";
import complementReducer from "./complement/reducer";
import societeReducer from "./societe/reducer";
import prospectionReducer from "./prospection/reducer";
import reglementReducer from "./reglement/reducer";
import bureauxReducer from "./douane/reducer";
import exosReducer from "./exo/reducer";
import logsReducer from "./log/reducer";
import journauxReducer from "./journaux/reducer";

const rootReducer = combineReducers({
    dossiers: dossierReducer,
    clients:clientReducer, 
    articles:articleReducer, 
    tarifs:tarifReducer,
    users:userReducer,
    complements:complementReducer,
    societe:societeReducer, 
    prospections:prospectionReducer,
    reglements:reglementReducer,
    bureaux:bureauxReducer,
    exos:exosReducer,
    logs:logsReducer,
    journaux:journauxReducer
  });
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  export default store;