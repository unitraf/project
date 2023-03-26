import {
  mdiFileOutline,
  mdiPrinterSearch,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import Table from "../../components/table/Table";
import { annee, date, mois, nombre } from "../../helpers/render";
import "./bl.css";
const BLForm = (props) => {
  const navigate = useNavigate();
  const { bl, setBl, dossier } = props;
  console.log(bl, dossier);

const totalDdu = dossier[0]&&dossier[0].declaration.reduce((total, curr)=>{
 
  return {nombre:total.nombre+parseInt(curr.nombre), poids: total.poids+parseInt(curr.poids)}
},{nombre:0, poids:0})

  const handleChange = (e) => {
    console.log(e.target.value);
    setBl({ ...bl, [e.target.name]: e.target.value });
  };
  // Dossier Table render
  let headDataDossier = [
    "N° Trans.",
    "Date",
    "Réf. Client",
    "Destinataire",

    "Nombre",
    "Type",
    "Document",
    "Transporteur",
    "Mode",
    "#",
  ];
  const renderHeadDossier = (item, index) => <th key={index}>{item}</th>;

  const renderBodyDossier = (item, index) => (
    <tr key={index}>
      <td>{`${item.numero}/${annee(item.date)}`}</td>
      <td>{mois(item.date)}</td>
      <td>{item.reference ? item.reference : "-"}</td>
      <td>{item.client.nom.toUpperCase()}</td>

      <td>{item.nombre}</td>
      <td>{item.type.toUpperCase()}</td>
      <td>{item.document.toUpperCase()}</td>
      <td>{item.transport.toUpperCase()}</td>
      <td>{item.mode.toUpperCase()}</td>

      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          margin: 0,
          border: 0,
          marginTop: 5,
        }}
      >
        <Icon
          path={mdiPrinterSearch}
          size={0.6}
          title="Aperçu"
          onClick={() => {
            console.log("Preview for print", item);
            // setShowModal(true);
          }}
        />{" "}
        /
        <Link to={`/transit/dossiers/${item.numero}`}>
          {" "}
          <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
        </Link>
      </td>
    </tr>
  );

  // DDu Table render

  let headDataDdu = [
    "Régime",
    "Reférence",
    "Date",
    "Nombre",
    "Nature",
    "Poids",
    "Désignation",
    "#",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBodyDdu = (item, index) => (
    <tr key={index} title={`Dossier N° ${item.dossier}`}>
      <td>{item.regime}</td>
      <td>{item.reference?item.reference.toUpperCase():"-"}</td>
      <td>{date(item.date)}</td>

      <td>{nombre(item.nombre)}</td>
      <td>{item.type?item.type.toUpperCase():"-"}</td>
      <td>{`${nombre(item.poids)}`}</td>
      <td>{item.designation?item.designation.toUpperCase():"-"}</td>

      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          margin: 0,
          border: 0,
          marginTop: 5,
        }}
      >
        <Link to={`/transit/ddu/${item.reference}`}>
          {" "}
          <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
        </Link>
      </td>
    </tr>
  );
  const renderFooterDdu =(
    <tr>
      <td colSpan={3} style={{border:0}}>

      </td>
      <th >
{totalDdu&&nombre( totalDdu.nombre)}
      </th>
      <td  style={{border:0}}>

      </td>
      <th >
{totalDdu&&`${nombre(totalDdu.poids)}`}
      </th>
    </tr>
  )

  return (
    <Form method="post" id="bl-form">
      {/* ligne 1 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="number"
            name="numero"
            autoComplete="off"
            value={bl.numero}
            onChange={handleChange}
            required
          />

          <label htmlFor={"numero"}>N° Bon</label>
        </div>
        <div className="inputBox col-3">
          <input
            type="date"
            name="date"
            autoComplete="off"
            defaultValue={bl.date}
          />
          <label htmlFor={"date"}>Date</label>
        </div>
        <div className="inputBox col-3">
          <input
            type="number"
            name="dossier"
            autoComplete="off"
            value={bl.dossier}
            onChange={handleChange}
            required
          />

          <label htmlFor={"dossier"}>N° Dossier</label>
        </div>
      </div>

 
      {/* ligne 2 */}
      {dossier[0]&&<div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <fieldset className="col-12">
          <legend>Spécifications</legend>
          <Table
            headData={headDataDossier}
            renderHead={renderHeadDossier}
            bodyData={dossier}
            renderBody={renderBodyDossier}
          />
        </fieldset>
      </div> }
      
      {/* ligne 3 */}
      { dossier[0]&& <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <fieldset className="col-12">
          <legend>Déclaration(s)</legend>
          <Table
            headData={headDataDdu}
            renderHead={renderHead}
            bodyData={dossier[0] ? dossier[0].declaration : []}
            renderBody={renderBodyDdu}
            renderFooter={renderFooterDdu}
          />
        </fieldset>
      </div>}
     
      {/* ligne 4 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-6">
          <input
            type="text"
            name="livreur"
            value={bl.livreur}
            onChange={handleChange}
            required
          />

          <label htmlFor={"dossier"}>Commis Livreur</label>
        </div>
      </div>
      {/* Buutton */}
      <div>
        <button className="button" type="submit">
          Valider
        </button>

        <button
          className="button"
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Annuler
        </button>
      </div>
    </Form>
  );
};

export default BLForm;
