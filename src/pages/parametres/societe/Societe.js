import { mdiDotsVertical, mdiPlus, mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../../../components/menu/Menu";
import Table from "../../../components/table/Table";
import Carte from "./Carte";
// import { banque, reglement } from "./init";
import "./societe.css";
import { generateSecef } from "../../../helpers/fonctions";
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



let headDataBank = ["Réf.", "Banque", "Rib", "Compte", "..."];
const renderHeadBank = (item, index) => <th key={index}>{item}</th>;

const renderBank = (item, index) => (
  <tr key={index}>
    <td>{item.code}</td>
    <td>{item.nom}</td>
    <td>{item.rib}</td>
    <td>{item.compte}</td>
    <td
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
    >
      <Link to={`/parametre/societe/newBanque/${item.code}`}>
        {" "}
        <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
      </Link>
      /
      <Link to={`/parametre/societe/newBanque/${item.code}/destroy`} onClick={(e) => { }}>
        {" "}
        <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" />{" "}
      </Link>
    </td>
  </tr>
);
let headDataReglement = ["Code.", "Libellé", "Paiement", "Reglément", "..."];
const renderHeadReglement = (item, index) => <th key={index}>{item}</th>;

const renderReglement = (item, index) => (
  <tr key={index}>
    <td>{item.code}</td>
    <td style={{ textTransform: "none" }} >{item.libelle}</td>
    <td>{item.type}</td>
    <td>{item.reglement}</td>
    <td
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
    >
      <Link to={`/parametre/societe/newReglement/${item.code}`}>
        {" "}
        <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
      </Link>
      /
      <Link to={`/parametre/societe/newReglement/${item.code}/destroy`} onClick={(e) => { }}>
        {" "}
        <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" />{" "}
      </Link>
    </td>
  </tr>
);
let headDatatypeClients = ["Code.", "Désignation", "Acompte", "Remise","Tva","Reglément", "..."];
const renderHeadtypeClients = (item, index) => <th key={index}>{item}</th>;

const rendertypeClients = (item, index) => (
  <tr key={index}>
    <td>{item.code}</td>
    <td>{item.designation}</td>
    <td>{item.acompte}%</td>
    <td>{item.remise}%</td>
    <td>{item.tva}%</td>
    <td style={{ textTransform: "none" }} >{item.libelle}</td>
    <td
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
    >
      <Link to={`/parametre/societe/newReglement/${item.code}`}>
        {" "}
        <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
      </Link>
      /
      <Link to={`/parametre/societe/newReglement/${item.code}/destroy`} onClick={(e) => { }}>
        {" "}
        <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" />{" "}
      </Link>
    </td>
  </tr>
);
const Societe = () => {
  const state = useSelector(state => state.societe)
  const { infos, banques, reglements, typeClients } = state

  return (
    <div>
      {" "}
      <div className="header-title">
        Infos{" "}
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
      <div style={{ display: "flex", justifyContent: "space-between" }} >
        <div className="col-6" >
          <Table
            headData={headDataBank}
            renderHead={renderHeadBank}
            bodyData={banques}
            renderBody={renderBank}
          />
          <Table
            headData={headDataReglement}
            renderHead={renderHeadReglement}
            bodyData={reglements}
            renderBody={renderReglement}
          />
          <Table
            headData={headDatatypeClients}
            renderHead={renderHeadtypeClients}
            bodyData={typeClients}
            renderBody={rendertypeClients}
          />
        </div>
        <Carte societe={infos} />
      </div>

    </div>
  );
};

export default Societe;
