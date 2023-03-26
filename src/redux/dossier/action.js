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

export const deleteDossier = (DossierId) => {
  // fb.deleteDOSSIER(DossierId);
  return {
    type: DELETE_DOSSIER,
    payload: DossierId,
  };
};

export const updateDossier = (updateDossier) => {
  // fb.addDossier(updateDossier.numero, updateDossier);
  console.log(updateDossier);
  return {
    type: UPDATE_DOSSIER,
    payload: updateDossier,
  };
};
