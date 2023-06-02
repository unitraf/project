
import {v4 as uuid} from 'uuid'
export const t1 = {
  uuid:uuid(),
  burEntree: "",
  burSortie:"",
  numero: "",
  date: "",
  sommier: "",
  provenance: "",
  transport: "",
  quantite: "",
  poids: "",
  position: "",
  designation:""
};

export const listBureau = [
  {bureau:"Niamey Route", code:"NE001"},
  {bureau:"Niamey Aéroport",code:"NE002"},
  {bureau:"Niamey Rive Droite",code:"NE037"},
  {bureau:"Maradi",code:"NE003"},
  {bureau:"Agadez",code:"NE006"},
  {bureau:"Konni",code:"NE025"},
  {bureau:"Gaya",code:"NE29"},
  {bureau:"Torodi",code:"NE030"},
  {bureau:"Tahoua",code:"NE038"},
  {bureau:"Tounga Guiyado",code:"NE060"},
  {bureau:"Spécial Exonération",code:"NE073"},
  {bureau:"Spécial Moyens des Transports",code:"NE056"},
];

export const paysExport = [
  "Bénin",
  "Côte d'ivoire",
  "Ghana",
  "Nigéria",
  "Togo",
];
export const paysImport = ["Niger"];
export const listUnite = ["U", "Kg", "L"];

export const initData = {
  reference: "",
  sommier:"",
  numero: "",
  
  paysExport: "",

  camion: "",
  burEntree: "",
  burDestination: "",

  position: "",
  marchandise: "",

  quantite: "",
  poids: "",
  volume: "",


  dateSommier: "",
};

