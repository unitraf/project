import {
  mdiDotsVertical,
  mdiEye,
  mdiFileDocumentCheckOutline,
  mdiPlus,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Menu from "../../../components/menu/Menu";
import Table from "../../../components/table/Table";
import "./ddu.css";
import { date, nombre, prefixe } from "../../../helpers/render";
import Title from "../../../components/title/Title";
import { referenceDdu } from "../../../helpers/render";
import { annee } from "../../../helpers/render";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newDdu",
  },
];

const Ddu = () => {
  const navigate = useNavigate();
  const dossiers = useSelector((state) => state.dossiers);

  const declaration = dossiers
    .map((dossier) =>
      dossier.declaration.map((declaration, index) => {
        return {
          ...declaration,
          dateDossier: dossier.date,
          description: dossier.description,
          index,
        };
      })
    )
    .flat(Infinity);
console.log(declaration);
  let headData = [
    "Dossier",
    "Bureau",
    "Reférence",
    "T1",
    "Sommier",
    "Colis",
    "Poids",
    "Valeur douane ",
    "Droits & Taxes",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index} title={` ${item.description}`}>
      <td>{prefixe(item.dateDossier, item.dossier)}</td>
      <td>{item.bureau}</td>
      <td>{`${referenceDdu(item.regime, item.reference)} - ${date(
        item.date
      )}`}</td>

      <td>{item.t1 ? `${item.t1.numero}/${annee(item.t1.date)}` : "-"}</td>
      <td>{item.sommier ? `${item.sommier}/${annee(item.t1.date)}` : "-"}</td>
      <td>{nombre(item.nombre)}</td>

      <td>{nombre(item.poids)}</td>

      <td>{nombre(item.valeur)}</td>
      <td>{nombre(item.total)}</td>

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
            navigate(`/douane/ddu/${item.reference}`, { state: item })
          }
        />{" "}
        /
        <Icon
          path={mdiSquareEditOutline}
          size={0.6}
          title="Editer"
          onClick={() =>
            navigate(`/douane/ddu/${item.reference}`, { state: item })
          }
        />{" "}
        /
        <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() =>
            navigate(`/douane/ddu/${item.reference}/destroy`, { state: item })
          }
        />{" "}
      </td>
    </tr>
  );
  const renderLink = (item, index) => (
    <div className="item" key={index}    onClick={() => navigate(`${item.route}`)}>
      <Icon
        path={item.icon}
        size={0.8}
        color="var(--main-color)"
     
      />
      <span>{item.content}</span>
    </div>
  );
  const renderDdu = (
    <div className="" style={{ marginTop: 5 }}>
      <div className="dossier  col-12">
        {/*renderDdu */}
        <fieldset className="card entite col-12 ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Icon
              path={mdiFileDocumentCheckOutline}
              size={0.8}
              color={"var(--main-color)"}
            />
            <span>Bon à enlever</span>{" "}
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
              content={link}
              // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
              render={renderLink}
            />
          </legend>

          <Table
            headData={headData}
            renderHead={renderHead}
            bodyData={declaration}
            renderBody={renderBody}
          />
          <div className="pr-row"></div>
        </fieldset>
      </div>
    </div>
  );
  return (
    <div className="">
      <div className="card">
        <Title title="DDU's (Détails)" />
      </div>
      {renderDdu}
    </div>
  );
};
export default Ddu;
