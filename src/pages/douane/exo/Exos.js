import {
  mdiPlus,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
  mdiEye,
  mdiFileDocumentCheckOutline,
  mdiDotsVertical,
  mdiLicense,
  mdiCalendarAlertOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Title from "../../../components/title/Title";
import Table from "../../../components/table/Table";
import Menu from "../../../components/menu/Menu";
import { date } from "../../../helpers/render";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newExo",
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
const Exos = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const { exos } = state;
console.log('====================================');
console.log(exos);
console.log('====================================');
  let headData = [
    "Numéro",
    "Code",
    "Date d'émiss°",
    "Date d'expirat°",
    "Bureau",
    "Bénéficiaire",
    "Solde",
    "Statut",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.numero}</td>
      <td>{item.code}</td>
      <td>{item.emission?date(item.emission):"-"}</td>
      <td>{item.expiration?date(item.expiration):"-"}</td>
      <td>{item.lieu ? item.lieu : "-"}</td>
      <td>{item.beneficiaire ? item.beneficiaire.nom : "-"}</td>
      <td>{"Solde?"}</td>
      <td>{"Statut"}</td>

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
          title="Editer"
          onClick={() =>
            navigate(`/douane/exo/exo/${item.uuid}`, { state: item })
          }
        />{" "}
        /
        <Icon
          path={mdiSquareEditOutline}
          size={0.6}
          title="Editer"
          onClick={() =>
            navigate(`/douane/exo/newExo/${item.uuid}`, { state: item })
          }
        />{" "}
        /
        <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() =>
            navigate(`/douane/exo/newExo/${item.uuid}/destroy`, { state: item })
          }
        />
      </td>
    </tr>
  );
  const renderExos = (
    <div className="" style={{ marginTop: 5 }}>
      <div className="dossier  col-12">
        {/*renderExos */}
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
              path={mdiLicense}
              size={0.8}
              color={"var(--main-color)"}
            />
            <span>Certificats</span>{" "}
            <Menu
            icon={mdiDotsVertical}
            size={0.7}
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              marginTop: 5,
              right: -5,
            }}
            content={link}
      
            render={renderLink}
          />
          </legend>
          <Table
        headData={headData}
        renderHead={renderHead}
        bodyData={exos}
        renderBody={renderBody}
      />
          <div className="pr-row"></div>
        </fieldset>
      </div>
    </div>
  );

  return (
    <div>
    <div className="card">
      <Title title="Situation" />
      </div>
  {renderExos}
 
    </div>
  );
};
export default Exos;
