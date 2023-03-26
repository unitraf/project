import {
  mdiDotsVertical,
  mdiPlus,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../../components/menu/Menu";
import Table from "../../components/table/Table";

import "./facture.css";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newFacture",
  }
];
const renderLink = (item, index) => (
  <Link to={item.route} key={index}>
    <div className="item">
      <Icon path={item.icon} size={0.8} color="var(--main-color)" />
      <span>{item.content}</span>
    </div>
  </Link>
);
const Factures = () => {
  const state = useSelector((state) => state);
  const { clients } = state;

  let headData = ["NIF", "Nom", "Tél", "BP", "Adresse", "Email", "Action"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.nif}</td>
      <td>{item.nom}</td>
      <td>{item.tel}</td>
      <td>{item.bp}</td>
      <td>{item.adresse}</td>
      <td>{item.email}</td>

      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Link to={`/clients/${item.nif}`}>
          {" "}
          <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
        </Link>
        /
        <Link to={`/clients/${item.nif}/destroy`} onClick={(e) => {}}>
          {" "}
          <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" />{" "}
        </Link>
      </td>
    </tr>
  );

  return (
    <div className="clients">
      <div className="header-title">
        Historique{" "}
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
        bodyData={clients}
        renderBody={renderBody}
      />
    </div>
  );
};
export default Factures;
