import { mdiSquareEditOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Fieldset from "../../components/fieldset/Fieldset";
import Table from "../../components/table/Table";
import { annee, date, nombre } from "../../helpers/render";

const PrintBL = (props) => {
  const { dossier } = props;
  // const state = useSelector((state) => state);
  const params = useParams();
  // const { dossiers } = state;
  // const init = dossiers.filter((dossier) => dossier.numero === params.blId)[0];
  console.log(dossier);

  const totalDdu =
    dossier &&
    dossier.declaration.reduce(
      (total, curr) => {
        return {
          nombre: total.nombre + parseInt(curr.nombre),
          poids: total.poids + parseInt(curr.poids),
        };
      },
      { nombre: 0, poids: 0 }
    );

  let headDataDdu = [
    "Nombre",
    "Type",
    "Désignation",
    "Poids (Kg)",
    "Référence Douane",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBodyDdu = (item, index) => (
    <tr className="col-12" key={index} title={`Dossier N° ${item.dossier}`}>
      <td className="col-1">{item.type && nombre(item.nombre)}</td>
      <td className="col-2">{item.type && item.type.toUpperCase()}</td>
      <td className="col-4">{item.type && item.designation.toUpperCase()}</td>
      <td className="col-2">{item.type && `${nombre(item.poids)}`}</td>
      <td className="col-3">
        {item.type &&
          `${item.regime} (${item.reference.toUpperCase()}) - ${date(
            item.date
          )}`}
      </td>
    </tr>
  );
  const renderFooterDdu = (
    <tr>
      <td colSpan={3} style={{ border: 0 }}></td>
      <th>{totalDdu && nombre(totalDdu.nombre)}</th>
      <td style={{ border: 0 }}></td>
      <th>{totalDdu && `${nombre(totalDdu.poids)}`}</th>
    </tr>
  );
  const renderRecept = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        color: "var(--main-color)",
        marginBottom: 100,
      }}
    >
      <p>(Visa)</p>
    </div>
  );
  const renderLivreur = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <p>(Visa)</p>
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid var(--main-color) ",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          Nom : {dossier.bl && dossier.bl.livreur}
        </div>
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid var(--main-color) ",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          Signature :
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <h2
        className="col-5"
        style={{
          color: "var(--main-color)",
          textTransform: "uppercase",
          padding: "0 5px",
        }}
      >
        Bordereau de Livraison
      </h2>

      <div style={{ display: "flex" }}>
        <Fieldset
          className="col-1"
          legend={"N°"}
          content={dossier.bl ? dossier.bl.numero : "-"}
        />
        <Fieldset
          className="col-2"
          legend={"Date"}
          content={dossier.bl ? date(dossier.bl.date) : "-"}
        />
        <Fieldset
          className="col-2"
          legend={"Références"}
          content={
            dossier.bl ? `380/${dossier.numero}/${annee(dossier.bl.date)}` : "-"
          }
        />
      </div>
      <div style={{ display: "flex" }}>
        <Fieldset
          className="col-4"
          legend={"Destinataire"}
          content={dossier.bl ? dossier.client.nom.toUpperCase() : "-"}
        />
        <Fieldset
          className="col-3"
          legend={"Document"}
          content={dossier.document.toUpperCase()}
        />
        <Fieldset
          className="col-3"
          legend={"Transport(*)"}
          content={`${dossier.transport.toUpperCase()} - ${date(
            dossier.arrivee
          )}`}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Fieldset
          className="col-4"
          legend={"Colis"}
          content={`${totalDdu.nombre} ${dossier.type.toUpperCase()}`}
        />
        <Fieldset
          className="col-2"
          legend={"Poids"}
          content={`${nombre(totalDdu.poids)} KG`}
        />
        <Fieldset
          className="col-6"
          legend={"Commis"}
          content={dossier.bl ? dossier.bl.livreur : "-"}
        />
      </div>

      <div style={{ display: "flex" }}>
        <Fieldset
          className="col-12"
          legend={"Spécificatons"}
          content={
            <Table
              headData={headDataDdu}
              renderHead={renderHead}
              bodyData={dossier.declaration}
              renderBody={renderBodyDdu}
            />
          }
        />
      </div>
      <div className="col-12 bl-footer">
        <div style={{ display: "flex" }}>
          <Fieldset
            style={{ height: 80 }}
            className="col-12"
            legend={"Observations"}
            content={""}
          />
        </div>

        <div style={{ display: "flex" }}>
          <Fieldset
            className="col-6"
            legend={"Réceptionnaire"}
            content={renderRecept}
          />
          <Fieldset
            className="col-6"
            legend={"Livreur"}
            content={renderRecept}
          />
        </div>
      </div>
    </div>
  );
};

export default PrintBL;
