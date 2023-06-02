import {
  mdiEye,
  mdiPlus,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Title from "../../../components/title/Title";
import Table from "../../../components/table/Table";

const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newBureau",
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
const Bureaux = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const { bureaux } = state;

  let headData = [
    "Code",
    "Bureau",
    "Région",
    "NB. Dossier",
    "Instances",
    "Performance",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.code}</td>
      <td>{item.bureau}</td>
      <td>{item.region}</td>
      <td>{"-"}</td>
      <td>{"-"}</td>
      <td>{"-"}</td>

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
          title="Aperçu"
          onClick={() =>
            navigate(`/douane/bureaux/bureau/${item.uuid}`, { state: item })
          }
        />{" "}
        /
        <Icon
          path={mdiSquareEditOutline}
          size={0.6}
          title="Editer"
          onClick={() =>
            navigate(`/douane/bureaux/newBureau/${item.uuid}`, { state: item })
          }
        />{" "}
        /
        <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() =>
            navigate(`/douane/bureaux/newBureau/${item.uuid}/destroy`, {
              state: item,
            })
          }
        />
      </td>
    </tr>
  );

  return (
    <div className="card">
      <Title
        title="Bureaux de dédouanement"
        link={link}
        renderLink={renderLink}
        mb={10}
      />

      <Table
        headData={headData}
        renderHead={renderHead}
        bodyData={bureaux}
        renderBody={renderBody}
      />
    </div>
  );
};
export default Bureaux;
