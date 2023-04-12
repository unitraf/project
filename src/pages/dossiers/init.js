import moment from "moment";

export const dossier= {
    id: Date.now(),
     date: moment().format("YYYY-MM-DD"),
     operateur:"admin",
     eta:"",
     etd:"",
     numero: "",
     reference: "N/A",
     expediteur: "N/A",
     
     
     depart: "",
     arrivee: "",
     dimensions:{long:"", larg:"", haut:""},
     mode:"",
     transport:"N/A",
     document: "N/A",
     description: "",
     provenance:"N/A",
     origine: "N/A",
     provenance: "N/A",
     nombre:1,
    
     type:"",
     poids: "",
     volume: "",
     poidsVol:"",
     client:{nom:""},
     status: "Ouvert",
     interventions: [],
     debours: [],
     declarations: [],
     autres: [],
     secef:{},
     t1:[],
     minutes:[],
   };
   export const listType = [
    "Colis",
    "Conteneur",
    "Camion",
    "Citerne",
    "Carton",
    "Paquet",
    "Palette",
    
  ];
  export const listStatus = [
    "Ouvert",
    "Expédié",
    "Transit",
    "Douane",
    "Livré",
  ];
  export const listMode = [
    "Aérien",
    "Routier",
    "Terrestre",
    "Maritime",
    "Rail",
    "Modal",
    "Multi-Modal",
  ];