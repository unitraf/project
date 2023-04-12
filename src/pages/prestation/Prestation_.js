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
import Onglets from "../../components/onglet/Onglets";
import Table from "../../components/table/Table";
import { groupBy } from "../../helpers/fonctions";
import { nombre } from "../../helpers/render";

const link = [
  {
    icon: mdiPlus,
    content: "Service",
    route: "newPrestation",
  },
  {
    icon: mdiPlus,
    content: "Rubrique",
    route: "newRubrique",
  },
  {
    icon: mdiPlus,
    content: "Rubrique",
    route: "newRubrique",
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
const Prestations = () => {
  const state = useSelector((state) => state);
  const { prestations } = state;
  const rubriques = groupBy(prestations, "rubrique");
  console.log(rubriques);
  let headData = ["Code", "Libellé", "Rubrique", "Valeur", "Compte", "Action"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.code}</td>
      <td>{item.libelle}</td>
      <td>{item.rubrique}</td>
      <td>{item.valeur ? nombre(item.valeur) : "-"}</td>
      <td>{item.compte}</td>

      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Link to={`${item.code}`}>
          {" "}
          <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
        </Link>
        /
        <Link to={`${item.code}/destroy`} onClick={(e) => {}}>
          {" "}
          <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" />{" "}
        </Link>
      </td>
    </tr>
  );

  return (
    <div className="prestations">
      <div className="header-title">
        Services/Rubriquesb uyguyg{" "}
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

      <Onglets
        // icon={ongletMenuIcon}
        // menu={ongletOptions}
        // active={setStatus}
        ongletHeaders={Object.keys(rubriques)}
        ongletBody={Object.keys(rubriques).map((item, index) => (
          <Table
            keys={index}
            headData={headData}
            renderHead={renderHead}
            bodyData={rubriques[item]}
            renderBody={renderBody}
          />
        ))}
      />
    </div>
  );
};

export default Prestations;
