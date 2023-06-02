import moment from "moment";
export const checkId = (array = [], field, id) =>
  array.length && id && array.filter((item) => item[field] === id);

export const dossier = {
  id: Date.now(),
  date: moment().format("YYYY-MM-DD"),
  operateur: "admin",
  eta: "",
  etd: "",
  numero: "",
  reference: "N/A",
  expediteur: "N/A",

  depart: "",
  arrivee: "",
  dimensions: { long: "", larg: "", haut: "" },
  mode: "",
  transport: "N/A",
  document: "N/A",
  description: "",
  provenance: "N/A",
  origine: "N/A",

  nombre: 1,

  type: "",
  poids: "",
  volume: "",
  poidsVol: "",
  client: { nom: "" },
  status: "Ouvert",
  cycles: [],
  declaration: [],
  secef: {},
  t1: [],
  minute: [],
  prestations: [],
};

export const cycle = { libelle: "", date: "" };
export const listType = [
  "Colis",
  "Conteneur",
  "Camion",
  "Citerne",
  "Carton",
  "Paquet",
  "Palette",
];
export const listStatus = ["Ouvert", "Expédié", "Transit", "Douane", "Livré"];
export const listMode = [
  "Aérien",
  "Routier",
  "Terrestre",
  "Maritime",
  "Rail",
  "Modal",
  "Multi-Modal",
];
