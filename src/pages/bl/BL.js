import {
  mdiDotsVertical,
  mdiPlus,
  mdiPrinter,
  mdiPrinterSearch,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../../components/menu/Menu";
import Table from "../../components/table/Table";
import { date } from "../../helpers/render";

import "./bl.css";
import ModalBL from "./ModalBL";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newBl",
  },
]
const renderLink = (item, index) => (
  <Link to={item.route} key={index}>
    <div className="item">
      <Icon path={item.icon} size={0.8} color="var(--main-color)" />
      <span>{item.content}</span>
    </div>
  </Link>
);
const BL = () => {
  const [showModal, setShowModal] = useState(false);
  const [dossier, setDossier] = useState({})
  const state = useSelector((state) => state.dossiers);
  const  dossiers  = state.filter(dossier=> dossier.status ==="Livré");

  let headData = ["N° BL","Date", "Dossier", "Destinataire", "Nombre", "Description", "Poids", "Action"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.bl?item.bl.numero:"-"}</td>
      <td>{item.bl?date(item.bl.date):"-"}</td>
      <td>{`380/${item.numero}`}</td>
      <td>{item.client.nom}</td>
      <td>{item.nombre}</td>
      <td>{item.description}</td>
      <td>{item.poids}</td>

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
            setDossier(item)
            setShowModal(true);
          }}
        />{" "}
        /
        <Link to={`/transit/livraison/${item.numero}`}>
          {" "}
          <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
        </Link>
       
        {/* /
        <Link to={`/transit/livraison/${item.nif}/destroy`} onClick={(e) => {}}>
          {" "}
          <Icon path={mdiPrinter} size={0.6} title="Imprimer" />{" "}
        </Link> */}
      </td>
    </tr>
  );

  return (
    <div className="clients">
      <div className="header-title">
        Bordereaux{" "}
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

      <Table
        headData={headData}
        renderHead={renderHead}
        bodyData={dossiers}
        renderBody={renderBody}
      />
      <ModalBL showModal={showModal} setShowModal={setShowModal} dossier={dossier}  />
    </div>
  );
};
export default BL;
