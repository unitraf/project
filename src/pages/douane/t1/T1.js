import {
  mdiDotsVertical,
  mdiPlus,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../../../components/menu/Menu";
import Table from "../../../components/table/Table";
import { annee, date, nombre, prefixe } from "../../../helpers/render";

import "./t1.css";
import Title from "../../../components/title/Title";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newT1",
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
const T1 = () => {
  const navigte = useNavigate();
  const state = useSelector((state) => state);
  const { dossiers } = state;
  const t1 = dossiers
    .map((dossier) =>
      dossier.t1.map((t1, index) => {
        return {
          ...t1,
          index,
          dateDossier:dossier.date
        };
      })
    )
    .flat(Infinity);
console.log('====================================');
console.log(t1);
console.log('====================================');
  let headData = [
    "Dossier",
    "Références",
    "Sommier",
    "Frontière",

    "Provenance",
    "Id. Transport*",
    "quantite",
    "Poids",
    "Position",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index} title={`Dossier N° ${item.dossier}`}>
      <td>{prefixe(item.dateDossier, item.dossier)}</td>
      <td>{`T${item.numero} \u542b ${date(item.date)}`}</td>
      <td>{item.sommier?`S${item.sommier}/${annee(item.date)}`:"-"}</td>
      <td>{item.burEntree}</td>
      {/* <td>{item.numero}</td>
      <td>{date(item.date)}</td> */}
      <td>{item.provenance?item.provenance:"-"}</td>
      <td>{item.transport?item.transport:"-"}</td>
      <td>{nombre(item.quantite)}</td>
      <td>{nombre(item.poids)}</td>
      <td>{item.position}</td>

      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Icon
          path={mdiSquareEditOutline}
          size={0.6}
          title="Editer"
          onClick={() =>
            navigte(`/douane/t1/${item.numero}`, { state: { item } })
          }
        />{" "}
        /
        <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() =>
            navigte(`/douane/t1/${item.numero}/destroy`, { state: { item } })
          }
        />{" "}
      </td>
    </tr>
  );

  return (
    <div className="card">
      <Title
        title="Déclarations (Sommaire)"
        link={link}
        renderLink={renderLink}
        mb={10}
      />

      <Table
        headData={headData}
        renderHead={renderHead}
        bodyData={t1}
        renderBody={renderBody}
      />
    </div>
  );
};
export default T1;
