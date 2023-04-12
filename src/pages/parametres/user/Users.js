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

import "./user.css";
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
  const navigate = useNavigate()
  const state = useSelector((state) => state);
  const { users } = state;

  let headData = ["Id", "Nom", "Prénom","Email", "Fonction", "Privilèges",  "Action"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.nom}</td>
      <td>{item.prenom}</td>
      <td>{item.email}</td>
      <td>{item.fonction}</td>
      <td>{item.privilège}</td>

      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
      
          <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" onClick={()=>navigate(`/parametre/users/${item.id}`, {state:item})} />{" "}
       
        /
        
          <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" onClick={()=>navigate(`/parametre/users/${item.id}/destroy`, {state:item})} />{" "}
     
      </td>
    </tr>
  );

  return (
    <div className="clients">
      <div className="header-title">
        Users{" "}
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
        bodyData={users}
        renderBody={renderBody}
      />
    </div>
  );
};
export default Users;
