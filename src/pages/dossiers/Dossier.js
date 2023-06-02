import React from "react";
import Title from "../../components/title/Title";
import "./dossier.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TreeViewDossier from "./TreeViewDossier";
import { date, prefixe } from "../../helpers/render";
import { mdiDotsVertical, mdiFile, mdiFileOutline, mdiFolderCancelOutline, mdiFolderCheckOutline, mdiFolderEditOutline, mdiFolderLock, mdiFolderLockOpenOutline, mdiFolderOpenOutline, mdiPlus, mdiPrinterCheck, mdiPrinterOutline, mdiSquareEditOutline } from "@mdi/js";
import Icon from "@mdi/react";
import Menu from "../../components/menu/Menu";

const linkDocument = [
  {
    icon: mdiFileOutline,
    content: "T1",
    route: "/transit/t1/newT1",
  },
  {
    icon: mdiFileOutline,
    content: "Minute",
    route: "/transit/t1/newT1",
  },
  {
    icon: mdiFileOutline,
    content: "Déclaration",
    route: "/transit/t1/newT1",
  },
  {
    icon: mdiFileOutline,
    content: "Prestation",
    route: "/transit/t1/newT1",
  },
];


const documentById = (array = [], uuid) =>
  uuid && array.filter((item) => item.numero === uuid);
const Dossier = () => {
  const params = useParams();
  const navigate = useNavigate();

  const state = useSelector((state) => state);
  const { dossiers } = state;

  const dossier = documentById(dossiers, params.uuid)[0];
  console.log(dossier);
  const renderLinkDocument = (item, index) => (
    <div className="item" key={index} onClick={() => navigate(`${item.route}`)}>
      <Icon path={item.icon} size={0.6} color="var(--main-color)" />
      <span>{item.content}</span>
    </div>
  );
  const linkDossier = [
    {
      icon: mdiFolderEditOutline,
      content: "Editer",
      route: `/transit/dossiers/${dossier.numero}`,
    },
    {
      icon: mdiFolderCancelOutline,
      content: "Supprimer",
      route:`/transit/dossiers/${dossier.numero}/destroy`,
    },
    {
      icon: mdiPrinterOutline,
      content: "Imprimer",
      route: "/transit/dossiers",
    }
  ];
  const renderLinkDossier = (item, index) => (
    <div className="item" key={index} onClick={() => navigate(`${item.route}`)}>
      <Icon path={item.icon} size={0.6} color="var(--main-color)" />
      <span>{item.content}</span>
    </div>
  );
  return (
    <div>
      <div className="card">
        <Title title="Données (Infos)" />
      </div>
      <div className="dossier col-12">
        {/* infos Dossier */}
        <fieldset className="card entite col-8 ">
        <legend className="card legend" style={{ display: "flex", justifyContent:"space-between", alignItems:"flex-end" }}>
            {" "}
            <span>Dossier</span>{" "}
            <span>
              <Menu
                icon={mdiDotsVertical}
                size={0.8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  marginTop: 5,
                  right:-5
                }}
                content={linkDossier}
                // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
                render={renderLinkDossier}
              />
            </span>
          </legend>
          <div className="pr-row">
            <fieldset className="attribut col-1 ">
              <legend>Numéro</legend>
              <span>{prefixe(dossier.date, dossier.numero)}</span>
            </fieldset>
            <fieldset className="attribut ml col-1">
              <legend>Date</legend>
              <span>{dossier.date ? date(dossier.date) : "-"}</span>
            </fieldset>
            <fieldset className="attribut ml col-1">
              <legend>Colis</legend>
              <span>{dossier.nombre ? `${dossier.nombre}` : "-"}</span>
            </fieldset>
            <fieldset className="attribut ml col-2">
              <legend>Type</legend>
              <span>{dossier.type ? `${dossier.type}` : "-"}</span>
            </fieldset>
            <fieldset className="attribut ml col-7">
              <legend>Description</legend>
              <span>
                {dossier.description ? `${dossier.description}` : "-"}
              </span>
            </fieldset>
            <fieldset className="attribut ml col-1">
              <legend>Statut</legend>
              <span>{dossier.status ? `${dossier.status}` : "-"}</span>
            </fieldset>
          </div>
        </fieldset>
        {/* infos Client */}
        <fieldset className="card entite col-3 ">
          <legend className="card legend">Client</legend>
          <div className="pr-row">
            <fieldset className="attribut col-9">
              <legend>Nom</legend>
              <span>{dossier.client ? dossier.client.nom : "-"}</span>
            </fieldset>
            <fieldset className="attribut  ml col-3 ">
              <legend>Reférence</legend>
              <span>{dossier.reference ? dossier.reference : "-"}</span>
            </fieldset>
          </div>
        </fieldset>
        
        {/* infos Expédition */}
        <fieldset className="card entite col-12 ">
          <legend className="card legend">Expédition</legend>
          <div className="pr-row">
            <fieldset className="attribut col-1">
              <legend>Origine</legend>
              <span>{dossier.origine ? dossier.origine : "-"}</span>
            </fieldset>
            <fieldset className="attribut  ml col-1 ">
              <legend>Provenance</legend>
              <span>{dossier.provenance ? dossier.provenance : "-"}</span>
            </fieldset>
            <fieldset className="attribut  ml col-1 ">
              <legend>Mode</legend>
              <span>{dossier.mode ? dossier.mode : "-"}</span>
            </fieldset>
            <fieldset className="attribut  ml col-2 ">
              <legend>BL/AWB</legend>
              <span>{dossier.document ? dossier.document : "-"}</span>
            </fieldset>
            <fieldset className="attribut  ml col-2 ">
              <legend>Transporteur</legend>
              <span>{dossier.transport ? dossier.transport : "-"}</span>
            </fieldset>
            <fieldset className="attribut  ml col-1 ">
              <legend>Départ</legend>
              <span>{dossier.depart ? date(dossier.depart) : "-"}</span>
            </fieldset>
            <fieldset className="attribut  ml col-1 ">
              <legend>Arrivée</legend>
              <span>{dossier.arrivee ? date(dossier.arrivee) : "-"}</span>
            </fieldset>
            <fieldset className="attribut  ml col-3 ">
              <legend>Expéditeur</legend>
              <span>{dossier.expediteur ? dossier.expediteur : "-"}</span>
            </fieldset>
          </div>
        </fieldset>
        {/* infos Documents */}
        <fieldset className="card entite col-12 ">
          <legend className="card legend" style={{ display: "flex", justifyContent:"space-between", alignItems:"flex-end" }}>
            {" "}
            <span>Documents</span>{" "}
            <span>
              <Menu
                icon={mdiDotsVertical}
                size={0.8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  marginTop: 5,
                }}
                content={linkDocument}
                // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
                render={renderLinkDocument}
              />
            </span>
          </legend>

          <TreeViewDossier dossier={dossier} />

          <div className="pr-row"></div>
        </fieldset>
      </div>
      <div className="card" style={{ margin: 5 }}>
        <button
          className="button"
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Quitter
        </button>
      </div>
    </div>
  );
};

export default Dossier;
