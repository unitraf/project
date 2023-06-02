export const societe = {
  nom: "unitraf",
  agrement: "NE85364037",
  rccm: "RCCM-NI-NIM-2006-B-293",
  nif: "1236",
  bp: "11125",
  tel1: "20 73 44 80",
  tel2: "20 73 55 34",
  fax: "20 73 42 90",
  adresse1: "Quartier Terminus",
  adresse2: "Niamey/Niger",
  email: "unitraftransit@gmail.com",
  banque: { nom: "", rib: "" },
};

export const banque = {
  nom: "",
  rib: "",
  compte: "512",
};

export const paiement = [
  { code: "car", libelle: "Carte bancaire" },
  { code: "chq", libelle: "Chèque" },
  { code: "esp", libelle: "Espèces" },
  { code: "vir ", libelle: "Virement" },
  { code: "crd ", libelle: "Crédit" },
];

export const reglement = {
  libelle: "",

  type: "Comptant",
  paiement: "Chèque",
  jours: "30",
};

export const type = {
  mode: {},
  designation: "",
  tva: "19",
  acompte: "50",
  remise: "0",
};

export const exercice = { courant: "2023", actuel: "2023" };
export const license = { code: "", timeStamp: "", expiration: "", UId: "" };
