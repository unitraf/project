import {
  mdiAlphaCBoxOutline,
  mdiAlphaDBoxOutline,
  mdiAlphaFBoxOutline,
  mdiAlphaPBoxOutline,
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
      
      {
        name: "Douane",
        route: "douane",
        icon: mdiAlphaDBoxOutline,
        children: [
          { name: "Tarifs SH", route: "tarifs",icon: mdiChevronRight, },
          { name: "T1's", route: "t1",icon: mdiChevronRight, },
          { name: "Déclarations", route: "ddu",icon: mdiChevronRight, },
          { name: "Bureaux", route: "bureaux",icon: mdiChevronRight,},
          { name: "Exonérations", route: "exo",icon: mdiChevronRight,},
         
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
        name: "Comptabilité",
        route: "comptabilite",
        icon: mdiAlphaCBoxOutline,
        children: [
          { name: "Journaux", route: "journaux",icon: mdiChevronRight, },
          { name: "Balance", route: "balance",icon: mdiChevronRight, },
          {
            name: "Grand Livre",
            route: "grandLivre",
            icon: mdiChevronRight,
          },
          {
            name: "Bilan",
            route: "bilan",
            icon: mdiChevronRight,
          },
          {
            name: "Resultat",
            route: "resultat",
            icon: mdiChevronRight,
          },
          

        ],
      },
      
      {
        name: "Parametre",
        route: "parametre",
        icon: mdiAlphaPBoxOutline,
        children: [
          { name: "Sociéte", route: "societe",icon: mdiChevronRight, },
          { name: "Utilisateurs", route: "users",icon: mdiChevronRight, },
          {
            name: "Sauvegarde",
            route: "sauvegarde",
            icon: mdiChevronRight,
          },

        ],
      },
    ],
  },
];
