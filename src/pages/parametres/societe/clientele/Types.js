import {
  mdiDotsVertical,
  mdiPlus,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../../../components/menu/Menu";
import Table from "../../../../components/table/Table";

let headData = [

  "Type",
  "Reglément",
  "Acompte",
  "Remise",
  "Tva",
  "Action",
];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const Types = ({ typeClients }) => {
  const navigate = useNavigate();
  const linkTypes = [
    {
      icon: mdiPlus,
      content: "Ajouter",
      route: `/parametre/societe/newType`,
    },
  ];

  const renderLink = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => navigate(`${item.route}`, {})}
    >
      <Icon path={item.icon} size={0.6} color="var(--main-color)" />
      <span>{item.content}</span>
    </div>
  );
  const rendertypes = (item, index) => (
    <tr key={index}>
     
      <td>{item.designation}</td>
      <td style={{ textTransform: "none" }}>{item.mode.libelle}</td>
      <td>{item.acompte}%</td>
      <td>{item.remise}%</td>
      <td>{item.tva}%</td>
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
            navigate(`/parametre/societe/newType/${item.uuid}`, {
              state: item,
            })
          }
        />
        /
        <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() =>
            navigate(`/parametre/societe/newType/${item.uuid}/destroy`, {
              state: item,
            })
          }
        />
      </td>
    </tr>
  );
  return (
    <fieldset className="card entite col-6 ">
      <legend
        className="card legend"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        {" "}
        <span>Clientèle(s)</span>{" "}
        <span>
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
            content={linkTypes}
            // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
            render={renderLink}
          />
        </span>
      </legend>
      <div className="pr-row">
        <Table
          headData={headData}
          renderHead={renderHead}
          bodyData={typeClients}
          renderBody={rendertypes}
        />
      </div>
    </fieldset>
  );
};

export default Types;
