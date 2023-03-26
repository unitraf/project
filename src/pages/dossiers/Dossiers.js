import {
  mdiDotsVertical,
  mdiFolderPlusOutline,
  mdiPrinterSearch,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
  mdiWindowClose,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../../components/menu/Menu";
import Modal from "../../components/modal/Modal";
import Table from "../../components/table/Table";
import { annee, mois } from "../../helpers/render";
import { getSeries,groupBy } from "../../helpers/fonctions";

import "./dossiers.css";
import Onglets from "../../components/onglet/Onglets";
const link = [
  {
    icon: mdiFolderPlusOutline,
    content: "Nouveau",
    route: "newDossier",
  },
];
const renderLink = (item, index) => (
  <Link to={item.route} key={index}>
    <div className="item">
      <Icon path={item.icon} size={0.8} color="var(--main-color)" />
      <span>{item.content}</span>
    </div>
  </Link>
);
const Dossiers = () => {
  const state = useSelector((state) => state);
  const { dossiers } = state;
  const modes = groupBy(dossiers, "mode")
  const [showModal, setShowModal] = useState(false);

  let headData = [
    "N° Trans.",
    "Date",
    "Réf. Client",
    "Destinataire",
    "Expéditeur",
    "Nbr.",
    "Type",
    "Mode Transp.",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{`${item.numero}/${annee(item.date)}`}</td>
      <td>{mois(item.date)}</td>
      <td>{item.reference ? item.reference : "-"}</td>
      <td>{item.client.nom}</td>
      <td>{item.expediteur ? item.expediteur : "-"}</td>
      <td>{item.nombre}</td>
      <td>{item.type}</td>
      <td>{item.mode}</td>

      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Icon
          path={mdiPrinterSearch}
          size={0.6}
          title="Aperçu"
          onClick={() => {
            console.log("Preview for print", item);
            setShowModal(true);
          }}
        />{" "}
        /
        <Link to={`/transit/dossiers/${item.numero}`}>
          {" "}
          <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
        </Link>
        /
        <Link
          to={`/transit/dossiers/${item.numero}/destroy`}
          onClick={(e) => {}}
        >
          {" "}
          <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" />{" "}
        </Link>
      </td>
    </tr>
  );

  return (
    <div className="clients">
      <div className="header-title">
        Annuaire des dossiers (Historique/Client)
        <span style={{ position: "fixed", right: 10 }}>
          <Menu
            icon={mdiDotsVertical}
            size={0.8}
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              marginTop: 5,
            }}
            content={link}
            // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
            render={(item, index) => renderLink(item, index)}
          />
        </span>
      </div>
<Onglets
          // icon={ongletMenuIcon}
          // menu={ongletOptions}
          // active={setStatus}
          ongletHeaders={Object.keys(modes)}
          ongletBody={ Object.keys(modes).map( (item, index)=> <Table keys={index}
            headData={headData}
            renderHead={renderHead}
            bodyData={modes[item]}
            renderBody={renderBody}
          />)}
        />
      {/* <Table
        headData={headData}
        renderHead={renderHead}
        bodyData={dossiers}
        renderBody={renderBody}
      /> */}

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div
          className="modalHeader"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Aperçu</span>{" "}
          <Icon
            path={mdiWindowClose}
            size={0.8}
            color="white"
            style={{ cursor: "pointer", alignSelf: "end" }}
            onClick={() => setShowModal(!showModal)}
          />
        </div>

        <div className="modalBody">hi modal body test</div>
        <div className="modalFooter">
          <button className="modalBtn" onClick={() => setShowModal(!showModal)}>
            Imprimer
          </button>
          <button className="modalBtn" onClick={() => setShowModal(!showModal)}>
            Quitter
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default Dossiers;
