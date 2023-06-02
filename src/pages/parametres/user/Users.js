import {
  mdiDotsVertical,
  mdiEye,
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

import "./user.css";
import Title from "../../../components/title/Title";
import Log from "./Log";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newUser",
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
const Users = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { users } = state;

  let headData = [
    "uuid",
    "Nom ",
   "Prénom",
    "Email",
    
    "Status",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
    
      <td>{item.uuid}</td>
      <td>{item.nom}</td>
      <td>{item.prenom}</td>
      <td>{item.email}</td>
      <td>{item.status}</td>
      

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
            navigate(`/parametre/users/profile/${item.uuid}`, { state: item })
          }
        />{" "}
        /
        <Icon
          path={mdiSquareEditOutline}
          size={0.6}
          title="Editer"
          onClick={() =>
            navigate(`/parametre/users/${item.uuid}`, { state: item })
          }
        />{" "}
        /
        <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() =>
            navigate(`/parametre/users/${item.uuid}/destroy`, { state: item })
          }
        />{" "}
      </td>
    </tr>
  );

  return (
    <>
      <div className="card">
        <Title title="Données" />
      </div>
      <div className="dossier col-12">
        <fieldset className="card entite col-8 ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            {" "}
            <span>Comptes</span>{" "}
            <span>
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
          </legend>
          <div className="pr-row">
            <Table
              headData={headData}
              renderHead={renderHead}
              bodyData={users}
              renderBody={renderBody}
            />
          </div>
        </fieldset>
      </div>
      <Log/>
        {/* Button retour */}
  <div className="" style={{ margin: 5 }}>
        <button
          className="button"
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Quitter
        </button>
      </div>
    </>
  );
};
export default Users;
