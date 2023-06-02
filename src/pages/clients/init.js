import moment from "moment";
import { v4 as uuid } from "uuid";
export const type = {
  code: uuid(),
  libelle: "",
  designation: "",
  dispense: false,
  tva: "19",
  acompte: "50",
  remise: "0",
  mode:""
};
export const client = {
  uuid: uuid(),

  // 1.	Informations de base

  nom: "",
  tel: "",
  bp: "",
  // 4.	Informations de facturation
  nif: "",
  adresse: "NIAMEY/NIGER",
  email: "",
  responsable: {nom:""},
  // 2.	Informations de contact
  contacts: [],
  // 5.	Informations de livraison
  livraisons: [],
  // 3.	Historique de commande (dossier)
  commandes: [],
  // 7.	Historique de factures (dossier)
  factures: [],
  // 10.	Historique de paiement (dossier)
  paiements: [],

  // 9.	Informations comptable
  compte: "411",
  solde: "",
  exo: "",
  credit: "",
  limite: "",
  reglement: {libelle:""},
  //8.	Notes internes
  type:{designation: ""},
  notes:
    "Informations spécifiques sur la relation client, les préférences de communication, facturation ou les informations marketing.",
  // 12.	Statistiques
  statistiques: [],

  // 13-Informations sur les retours

  retours: [],
};

export const livraison = {
  livreur: "",
  adresse: "",
  instructions: "",
};
export const contact = {
  prenom: "",
  fonction: "",
  tel: "",
  email: "",
};

// commandes dossiers
export const historique = {
  precedent: [],
  totaux: "",
  dernier: "",
};

export const paiement = {
  reference: "",
  date: moment(new Date()).format("YYYY-MM-DD"),
  montant: "",
  paye: "",
  restant: "",
  // (en attente, payé, en retard)
  statut: "payé",
  moyen: "",
  condition: "",
};
export const statistique = { ca: "", nombre: "", satisfaction: "" };
// 5.	Informations sur les retours et les remboursements :
export const retour = {
  // (en attente, accepté, refusé)
  statut: "",
  raison: "",
  date: moment(new Date()).format("YYYY-MM-DD"),
  montant: "",
};
// •	Statut du retour (en attente, accepté, refusé)
// •	Raison du retour
// •	Date de retour
// •	Montant remboursé (le cas échéant)
