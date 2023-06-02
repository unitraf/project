import {
  mdiDotsVertical,
  mdiEye,
  mdiFileOutline,
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
import "./ddu.css";
import { date, nombre, prefixe } from "../../../helpers/render";
import Title from "../../../components/title/Title";
import { referenceDdu } from "../../../helpers/render";
import { annee } from "../../../helpers/render";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newDdu",
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
const Ddu = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { dossiers } = state;
  const declaration = dossiers
    .map((dossier) =>
      dossier.declaration.map((declaration, index) => {
        return {
          ...declaration,
          dateDossier: dossier.date,
          description: dossier.description,
          index,
        };
      })
    )
    .flat(Infinity);

  let headData = [
    "Dossier",
    "Bureau",
    "Reférence",
    "T1",
    "Sommier",
    "Colis",
    "Poids",
    "Valeur douane ",
    "Droits & Taxes",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index} title={` ${item.description}`}>
      <td>{prefixe(item.dateDossier, item.dossier)}</td>
      <td>{item.bureau}</td>
      <td>{`${referenceDdu(item.regime, item.reference)} - ${date(
        item.date
      )}`}</td>

      <td>{item.t1 ? `${item.t1.numero}/${annee(item.t1.date)}` : "-"}</td>
      <td>{item.sommier ? `${item.sommier}/${annee(item.t1.date)}` : "-"}</td>
      <td>{nombre(item.nombre)}</td>

      <td>{nombre(item.poids)}</td>

      <td>{nombre(item.valeur)}</td>
      <td>{nombre(item.total)}</td>

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
            onClick={() =>
              navigate(`/douane/ddu/${item.reference}`, { state: item })
            }
          />{" "}
       
        /
        <Icon
          path={mdiSquareEditOutline}
          size={0.6}
          title="Editer"
          onClick={() =>
            navigate(`/douane/ddu/${item.reference}`, { state: item })
          }
        />{" "}
        /
        <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() =>
            navigate(`/douane/ddu/${item.reference}/destroy`, { state: item })
          }
        />{" "}
      </td>
    </tr>
  );

  return (
    <div className="card">
      <Title
        title="Déclarations (Détails)"
        link={link}
        renderLink={renderLink}
        mb={10}
      />

      <Table
        headData={headData}
        renderHead={renderHead}
        bodyData={declaration}
        renderBody={renderBody}
      />
    </div>
  );
};
export default Ddu;
