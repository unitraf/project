// import Firebase from "../firebase";
import { ADD_DOSSIER, DELETE_DOSSIER, UPDATE_DOSSIER } from "./type";
// const fb = new Firebase();

export const addDossier = (Dossier) => {
  // fb.addDossier(Dossier.numero, Dossier);
  return {
    type: ADD_DOSSIER,
    payload: Dossier,
  };
};

export const deleteDossier = (Dossier) => {
  // fb.deleteDOSSIER(DossierId);
  return {
    type: DELETE_DOSSIER,
    payload: Dossier,
  };
};

export const updateDossier = (Dossier) => {
  // fb.addDossier(updateDossier.numero, updateDossier);
  console.log(Dossier);
  return {
    type: UPDATE_DOSSIER,
    payload: Dossier,
  };
};
