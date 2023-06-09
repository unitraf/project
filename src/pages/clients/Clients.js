import {
  mdiAccountMultipleOutline,
  mdiAccountPlusOutline,
  mdiCashCheck,
  mdiCashClock,
  mdiCashFast,
  mdiCashMinus,
  mdiCashMultiple,
  mdiEye,
  mdiPlus,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Table from "../../components/table/Table";

import "./clients.css";
import Title from "../../components/title/Title";
import Button from "../../components/buttonLink/Button";

const listCard = [
  {
    icon: mdiAccountPlusOutline,
    link: "Nouveau",
    route: "/clients/newClient",
  },
  {
    icon: mdiCashMultiple,
    link: "Regléments",
    route: "/clients/paiements",
  },
  {
    icon: mdiCashClock,
    link: "Echéanciers",
    route: "/clients/paiements",
  },
  {
    icon: mdiCashMinus,
    link: "Ecarts",
    route: "/clients/paiements",
  },
  {
    icon: mdiCashFast,
    link: "Relances",
    route: "/clients/paiements",
  },
  
  {
    icon: mdiCashCheck,
    link: "Transferts",
    route: "/clients/paiements",
  },
];
const Clients = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const { clients } = state;

  let headData = ["Compte","NIF", "Nom", "Tél", "BP", "Adresse", "Email", "Action"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{`${item.compte}/${index+1}`}</td>
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
        <Icon
          path={mdiEye}
          size={0.6}
          title="Profile"
          onClick={() =>
            navigate(`/clients/profile/${item.nif}`, { state: item })
          }
        />{" "}
        /
        <Icon
          path={mdiSquareEditOutline}
          size={0.6}
          title="Editer"
          onClick={() => navigate(`/clients/${item.nif}`, { state: item })}
        />{" "}
        /
        <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() =>
            navigate(`/clients/${item.nif}/destroy`, { state: item })
          }
        />
      </td>
    </tr>
  );
  const renderStat = (
    <div>
      <div className="dossier col-12">
        {/* Listing */}
        <fieldset className="card entite col-12 ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Icon
              path={mdiAccountMultipleOutline}
              size={0.8}
              color={"var(--main-color)"}
            />
            <span className="i-legend">Tiers</span>{" "}
          </legend>
          <div className="pr-row"></div>
          <Table
            headData={headData}
            renderHead={renderHead}
            bodyData={clients}
            renderBody={renderBody}
          />
        </fieldset>
      </div>
    </div>
  );
  return (
    <div className="">
  
      <div className="card">
        <Title title="Partenaires" />
      </div>
      <Button listCard={listCard} />
      {renderStat}
    </div>
  );
};
export default Clients;
