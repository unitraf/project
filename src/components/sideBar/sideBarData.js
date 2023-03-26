import {
  mdiAlphaCBoxOutline,
  mdiAlphaFBoxOutline,
  mdiAlphaSBoxOutline,
  mdiAlphaTBoxOutline,
  mdiAlphaUBoxOutline,
  mdiAlphaVBoxOutline,
  mdiChevronRight,
} from "@mdi/js";

export const menu = [
  {
    name: "Urp",
    route: "/",
    icon: mdiAlphaUBoxOutline,
    childrens: [
      {
        name: "Clients",
        route: "clients",
        icon: mdiAlphaCBoxOutline,
        children: [
          { name: "Réglements", route: "reglements",icon: mdiChevronRight, },
          { name: "Ecarts", route: "ecarts",icon: mdiChevronRight, },
          { name: "Echéanciers", route: "echeanciers",icon: mdiChevronRight, },
          { name: "Relances", route: "relances",icon: mdiChevronRight, },
          { name: "Transferts", route: "transferts",icon: mdiChevronRight, },
          
        ],
      },
      {
        name: "Transit",
        route: "transit",
        icon: mdiAlphaTBoxOutline,
        children: [
          { name: "Dossier's", route: "dossiers",icon: mdiChevronRight, },
          { name: "T1's", route: "t1",icon: mdiChevronRight, },
          { name: "DDU's", route: "ddu",icon: mdiChevronRight, },
          { name: "Minute's", route: "minutes",icon: mdiChevronRight,},
          { name: "Livraison's", route: "livraison",icon: mdiChevronRight,},
         
        ],
      },
      { name: "Tarif", route: "tarifs",icon: mdiAlphaTBoxOutline,},
      {
        name: "Facturation",
        route: "facturation",
        icon: mdiAlphaFBoxOutline,
        children: [
          { name: "Dévis", route: "devis",icon: mdiChevronRight, },
          { name: "Acomptes", route: "acompte",icon: mdiChevronRight, },
          { name: "Factures", route: "factures",icon: mdiChevronRight, },
          { name: "Avoirs", route: "avoirs",icon: mdiChevronRight, },
          { name: "Prestations", route: "prestations",icon: mdiChevronRight, },
        
         
        ],
      },
      {
        name: "Ventes",
        route: "commercial",
        icon: mdiAlphaVBoxOutline,
      },
      {
        name: "Compta",
        route: "compta",
        icon: mdiAlphaCBoxOutline,
      },
      {
        name: "Sauvegarde",
        route: "/sauvegarde",
        icon: mdiAlphaSBoxOutline,
      },
    ],
  },
];
