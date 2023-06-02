import {
  mdiEye,
  mdiFolderPlusOutline,
  mdiPlus,
  mdiPrinterSearch,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
  mdiWindowClose,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import Table from "../../components/table/Table";
import { annee, mois, prefixe } from "../../helpers/render";
import { groupBy } from "../../helpers/fonctions";

import "./dossiers.css";
import Onglets from "../../components/onglet/Onglets";
import Title from "../../components/title/Title";
const Dossiers = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { dossiers } = state;
  console.log(dossiers);
  const modes = groupBy(dossiers, "mode");
  const [showModal, setShowModal] = useState(false);

  let headData = [
    "N° Transit",
    "Date",
    "Cmde. Client",
    "Destinataire",
    "Expéditeur",
    "Colis",
    "Type",
    "Mode Transp.",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{`${ prefixe(item.date,item.numero)}`}</td>
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
          path={mdiEye}
          size={0.6}
          title="Dossier"
          onClick={() =>
            navigate(`/transit/dossier/${item.numero}`, { state: item })
          }
        />{" "}
        /
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
          onClick={() => {}}
        >
          {" "}
          <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" />{" "}
        </Link>
      </td>
    </tr>
  );

  return (
    <div className="clients">
      <div className="card">
        <Title
          title="Encours (Instances)"
          // link={link}
          // renderLink={renderLink}
        />
      </div>
      <div className="card card-top-tab">
        <Onglets
        // Onhlets Tous > Tables dossiers
          ongletHeaders={["Tous (*)", ...Object.keys(modes), <Icon path={mdiPlus} size={0.8} title="Nouveau dossier"  onClick={()=>{navigate('/transit/dossiers/newDossier/')}}/>]}
          ongletBody={[
            <Table
              headData={headData}
              renderHead={renderHead}
              bodyData={dossiers}
              renderBody={renderBody}
            />,
            // suites mapping mode de transport
            ...Object.keys(modes).map((item, index) => (
              <Table
                keys={index}
                headData={headData}
                renderHead={renderHead}
                bodyData={modes[item]}
                renderBody={renderBody}
              />
            )),
            <div>OOooops!il n'y a rien à voir, veuillez bien cliquer sur le plus pour ajouter un nouveau dossier.</div>
          ]}
        />
      </div>

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
