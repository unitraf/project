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

let headData = ["Reglément", "Paiement", "Moyen","Echéance", "Action"];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const Modes = ({ reglements }) => {
  const navigate = useNavigate();
  const linkReglement = [
    {
      icon: mdiPlus,
      content: "Ajouter",
      route: `/parametre/societe/newReglement`,
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
  const renderReglement = (item, index) => (
    <tr key={index}>
      
      <td style={{ textTransform: "none" }}>{item.libelle}</td>
      <td>{item.type}</td>
      <td>{item.paiement}</td>
      <td>{`${item.jours} jrs`}</td>
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
            navigate(`/parametre/societe/newReglement/${item.uuid}`, {
              state: item,
            })
          }
        />{" "}
        /
        <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() =>
            navigate(`/parametre/societe/newReglement/${item.uuid}/destroy`, {
              state: item,
            })
          }
        />{" "}
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
        <span>Mode(s)</span>{" "}
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
            content={linkReglement}
      
            render={renderLink}
          />
        </span>
      </legend>
      <div className="pr-row">
        <Table
          headData={headData}
          renderHead={renderHead}
          bodyData={reglements}
          renderBody={renderReglement}
        />
      </div>
    </fieldset>
  );
};

export default Modes;
