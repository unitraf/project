import React from "react";
import { useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import Listing from "../../components/listing/Listing";
import { getTotal, groupBy } from "../../helpers/fonctions";
import { annee, nombre } from "../../helpers/render";

const FactureForm = (props) => {
  const { facture, setFacture, dossier } = props;

  const prestations =
    dossier && groupBy([...(dossier.prestations || [])], "rubrique");
    const listDebours = dossier&&prestations['Débours']
    const listInterv = dossier&&prestations['Interventions']
 
  // const totalDebours = totalDebours?getTotal(listDebours, 'valeur'):0
  // const totalInterv =totalInterv?getTotal(listInterv, 'valeur'):0
  console.log(prestations);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFacture({ ...facture, [e.target.name]: e.target.value });
  };

  const renderDetails = (
    <table className="table details-table" style={{}}>
      <thead>
        <tr>
          <th
          className="col-2"

          >
            Rubrique
          </th>
          <th className="col-4">Désignation</th>
          <th className="col-1">Qté</th>
          <th className="col-2">Prix Unit.</th>
          <th className="col-2">Taxe</th>
          <th className="col-2" >Montant</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: 12 }}>
        {/* Deb */}
        <tr className="col-12">
          <td className="col-2 rubrique">Débours</td>
        </tr>
        {listDebours&&listDebours.map((item, index) => (
          <tr key={index} className="col-12" style={{}}>
            <td className="col-2" style={{ border: 0, boxShadow:'none' }}>
              #{index + 1}
            </td>
            <td
              className="col-4"
              style={{ textAlign: "left", paddingLeft: 10 }}
            >
              {item.libelle}
            </td>
            <td className="col-1">1</td>
            <td
              className="col-2"
              style={{ textAlign: "right", paddingRight: 10 }}
            >
               {nombre(item.valeur) }
            </td>
            <td
              className="col-2"
              style={{ textAlign: "right", paddingRight: 10 }}
            >
              {" "}
              Taxe
            </td>
            <td
              className="col-2"
              style={{ textAlign: "right", paddingRight: 10 }}
            >
              Montant
            </td>
          </tr>
        ))}
        <tr className="col-12">
          <td className="col-2 rubrique">Interventions</td>
        </tr>
        {/* Intervention */}
        {listInterv&&listInterv.map((item, index) => (
          <tr key={index} className="col-12" style={{}}>
            <td className="col-2" style={{ border: 0, boxShadow:'none' }}>
              #{index + 1}
            </td>
            <td
              className="col-4"
              style={{ textAlign: "left", paddingLeft: 10 }}
            >
             {item.libelle}
            </td>
            <td className="col-1">1</td>
            <td
              className="col-2"
              style={{ textAlign: "right", paddingRight: 10 }}
            >
               {nombre(item.valeur)}
            </td>
            <td
              className="col-2"
              style={{ textAlign: "right", paddingRight: 10 }}
            >
              Taxes
            </td>
            <td
              className="col-2"
              style={{ textAlign: "right", paddingRight: 10 }}
            >
              Montant
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
        <th colSpan={3}>
          Total
        </th>
        <th  style={{ textAlign: "right", paddingRight: 10 }}>
{dossier&&nombre(getTotal(dossier.prestations,'valeur')) }
        </th>
        <th  style={{ textAlign: "right", paddingRight: 10 }}>
{dossier&&nombre(getTotal(dossier.prestations,'valeur')) }
        </th>
        <th  style={{ textAlign: "right", paddingRight: 10 }}>
{dossier&&nombre(getTotal(dossier.prestations,'valeur')) }
        </th>

        </tr>
      </tfoot>
    </table>
  );
  return (
    <Form method="post" id="facture-form">

      {/* ligne 1 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="text"
            name="nim"
            autoComplete="off"
            value={facture.nim}
            onChange={handleChange}
            required
          />
          <label htmlFor={"nim"}>Nim</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="number"
            name="compteur"
            autoComplete="off"
            value={facture.compteur}
            onChange={handleChange}
            required
          />
          <label htmlFor={"compteur"}>Compteur</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="number"
            name="numero"
            autoComplete="off"
            value={facture.numero}
            onChange={handleChange}
            required
          />
          <label htmlFor={"numero"}>Numéro</label>
        </div>
      </div>
      {/* ligne 2 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20, justifyContent:"space-between" }}>
        <div className="col-9" style={{display: "flex"}}>
        <div className="inputBox col-4">
          <input
            type="text"
            name="code"
            autoComplete="off"
            value={facture.code}
            onChange={handleChange}
            required
          />
          <label htmlFor={"code"}>Code</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="date"
            name="date"
            autoComplete="off"
            value={facture.date}
            onChange={handleChange}
          />
          <label htmlFor={"date"}>Date</label>
        </div>
        <div className="inputBox col-1">
          <input
            type="time"
            name="heure"
            autoComplete="off"
            value={facture.heure}
            onChange={handleChange}
          />
          <label htmlFor={"heure"}>Heure</label>
        </div>
        </div>
        <div className="col-2" >
        <div className="inputBox col-12">
          <input
            type="date"
            name="echeance"
            autoComplete="off"
            value={facture.echeance}
            onChange={handleChange}
          />
          <label htmlFor={"echeance"}>Echéance</label>
        </div>
        </div>
      </div>
      {/* ligne 3 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="number"
            name="dossier"
            autoComplete="off"
            value={facture.dossier}
            onChange={handleChange}
            required
          />
          <label htmlFor={"dossier"}>Dossier</label>
          {/* <Listing
           content={dossiers}
           render={renderLibelles}
         /> */}
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="annee"
            autoComplete="off"
            value={facture.annee}
            onChange={handleChange}
            required
          />
          <label htmlFor={"annee"}>Année</label>
        </div>
        <div className="inputBox col-4">
          <input
            type="text"
            name="client"
            autoComplete="off"
            defaultValue={dossier && dossier.client.nom}
            required
          />
          <label htmlFor={"client"}>Client</label>
        </div>
      </div>
      {/* ligne 4 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="text"
            name="colis"
            autoComplete="off"
            defaultValue={
              dossier && `${nombre(dossier.nombre)} ${dossier.type}'s`
            }
          />
          <label htmlFor={"colis"}>Colis</label>
        </div>
        <div className="inputBox col-3">
          <input
            type="text"
            name="description"
            autoComplete="off"
            defaultValue={dossier && dossier.description}
            required
          />
          <label htmlFor={"description"}>Description</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="provenance"
            autoComplete="off"
            defaultValue={dossier && dossier.provenance}
          />
          <label htmlFor={"provenance"}>Provenance</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="document"
            autoComplete="off"
            defaultValue={dossier && dossier.document}
          />
          <label htmlFor={"document"}>Document</label>
        </div>
      </div>
      {/* ligne 5 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="text"
            name="poids"
            autoComplete="off"
            defaultValue={dossier && nombre(dossier.poids)}
          />
          <label htmlFor={"poids"}>Poids Brut</label>
        </div>

        <div className="inputBox col-2">
          <input
            type="text"
            name="description"
            autoComplete="off"
            defaultValue={dossier && nombre(dossier.poidsVol)}
            required
          />
          <label htmlFor={"description"}>Poids Vol.</label>
        </div>

        <div className="inputBox col-2">
          <input
            type="text"
            name="volume"
            autoComplete="off"
            defaultValue={dossier && dossier.volume}
          />
          <label htmlFor={"volume"}>Volume</label>
        </div>
        <div className="inputBox col-3">
          <input
            type="text"
            name="valeur"
            autoComplete="off"
            defaultValue={
              dossier && nombre(getTotal(dossier.declaration, "valeur"))
            }
          />
          <label htmlFor={"valeur"}>Valeur Douane</label>
        </div>
      </div>


      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
{renderDetails}
</div>
  {/* ligne  Totaux */}
  <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="text"
            name="debours"
            autoComplete="off"
            defaultValue={listDebours&&nombre(getTotal(listDebours, 'valeur')) }
          />
          <label htmlFor={"debours"}>Total Débours</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="interventions"
            autoComplete="off"
            defaultValue={listInterv&& nombre(getTotal(listInterv, 'valeur')) }
          />
          <label htmlFor={"interventions"}>Total Interv.</label>
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

export default FactureForm;
