import { createHashRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/root/ErrorPage";
import Transit from "../pages/transit/Transit";
import Commercial from "../pages/commercial/Commercial";
import DashBoard from "../pages/dashBoard/DashBoard";
import Clients from "../pages/clients/Clients";
import EditClient, {
  action as editAction,
  destroyAction,
} from "../pages/clients/EditClient";
import NewClient, { newClientAction } from "../pages/clients/NewClient";
import Dossiers from "../pages/dossiers/Dossiers";
import Minutes from "../pages/minutes/Minutes";
import NewDossier, { newDossierAction } from "../pages/dossiers/NewDossier";
import EditDossier, {
  updateDossierAction,
  destroyDossierAction,
} from "../pages/dossiers/EditDossier";

import NewMinute, { NewMinuteAction } from "../pages/minutes/NewMinute";
import EditMinute, {
  destroyMinuteAction,
  updateMinuteAction,
} from "../pages/minutes/EditMinute";

import BL from "../pages/bl/BL";
import NewBL, { NewBLAction } from "../pages/bl/NewBL";
import EditBL, { destroyBLAction, updateBLAction } from "../pages/bl/EditBL";
import PrintBL from "../pages/bl/PrintBL";
import Facturation from "../pages/facturation/Facturation";
import Factures from "../pages/facturation/facture/Factures";
import Avoirs from "../pages/facturation/avoir/Avoirs";
import PrintFacture from "../pages/facturation/facture/PrintFacture";
import Articles from "../pages/article/Articles";
import NewArticle, { newArticleAction } from "../pages/article/NewArticle";
import EditArticle, {
  destroyArticleAction,
  editArticleAction,
} from "../pages/article/EditArticle";
import NewPrestation, {
  newPrestationAction,
} from "../pages/prestation/NewPrestation";
import NewFacture, {
  newFactureAction,
} from "../pages/facturation/facture/NewFacture";
import Login from "../pages/login/Login";
import Users from "../pages/parametres/user/Users";
import Societe from "../pages/parametres/societe/Societe";
import Parametre from "../pages/parametres/Parametre";
import Comptabilte from "../pages/compta/Comptabilte";
import Journaux from "../pages/compta/journaux/Journaux";
import Balance from "../pages/compta/balance/Balance";
import GrandLivre from "../pages/compta/grandLivre/GrandLivre";
import Bilan from "../pages/compta/bilan/Bilan";
import Resultat from "../pages/compta/resultat/Resultat";
import Sauvegarde from "../pages/parametres/Sauvegarde";
import NewRubrique from "../pages/article/NewRubrique";

import Douane from "../pages/douane/Douane";
import Bureaux from "../pages/douane/bureaux/Bureaux";
import Exos from "../pages/douane/exo/Exos";
import NewAvoir, { newAvoirAction } from "../pages/facturation/avoir/NewAvoir";
import DestroyForm from "../pages/facturation/avoir/DestroyForm";
import Devis from "../pages/facturation/devis/Devis";
import NewDevis, { newDevisAction } from "../pages/facturation/devis/NewDevis";
import Acompte from "../pages/facturation/acompte/Acompte";
import NewAcompte, {
  newAcompteAction,
} from "../pages/facturation/acompte/NewAcompte";
import ProfileClient from "../pages/clients/ProfileClient";
import TypeClient from "../pages/clients/TypeClient";
import Paiements from "../pages/clients/reglement/Paiements";
import NewExo from "../pages/douane/exo/NewExo";
import NewBureau from "../pages/douane/bureaux/NewBureau";
import Dossier from "../pages/dossiers/Dossier";
import EditTarif from "../pages/douane/tarifs/EditTarif";
import NewTarif, { newTarifAction } from "../pages/douane/tarifs/NewTarif";
import Tarifs from "../pages/douane/tarifs/Tarifs";
import Ddu from "../pages/douane/ddu/Ddu";
import NewDdu, { NewDduAction } from "../pages/douane/ddu/NewDdu";
import EditDdu, {
  destroyDduAction,
  updateDduAction,
} from "../pages/douane/ddu/EditDdu";
import NewT1, { NewT1Action } from "../pages/douane/t1/NewT1";
import EditT1, {
  destroyT1Action,
  updateT1Action,
} from "../pages/douane/t1/EditT1";
import T1 from "../pages/douane/t1/T1";
import Bureau from "../pages/douane/bureaux/Bureau";
import Exo from "../pages/douane/exo/Exo";
import ReglementFiche from "../pages/clients/reglement/ReglementFiche";
import NewReglements from "../pages/clients/reglement/NewReglements";
import EnteteForm from "../pages/parametres/societe/entete/EnteteForm";
import BanqueForm from "../pages/parametres/societe/banque/banqueForm";
import ModeForm from "../pages/parametres/societe/reglement/ModeForm";
import TypeForm from "../pages/parametres/societe/clientele/TypeForm";
import UserForm from "../pages/parametres/user/UserForm";
import Profile from "../pages/parametres/user/Profile";
import Ecarts from "../pages/clients/ecart/Ecarts";
import Echeanciers from "../pages/clients/echeancier/Echeanciers";
import Relances from "../pages/clients/relance/Relances";
import Transferts from "../pages/clients/transfert/Transferts";
import Archives from "../pages/transit/archive/Archives";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      // Index DashBoard
      { index: true, element: <DashBoard /> },
      // login
      {
        path: "/login",
        element: <Login />,
      },
      // Clients
      {
        path: "clients",
        element: <Clients />,
      },
      {
        path: "clients/profile/:id",
        element: <ProfileClient />,
      },
      {
        path: "clients/paiements",
        element: <Paiements />,
      },
      {
        path: "clients/ecarts",
        element: <Ecarts />,
      },
      {
        path: "clients/echeanciers",
        element: <Echeanciers />,
      },
      {
        path: "clients/relances",
        element: <Relances />,
      },
      {
        path: "clients/transferts",
        element: <Transferts />,
      },
      {
        path: "clients/paiements/newReglements",
        element: <NewReglements />,
      },
      {
        path: "clients/paiements/newReglements/:updateId",
        element: <NewReglements />,
      },
      {
        path: "clients/paiements/newReglements/:destroyId/destroy",
        element: <NewReglements />,
      },
      {
        path: "clients/paiements/reglement/:uuid",
        element: <ReglementFiche />,
      },
      {
        path: "clients/newClient",
        element: <NewClient />,
        action: newClientAction,
      },

      {
        path: "clients/:updateId",
        element: <EditClient />,
        action: editAction,
      },
      {
        path: "clients/:destroyId/destroy",
        element: <EditClient />,
        action: destroyAction,
      },
      // Type client
      {
        path: "clients/type",
        element: <TypeClient />,
      },
      // Douane
      {
        path: "douane",
        element: <Douane />,
      },
      {
        path: "douane/tarifs",
        element: <Tarifs />,
      },
      {
        path: "douane/t1",
        element: <T1 />,
      },
      {
        path: "douane/ddu",
        element: <Ddu />,
      },
      // Bureaux
      {
        path: "douane/bureaux",
        element: <Bureaux />,
      },
      {
        path: "douane/bureaux/bureau/:uuid",
        element: <Bureau />,
      },
      {
        path: "douane/newBureau",
        element: <NewBureau />,
      },
      {
        path: "douane/bureaux/newBureau",
        element: <NewBureau />,
      },
      {
        path: "douane/bureaux/newBureau/:updateId",
        element: <NewBureau />,
      },
      {
        path: "douane/bureaux/newBureau/:destroyId/destroy",
        element: <NewBureau />,
      },

      // Exos
      {
        path: "douane/exo",
        element: <Exos />,
      },
      {
        path: "douane/exo/exo/:uuid",
        element: <Exo />,
      },
      {
        path: "douane/exo/newExo",
        element: <NewExo />,
      },
      {
        path: "douane/exo/newExo/:updateId",
        element: <NewExo />,
      },
      {
        path: "douane/exo/newExo/:destroyId/destroy",
        element: <NewExo />,
      },
      // Transit
      {
        path: "transit",
        element: <Transit />,
      },
      // Archives
      {
        path: "transit/archives",
        element: <Archives />,
      },
      // Dossiers
      {
        path: "transit/dossiers",
        element: <Dossiers />,
      },
      {
        path: "transit/dossier/:uuid",
        element: <Dossier />,
      },
      {
        path: "transit/dossiers/newDossier",
        element: <NewDossier />,
        action: newDossierAction,
      },
      {
        path: "transit/dossiers/:updateId",
        element: <EditDossier />,
        action: updateDossierAction,
      },
      {
        path: "transit/dossiers/:destroyId/destroy",
        element: <EditDossier />,
        action: destroyDossierAction,
      },
      // T1
      {
        path: "douane/t1",
        element: <T1 />,
      },
      {
        path: "douane/t1/newT1",
        element: <NewT1 />,
        action: NewT1Action,
      },
      {
        path: "douane/t1/newT1/:dossierId",
        element: <NewT1 />,
        action: NewT1Action,
      },
      {
        path: "douane/t1/:updateId",
        element: <EditT1 />,
        action: updateT1Action,
      },
      {
        path: "douane/t1/:destroyId/destroy",
        element: <EditT1 />,
        action: destroyT1Action,
      },
      // DDu
      {
        path: "douane/ddu",
        element: <Ddu />,
      },
      {
        path: "douane/ddu/newDdu",
        element: <NewDdu />,
        action: NewDduAction,
      },
      {
        path: "douane/ddu/newDdu/:dossierId",
        element: <NewDdu />,
        action: NewDduAction,
      },
      {
        path: "douane/ddu/:updateId",
        element: <EditDdu />,
        action: updateDduAction,
      },
      {
        path: "douane/ddu/:destroyId/destroy",
        element: <EditDdu />,
        action: destroyDduAction,
      },
      // Bon de livraison
      {
        path: "transit/ddu/:updateId/bl",
        element: <BL />,
      },
      // Minutes
      {
        path: "transit/minutes",
        element: <Minutes />,
      },
      {
        path: "transit/minutes/NewMinute",
        element: <NewMinute />,
        action: NewMinuteAction,
      },
      {
        path: "transit/minutes/NewMinute/:dossierId",
        element: <NewMinute />,
        action: NewMinuteAction,
      },
      {
        path: "transit/minutes/:updateId",
        element: <EditMinute />,
        action: updateMinuteAction,
      },
      {
        path: "transit/minutes/:destroyId/destroy",
        element: <EditMinute />,
        action: destroyMinuteAction,
      },
      // Tarifs
      {
        path: "tarifs",
        element: <Tarifs />,
      },
      {
        path: "douane/tarifs/newTarif",
        element: <NewTarif />,
        action: newTarifAction,
      },
      {
        path: "douane/tarifs/:updateId",
        element: <EditTarif />,
        action: newTarifAction,
      },
      {
        path: "douane/tarifs/:destroyId/destroy",
        element: <EditTarif />,
        action: newTarifAction,
      },
      // bordereau de livraison
      {
        path: "transit/livraison",
        element: <BL />,
      },
      {
        path: "transit/livraison/newBl",
        element: <NewBL />,
        action: NewBLAction,
      },
      {
        path: "transit/livraison/:blId/print",
        element: <PrintBL />,
      },
      {
        path: "transit/livraison/:destroyId/destroy",
        element: <EditBL />,
        action: destroyBLAction,
      },
      {
        path: "transit/livraison/:updateId",
        element: <EditBL />,
        action: updateBLAction,
      },
      // Facturation
      {
        path: "facturation",
        element: <Facturation />,
      },
      {
        path: "facturation/factures",
        element: <Factures />,
      },
      {
        path: "facturation/factures/newFacture",
        element: <NewFacture />,
        action: newFactureAction,
      },
      {
        path: "facturation/factures/print",
        element: <PrintFacture />,
      },
      // Avoirs
      {
        path: "facturation/avoirs",
        element: <Avoirs />,
      },
      {
        path: "facturation/avoirs/newAvoir",
        element: <NewAvoir />,
        action: newAvoirAction,
      },
      {
        path: "facturation/avoirs/newAvoir/destroy",
        element: <DestroyForm />,
      },
      // Devis
      {
        path: "facturation/devis",
        element: <Devis />,
      },
      {
        path: "facturation/devis/newDevis",
        element: <NewDevis />,
        action: newDevisAction,
      },
      // Acompte
      {
        path: "facturation/acompte",
        element: <Acompte />,
      },
      {
        path: "facturation/acompte/newAcompte",
        element: <NewAcompte />,
        action: newAcompteAction,
      },
      // Prestation
      {
        path: "facturation/devis/newPrestation/:dossierId",
        element: <NewPrestation />,
        action: newPrestationAction,
      },
      // Rubrique
      {
        path: "facturation/prestations/newRubrique",
        element: <NewRubrique />,
        // action:newArticleAction
      },
      {
        path: "facturation/prestations/newRubrique/:updateId",
        element: <NewRubrique />,
        // action:newArticleAction
      },
      {
        path: "facturation/prestations/newRubrique/:destroyId/destroy",
        element: <NewRubrique />,
        // action:newArticleAction
      },

      // Articles
      {
        path: "facturation/prestations",
        element: <Articles />,
      },

      {
        path: "facturation/prestations/newArticle",
        element: <NewArticle />,
        action: newArticleAction,
      },
      {
        path: "facturation/prestations/:updateId",
        element: <EditArticle />,
        action: editArticleAction,
      },
      {
        path: "facturation/prestations/:destroyId/destroy",
        element: <EditArticle />,
        action: destroyArticleAction,
      },
      // Commercial
      {
        path: "commercial",
        element: <Commercial />,
      },
      // comptabilite
      {
        path: "comptabilite",
        element: <Comptabilte />,
        children: [
          {
            path: "journaux",
            element: <Journaux />,
          },
          {
            path: "balance",
            element: <Balance />,
          },
          {
            path: "grandLivre",
            element: <GrandLivre />,
          },
          {
            path: "bilan",
            element: <Bilan />,
          },
          {
            path: "resultat",
            element: <Resultat />,
          },
        ],
      },
      // Parametres
      {
        path: "parametre",
        element: <Parametre />,
        children: [
          //  Societe
          {
            path: "societe",
            element: <Societe />,
          },
          {
            path: "societe/entete",
            element: <EnteteForm />,
          },

          // Banque
          {
            path: "societe/newBanque",
            element: <BanqueForm />,
          },
          {
            path: "societe/newBanque/:updateId",
            element: <BanqueForm />,
          },
          {
            path: "societe/newBanque/:destroyId/destroy",
            element: <BanqueForm />,
          },
          // Mode de Reglement
          {
            path: "societe/newReglement",
            element: <ModeForm />,
          },
          {
            path: "societe/newReglement/:updateId",
            element: <ModeForm />,
          },
          {
            path: "societe/newReglement/:destroyId/destroy",
            element: <ModeForm />,
          },
          // Clientèle
          {
            path: "societe/newType",
            element: <TypeForm />,
          },
          {
            path: "societe/newType/:updateId",
            element: <TypeForm />,
          },
          {
            path: "societe/newType/:destroyId/destroy",
            element: <TypeForm />,
          },

          // Users
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "users/newUser",
            element: <UserForm />,
          },
          {
            path: "users/profile/:uuid",
            element: <Profile />,
          },
          {
            path: "users/:updateId",
            element: <UserForm />,
          },
          {
            path: "users/:destroyId/destroy",
            element: <UserForm />,
          },
          {
            path: "sauvegarde",
            element: <Sauvegarde />,
          },
        ],
      },
    ],
  },
]);
