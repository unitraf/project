import moment from "moment/moment";


export const minute = {
  dossier: "",
  t1:"",
  repertoire: "",
  
  sommier: "",
  nombre: "",
  type: "",
  position: "",
  designation: "",
  us:"",
  regime: "",
  poids:"",
  license:"",
  exo:"",
  
  fob:"0",
  fret:"0",
  assurance:"0",
  autres:"0",
  fvc:"2500",
  ri:"5000",
  fs:"32000",
  af:"0",
  valeur:"0",
  droits:"",
  baseTva: "",
  taxe:"",
  total:"",
  pj: [
    { type: "Bordereau", checked: true },
    { type: "Deprec", checked: true },
    { type: "Exonération", checked: false },
    { type: "License", checked: false },
    { type: "FactCom", checked: true },
    { type: "Colisage", checked: false },
    { type: "Assurance", checked: true },
    { type: "DispBIC", checked: false },
    { type: "Fiche", checked: false },
    { type: "NIF", checked: true },
    { type: "ARF", checked: false },
    { type: "CO", checked: false },
    { type: "FaFret", checked: false },
  ],
};

export const data= {
  
}

export const initData = {
  reference: "",
  numero: "",
  date: moment().format("YYYY-MM-DD"),
  repertoire: "",
  t1: "",
  code:"",
  regime: "",
  typeregime:"",

  burEntree: "",
  provenance: "",
  origine: "",
  burDestination: "",
  mode: "",

  importateur: "",
  destinataire: "",
  type:"",
  colis: "",
  document: "",
  camion: "",
  exo: "eXr01",
  license: "1235",
  sommier: "",

  quantite: "0",
  poids: "0",
  volume: "0",

  position: "",
  tarif:{nts:"", designation:"", us:"", entree:[],sortie:[]},
  designation:"",

  fob: "0",
  fret: "0",
  assurance: "0",
  autres: "0",
  base: "",

  taxes:"",
  valeur: "",
  baseTva: "",
  droits:"",
  declaration:"",
  

  chemise: "2500",
  scanner: "25000",
  ri: "5000",

  documents: [
    { type: "Bordereau", checked: true },
    { type: "Deprec", checked: true },
    { type: "Exonération", checked: false },
    { type: "License", checked: false },
    { type: "FactCom", checked: true },
    { type: "Colisage", checked: false },
    { type: "Assurance", checked: true },
    { type: "DispBIC", checked: false },
    { type: "Fiche", checked: false },
    { type: "NIF", checked: true },
    { type: "ARF", checked: false },
    { type: "CO", checked: false },
    { type: "FaFret", checked: false },
  ],
};

export const listRegime=[{regime:'Importaion', code:"8000"},{regime:'Consommation', code:"4000"},{regime:'Reexportation', code:"3000"},{regime:'Conso Spécial', code:"9000"},{regime:'Autres', code:"0000"}]