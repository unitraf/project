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
import Menu from "../../../components/menu/Menu";
import Table from "../../../components/table/Table";

import "./tarifs.css";
import Title from "../../../components/title/Title";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newTarif",
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
const Tarifs = () => {
  const state = useSelector((state) => state);
  const { tarifs } = state;

  let headData = ["Position", "Désignation", "Us", "Action"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index} title={`${item.designation}`}>
      <td>{item.nts}</td>
      <td>{item.designation}</td>
      <td>{item.us}</td>

      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Link to={`/douane/tarifs/${item.nts}`}>
          {" "}
          <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
        </Link>
        /
        <Link to={`/douane/tarifs/${item.nts}/destroy`} onClick={(e) => {}}>
          {" "}
          <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" />{" "}
        </Link>
      </td>
    </tr>
  );

  return (
    <div className="card">
      <Title title="Tarif des Douanes" link={link} renderLink={renderLink} mb={10} />

  
      <Table
        headData={headData}
        renderHead={renderHead}
        bodyData={tarifs}
        renderBody={renderBody}
      />
    </div>
  );
};
export default Tarifs;
