import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/root/ErrorPage";
import Transit from "../pages/transit/Transit";
import Commercial from "../pages/commercial/Commercial";
import Compta from "../pages/compta/Compta";
import DashBoard from "../pages/dashBoard/DashBoard";
import Clients from "../pages/clients/Clients";
import EditClient, {
  action as editAction,
  destroyAction,
} from "../pages/clients/EditClient";
import NewClient, {newClientAction} from "../pages/clients/NewClient";
import Dossiers from "../pages/dossiers/Dossiers";
import Minutes from "../pages/minutes/Minutes";
import NewDossier, { newDossierAction } from "../pages/dossiers/NewDossier";
import EditDossier, {  updateDossierAction, destroyDossierAction } from "../pages/dossiers/EditDossier";
import T1 from "../pages/t1/T1";
import NewT1, { NewT1Action } from "../pages/t1/NewT1";
import EditT1, { destroyT1Action, updateT1Action } from "../pages/t1/EditT1";
import NewDdu, { NewDduAction } from "../pages/ddu/NewDdu";
import EditDdu, { destroyDduAction, updateDduAction } from "../pages/ddu/EditDdu";
import Ddu from "../pages/ddu/Ddu";
import NewMinute, { NewMinuteAction } from "../pages/minutes/NewMinute";
import EditMinute, { destroyMinuteAction, updateMinuteAction } from "../pages/minutes/EditMinute";
import Tarifs from "../pages/tarifs/Tarifs";
import NewTarif, { newTarifAction } from "../pages/tarifs/NewTarif";
import EditTarif from "../pages/tarifs/EditTarif";
import BL from "../pages/bl/BL";
import NewBL, { NewBLAction }  from "../pages/bl/NewBL";
import EditBL, { destroyBLAction, updateBLAction } from "../pages/bl/EditBL";
import PrintBL from "../pages/bl/PrintBL";
import Facturation from "../pages/facturation/Facturation";
import Factures from "../pages/facturation/Factures";
import Avoirs from "../pages/facturation/Avoirs";
import Devis from "../pages/devis/Devis";
import PrintFacture from "../pages/facturation/PrintFacture";
import Articles from "../pages/article/Articles";
import NewArticle, { newArticleAction } from "../pages/article/NewArticle";
import EditArticle, { destroyArticleAction, editArticleAction } from "../pages/article/EditArticle";
import NewPrestation, { newPrestationAction } from "../pages/prestation/NewPrestation";
import NewFacture, { newFactureAction } from "../pages/facturation/NewFacture";

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
      // Clients
      {
        path: "clients",
        element: <Clients />,
      },
      {
        path: "clients/newClient",
        element: <NewClient />,
        action:newClientAction
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
      // Transit
      {
        path: "transit",
        element: <Transit />,
      },
      // Dossiers
      {
        path: "transit/dossiers",
        element: <Dossiers />,
      },
      {
        path: "transit/dossiers/newDossier",
        element: <NewDossier />,
        action:newDossierAction
      },
      {
        path: "transit/dossiers/:updateId",
        element: <EditDossier />,
        action:updateDossierAction
      },
      {
        path: "transit/dossiers/:destroyId/destroy",
        element: <EditDossier />,
        action:destroyDossierAction
      },
      // T1
      {
        path: "transit/t1",
        element: <T1 />,
      },
      {
        path: "transit/t1/newT1",
        element: <NewT1 />,
        action:NewT1Action
      },
      {
        path: "transit/t1/newT1/:dossierId",
        element: <NewT1 />,
        action:NewT1Action
      },
      {
        path: "transit/t1/:updateId",
        element: <EditT1 />,
        action:updateT1Action
      },
      {
        path: "transit/t1/:destroyId/destroy",
        element: <EditT1 />,
        action:destroyT1Action
      },
      // DDu
      {
        path: "transit/ddu",
        element: <Ddu />,
      },
      {
        path: "transit/ddu/newDdu",
        element: <NewDdu />,
        action:NewDduAction
      },
      {
        path: "transit/ddu/newDdu/:dossierId",
        element: <NewDdu />,
        action:NewDduAction
      },
      {
        path: "transit/ddu/:updateId",
        element: <EditDdu />,
        action:updateDduAction
      },
      {
        path: "transit/ddu/:destroyId/destroy",
        element: <EditDdu />,
        action:destroyDduAction
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
        action:NewMinuteAction
      },
      {
        path: "transit/minutes/NewMinute/:dossierId",
        element: <NewMinute />,
        action:NewMinuteAction
      },
      {
        path: "transit/minutes/:updateId",
        element: <EditMinute />,
        action:updateMinuteAction
      },
      {
        path: "transit/minutes/:destroyId/destroy",
        element: <EditMinute />,
        action:destroyMinuteAction
      },
      // Tarifs
      {
        path: "tarifs",
        element: <Tarifs />,
      },
      {
        path: "tarifs/newTarif",
        element: <NewTarif />,
        action:newTarifAction
      },
      {
        path: "tarifs/:updateId",
        element: <EditTarif />,
        action:newTarifAction
      },
      {
        path: "tarifs/:destroyId/destroy",
        element: <EditTarif />,
        action:newTarifAction
      },
      // bordereau de livraison
      {
        path: "transit/livraison",
        element: <BL />,
    
      },
      {
        path: "transit/livraison/newBl",
        element: <NewBL />,
        action:NewBLAction
       
      },
      {
        path: "transit/livraison/:blId/print",
        element: <PrintBL />,
       
      },
      {
        path: "transit/livraison/:destroyId/destroy",
        element: <EditBL />,
        action: destroyBLAction
       
      },
      {
        path: "transit/livraison/:updateId",
        element: <EditBL />,
        action:updateBLAction
       
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
        action:newFactureAction
      },
      {
        path: "facturation/factures/print",
        element: <PrintFacture />,
      },
      {
        path: "facturation/avoirs",
        element: <Avoirs />,
      },
      // Devis
      {
        path: "facturation/devis",
        element: <Devis />,
        children:[
          {path:":id",
          element:<PrintFacture />
          }
        ]
      },
      // Prestation
      {
        path: "facturation/devis/newPrestation/:dossierId",
        element: <NewPrestation />,
        action:newPrestationAction
      },
    
      // Articles
      {
        path: "facturation/prestations",
        element: <Articles />,
      },
      {
        path: "facturation/prestations/newArticle",
        element: <NewArticle />,
        action:newArticleAction
      },
      {
        path: "facturation/prestations/:updateId",
        element: <EditArticle />,
        action:editArticleAction
      },
      {
        path: "facturation/prestations/:destroyId/destroy",
        element: <EditArticle />,
        action:destroyArticleAction
      },
      // Commercial
      {
        path: "commercial",
        element: <Commercial />,
      },
      {
        path: "compta",
        element: <Compta />,
      },
    ],
  },
]);
