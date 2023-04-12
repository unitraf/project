import moment from "moment";
import { annee } from "../../../helpers/render";

export const devis = {
  numero: "",
  date: moment(new Date()).format("YYYY-MM-DD"),
  prospect: { nom: "" },
  client: { nom: "" },

  nim: "IC01000228-1",
  compteur: "XXX/XXX",

  code: "1XXX-2XXX-3XXX-4XXX-5XXX-6XXX",

  seconde: moment(new Date()).format("ss"),
  heure: moment(new Date()).format("hh:mm"),
  dossier: "",
  annee: annee(new Date()),

  echeance: moment(new Date()).format("YYYY-MM-DD"),

  reglement: "Comptant",
  paiement: "chèque",

  valeur: "",
  total: "",
  debours: "",
  interventions: "",
  tva: "",
  net: "",
  status: "En cours",

  prestations: [],
};

export const status = ["En cours", "Envoyer", "Accepter", "Rejetter"]

export const prestation = {
  code: "",
  libelle: "",
  description: "",
  unite: "u",
  quantite: "1",
  valeur: "",
  rubrique: "",
  tva: "",
  montant: "",
  active: "",
};
