import {
  mdiPlus,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
  mdiEye,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Title from "../../../components/title/Title";
import Table from "../../../components/table/Table";
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

  let headData = [
    "Code",
    "Numéro",
    "Date d'émiss°",
    "Date d'expirat°",
    "Bénéficiaire",
    "Solde",
    "Statut",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.code}</td>
      <td>{item.numero}</td>
      <td>{item.emission}</td>
      <td>{item.expiration}</td>
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

  return (
    <div className="card">
      <Title title="Situation" link={link} renderLink={renderLink} mb={10} />

      <Table
        headData={headData}
        renderHead={renderHead}
        bodyData={exos}
        renderBody={renderBody}
      />
    </div>
  );
};
export default Exos;
