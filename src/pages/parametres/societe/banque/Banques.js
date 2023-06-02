import {
  mdiDotsVertical,
  mdiPlus,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import React from "react";

import Icon from "@mdi/react";
import { useNavigate } from "react-router-dom";
import Table from "../../../../components/table/Table";
import Menu from "../../../../components/menu/Menu";

let headData = ["Nom", "Rib", "Compte", "Action"];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const Banques = ({ banques }) => {
  const navigate = useNavigate();
  const linkBanque = [
    {
      icon: mdiPlus,
      content: "Ajouter",
      route: `/parametre/societe/newBanque`,
    },
  ];

  const renderLink = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => navigate(`${item.route}`)}
    >
      <Icon path={item.icon} size={0.6} color="var(--main-color)" />
      <span>{item.content}</span>
    </div>
  );

  const renderBanque = (item, index) => (
    <tr key={index}>
     
      <td>{item.nom ? item.nom : "-"}</td>
      <td>{item.rib ? item.rib : "-"}</td>
      <td>{item.compte ? item.compte : "-"}</td>
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
            navigate(`/parametre/societe/newBanque/${item.uuid}`, {
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
            navigate(`/parametre/societe/newBanque/${item.uuid}/destroy`, {
              state: item,
            })
          }
        />{" "}
      </td>
    </tr>
  );
  return (
    <fieldset className="card entite col-5 ">
      <legend
        className="card legend"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        {" "}
        <span>Banque(s)</span>{" "}
        <span >
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
            content={linkBanque}
            // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
            render={renderLink}
          />
        </span>
      </legend>
      <div className="pr-row">
        <Table
          headData={headData}
          renderHead={renderHead}
          bodyData={banques}
          renderBody={renderBanque}
        />
      </div>
    </fieldset>
  );
};

export default Banques;
