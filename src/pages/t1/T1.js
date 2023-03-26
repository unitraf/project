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
import { date, nombre } from "../../helpers/render";

import "./t1.css";
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
  const state = useSelector((state) => state);
  const { dossiers } = state;
  const t1 = dossiers
    .map((dossier) =>
      dossier.t1.map((t1, index) => {
        return {
          ...t1,
          index,
        };
      })
    )
    .flat(Infinity);

  let headData = [
    "Frontière",
    "N° Transit",
    "Date",
    "N° Sommier",
    "Provenance",
    "Id. Transport*",
    "quantite",
    "Poids",
    "Position",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index} title={`Dossier N° ${item.dossier}`} >
      <td>{item.burEntree}</td>
      <td>{item.numero}</td>
      <td>{date(item.date) }</td>
      <td>{item.sommier}</td>
      <td>{item.provenance}</td>
      <td>{item.transport}</td>
      <td>{nombre(item.quantite) }</td>
      <td>{nombre(item.poids) }</td>
      <td>{item.position}</td>

      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Link to={`/transit/t1/${item.numero}`}>
          {" "}
          <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
        </Link>
        /
        <Link to={`/transit/t1/${item.numero}/destroy`} onClick={(e) => {}}>
          {" "}
          <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" />{" "}
        </Link>
      </td>
    </tr>
  );

  return (
    <div className="clients">
      <div className="header-title">
        Déclarations (Sommaire en Transit/frontière)
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
        bodyData={t1}
        renderBody={renderBody}
      />
    </div>
  );
};
export default T1;
