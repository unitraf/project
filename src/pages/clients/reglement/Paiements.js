import { mdiEye, mdiPlus, mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Table from "../../../components/table/Table";

import Title from "../../../components/title/Title";
import { date, nombre } from "../../../helpers/render";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newReglements",
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
const Paiements = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const { reglements } = state;

  let headData = [
    "Client",
    "Date",
    "Reférence",
    "Banque",
    "Moyen Paie.",
    "Montant",
    "Affecté",
    "Restant",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.client}</td>
      <td>{date(item.date)}</td>
      <td>{item.reference}</td>
      <td>{item.banque}</td>
      <td>{item.paiement}</td>
      <td>{nombre(item.montant)}</td>
      <td>{item.affecte&&`${
        (item.affecte.replace(/\s/g, "") / item.montant.replace(/\s/g, "")) *
        100
      }%`}</td>
      <td>{item.restant&&`${
        (item.restant.replace(/\s/g, "") / item.montant.replace(/\s/g, "")) *
        100
      }%`}</td>

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
          title="Aperçu"
          onClick={() => navigate(`/clients/paiements/reglement/${item.uuid}`, { state: item })}
        />{" "}
        /
        <Icon
          path={mdiSquareEditOutline}
          size={0.6}
          title="Editer"
          onClick={() => navigate(`/clients/paiements/newReglements/${item.uuid}`, { state: item })}
        />{" "}
        /
        <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() =>
            navigate(`/clients/paiements/newReglements/${item.uuid}/destroy`, { state: item })
          }
        />
      </td>
    </tr>
  );

  return (
    <div className="">
    <div className="card">
      <Title
        title="Historique (regléments)"
        link={link}
        renderLink={renderLink}
      
      />
</div>
<div className="card card-top-tab">
      <Table
        headData={headData}
        renderHead={renderHead}
        bodyData={reglements}
        renderBody={renderBody}
      />
    </div></div>
  );
};
export default Paiements;
