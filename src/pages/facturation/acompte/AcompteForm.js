import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import Listing from "../../../components/listing/Listing";
import DetailsTable from "../DetailsTable";
import { acompte as init } from "./init";
import { anneeMois, prefixe } from "../../../helpers/render";
import SnackBar from "../../../components/snackbar/SnackBar";

const AcompteForm = (props) => {
  const state = useSelector((state) => state);
  const { dossiers, prospections } = state;
  const acompteList = prospections.devis.map(item=> item.acompte || []).flat(Infinity)
  console.log(acompteList);
  const { devis, setDevis } = props;
  const [acompte, setAcompte] = useState(init);
  const accHt =
    acompte.taux && (parseFloat(acompte.taux) * parseFloat(devis.ht)) / 100;
  const acctva =
    acompte.taux && (parseFloat(acompte.taux) * parseFloat(devis.tva)) / 100;
  const accTtc =
    acompte.taux && (parseFloat(acompte.taux) * parseFloat(devis.net)) / 100;

  console.log(devis);
  const renderReglement = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        console.log(item);
        setAcompte({ ...acompte, ...item });
      }}
    >
      <span>{item.libelle}</span>
    </div>
  );
  const renderPaiement = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        console.log(item);
        setAcompte({ ...acompte, paiement: item });
      }}
    >
      <span>{item}</span>
    </div>
  );
  const navigate = useNavigate();

  const handleAcompte = (e) => {
    setAcompte({ ...acompte, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
  };
  return (
    <>
    
    <>
     {/* ligne 1 */}
     <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="col-10" style={{ display: "flex" }}>
          <div className="inputBox col-3">
            <input
              type="text"
              autoComplete="off"
              defaultValue={devis.nim}
              required
            />
            <label htmlFor={"nim"}>Nim</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              autoComplete="off"
              defaultValue={devis.compteur}
              required
            />
            <label htmlFor={"compteur"}>Compteur</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="devis"
              autoComplete="off"
              value={`${anneeMois(devis.date)}/${devis.numero}`}
              onChange={() => {
                console.log(
                  `${anneeMois(devis.date)}/${devis.numero}`.split("/")
                );
              }}
              required
            />
            <label htmlFor={"devis"}>Dévis</label>
          </div>
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            autoComplete="off"
            defaultValue={devis.status}
            required
          />
          <label htmlFor={"status"}>Status</label>
        </div>
      </div>
      {/* ligne 2 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="col-10" style={{ display: "flex" }}>
          <div className="inputBox col-2">
            <input
              type="text"
              name="dossier"
              autoComplete="off"
              value={`${prefixe(acompte.date)}/${dossiers.length + 1}`}
              onChange={handleAcompte}
              required
            />
            <label htmlFor={"dossier"}>Dossier</label>
          </div>

          <div className="inputBox col-6">
            <input
              type="text"
              name="prospect"
              autoComplete="off"
              defaultValue={devis.prospect.nom}
              required
            />
            <label htmlFor={"prospect"}>Client</label>
          </div>
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="reglement"
            autoComplete="off"
            defaultValue={devis.reglement}
          />
          <label htmlFor={"reglement"}>Mode de reglément</label>

          <Listing content={devis.reglements} render={renderReglement} />
        </div>
      </div>
      {/* render Details */}
      <div className="col-12" style={{ display: "flex" }}>
        <DetailsTable dossier={devis} setDossier={setDevis} />
      </div>
    </>
    <Form method="post" id="devis-form" onSubmit={handleSubmit}>
     
      {/* Acompte détails  */}

      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        {/* start hidden*/}
          <input
            type="hidden"
            name="numero"
            autoComplete="off"
            value={acompteList.length+1}
            onChange={handleAcompte}
            required
          />
          <input
            type="hidden"
            name="date"
            autoComplete="off"
            value={acompte.date}
            onChange={handleAcompte}
            required
          />
      
      {/* end hidden */}
        <div className="inputBox col-2">
          <input
            type="number"
            name="taux"
            autoComplete="off"
            value={acompte.taux}
            onChange={handleAcompte}
            required
          />
          <label htmlFor={"taux"}>Acompte (%)</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="ht"
            autoComplete="off"
            value={accHt}
            onChange={handleAcompte}
            // required
          />
          <label htmlFor={"ht"}>Acompte (Ht)</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="tva"
            autoComplete="off"
            value={ acctva }
            onChange={handleAcompte}
            // required
          />
          <label htmlFor={"tva"}>Acompte (Tva)</label>
        </div>

        <div className="inputBox col-2">
          <input
            type="text"
            name="ttc"
            autoComplete="off"
            value={accTtc}
            onChange={handleAcompte}
            // required
          />
          <label htmlFor={"ttc"}>Acompte (Ttc)</label>
        </div>
      </div>
      {/* ligne 2 */}

      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="text"
            name="paiement"
            autoComplete="off"
            value={acompte.paiement}
            onChange={handleAcompte}
            required
          />
          <label htmlFor={"paiement"}>Paiement</label>
          <Listing
            content={["Chèque", "Espèces", "Virement"]}
            render={renderPaiement}
          />
        </div>
        <div className="inputBox col-5">
          <input
            type="text"
            name="mentions"
            autoComplete="off"
            value={acompte.mentions}
            onChange={handleAcompte}
            required
          />
          <label htmlFor={"mentions"}>Mentions à incorporer ...</label>
        </div>
      </div>

      {/* Button */}
      <div style={{ display: "flex" }}>
        <button
          // disabled={devis.status === "Validé" && true}
          className="button"
          type="submit"
          // onClick={displaySnack}
        >
          Valider
        </button>

        <button
          className="button"
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Quitter
        </button>
      </div>
    </Form>
    <SnackBar message ={"Facture d'acompte établis"}/>
    </>);
};

export default AcompteForm;
