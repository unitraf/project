import {
  mdiDotsVertical,
  mdiPlus,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Menu from "../../components/menu/Menu";
import Table from "../../components/table/Table";

import "./devis.css";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newClient",
  },
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newClient",
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
const Devis = () => {
  const state = useSelector((state) => state);
  const { clients, dossiers } = state;

  const devisDossiers = dossiers.filter(dossier=> dossier.prestations&&dossier)
console.log(devisDossiers);
  let headData = ["Dossier", "Client",  "Action"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>

      <td>{item.numero}  </td>
      <td>{item.client.nom}</td>
   
      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Link to={`/clients/${item.nif}`}>
          {" "}
          <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
        </Link>
        /
        <Link to={`/clients/${item.nif}/destroy`} onClick={(e) => {}}>
          {" "}
          <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" />{" "}
        </Link>
      </td>
    </tr>
  );

  return (
    <div className="clients">
      <div className="header-title">
        Devis{" "}
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
      <div>
   
<div className="col-6" >
<Table
        headData={headData}
        renderHead={renderHead}
        bodyData={devisDossiers}
        renderBody={renderBody}
      />
      <Link to={"1"}>1</Link>
      <Link to={"paix/2"}>2</Link>
      <Link to={"3"}>3</Link>
</div>
<div className="col-6">

    <Outlet/>
</div>
    </div>
         
    </div>
  );
};
export default Devis;
