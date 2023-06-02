import React, { useState } from "react";
import Title from "../../../components/title/Title";
import { Form, useNavigate } from "react-router-dom";
import Listing from "../../../components/listing/Listing";
import Icon from "@mdi/react";
import { useDispatch, useSelector } from "react-redux";
import { getTotal, removeClassName } from "../../../helpers/fonctions";
import { v4 as uuid } from "uuid";
import { mdiPlusBox } from "@mdi/js";
import { nombre, prefixe } from "../../../helpers/render";
import TreeViewReglements from "./TreeViewReglements";
import RadialBar from "../chart/RadialBar";
import { addReglement } from "../../../redux/reglement/action";
import { reglement as init } from "./init";

const NewReglements = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { clients, dossiers } = state;
  const [reglement, setReglement] = useState(init);
  const [affectation, setAffectation] = useState([]);
// Liste des dossiers facturé et validé?
  const dossiersFacture = dossiers.filter(
    (dossier) =>
      reglement.client &&
      dossier.client.nom === reglement.client &&
      dossier.facture
  );
  // calculs
  const totalPaiements = getTotal(
    dossiersFacture
      .map((dossier) => dossier.facture.paiements || [])
      .flat(Infinity),
    "montant"
  );

  const totalFactures = getTotal(
    dossiersFacture.map((dossier) => dossier.facture || []).flat(Infinity),
    "net"
  );
  const pourcentage =
    totalFactures && totalPaiements ? totalPaiements / totalFactures : 0;


  const restant = reglement.montant ? reglement.montant - totalPaiements : 0;
// Event control
  const handleChange = (e) => {
    setReglement({ ...reglement, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
    let factures = dossiersFacture.map((dossier) => dossier.facture.paiements&&{ ...dossier.facture,dossier:prefixe(dossier.date,dossier.numero)})
  console.log(factures);
 let reglement = {...Object.fromEntries(formData), uuid:uuid(), factures}
    dispatch(addReglement(reglement));
  };

  const renderClients = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setReglement({
          ...reglement,
          client: item.nom,
          paiement: item.reglement.reglement,
          mode: item.reglement.libelle,
          banque:item.reglement.banque?item.reglement.banque:"Caisse",
        });
      }}
    >
      <span>{item.nom}</span>
    </div>
  );

  return (
    <>
      <div className="card">
        <Title title="Regléments facture(s)" mb={20} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form
            method="post"
            id="reglement-form"
            onSubmit={handleSubmit}
            className="col-9"
          >
            {/* ligne 1 */}
            <div
              className="col-12"
              style={{ display: "flex", marginBottom: 20 }}
            >
              <div className="inputBox col-5">
                <input
                  type="text"
                  name="client"
                  value={reglement.client}
                  onChange={handleChange}
                />
                <label htmlFor={"client"}>Client</label>
                <Listing
                  content={clients}
                  render={renderClients}
                  footer={
                    <Icon
                      path={mdiPlusBox}
                      size={0.8}
                      onClick={() => {
                        removeClassName("footer-item", "actif");
                        navigate("/clients/newClient");
                      }}
                    />
                  }
                />
              </div>
              <div className="inputBox col-3">
                <input
                  type="text"
                  name="paiement"
                  autoComplete="off"
                  value={reglement.paiement}
                  onChange={handleChange}
                  required
                />

                <label htmlFor={"paiement"}>Moy. paiement</label>
              </div>
              <div className="inputBox col-4">
                <input
                  type="text"
                  name="mode"
                  autoComplete="off"
                  value={reglement.mode}
                  onChange={handleChange}
                  required
                />

                <label htmlFor={"mode"}>Mode de reglément</label>
              </div>
            </div>
            {/* ligne 2 */}
            <div
              className="col-12"
              style={{ display: "flex", marginBottom: 20 }}
            >
              <div className="inputBox col-2">
                <input
                  type="date"
                  name="date"
                  autoComplete="off"
                  value={reglement.date}
                  onChange={handleChange}
                  required
                />
                <label htmlFor={"date"}>Date</label>
              </div>
              <div className="inputBox col-3">
                <input
                  type="text"
                  name="reference"
                  autoComplete="off"
                  value={reglement.reference}
                  onChange={handleChange}
                  required
                />

                <label htmlFor={"reference"}>Reférence</label>
              </div>

              <div className="inputBox col-2">
                <input
                  type="text"
                  name="banque"
                  value={reglement.banque}
                  onChange={handleChange}
                />
                <label htmlFor={"banque"}>Banque</label>
                {/* <Listing
              content={societe.typeClients}
              render={renderTypeClient}
              footer={
                <Icon
                  path={mdiPlusBox}
                  size={0.8}
                  onClick={() => {
                    removeClassName("footer-item", "actif");
                    navigate("/reglements/type");
                  }}
                />
              }
            /> */}
              </div>
            </div>
            {/* ligne 3 */}
            <div
              className="col-12"
              style={{ display: "flex", marginBottom: 20 }}
            >
              <div className="inputBox col-2">
                <input
                  type="text"
                  name="montant"
                  autoComplete="off"
                  value={reglement.montant}
                  onChange={handleChange}
                  required
                />

                <label htmlFor={"montant"}>Montant</label>
              </div>
              <div className="inputBox col-2">
                <input
                  type="text"
                  name="credit"
                  autoComplete="off"
                  value={
                    totalPaiements
                      ? nombre(totalFactures - totalPaiements)
                      : nombre(totalFactures)
                  }
                  onChange={() => {}}
                  required
                />

                <label htmlFor={"reste"}>Total dû</label>
              </div>
              <div className="inputBox col-2">
                <input
                  type="text"
                  name="affecte"
                  autoComplete="off"
                  value={totalPaiements && nombre(totalPaiements)}
                  onChange={() => {}}
                  required
                />

                <label htmlFor={"affecte"}>Affecté</label>
              </div>
              <div className="inputBox col-2">
                <input
                  type="text"
                  name="restant"
                  autoComplete="off"
                  value={restant && nombre(restant)}
                  onChange={() => {}}
                  required
                />

                <label htmlFor={"reste"}>Restant</label>
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
          {pourcentage ? <RadialBar pourcentage={pourcentage} /> : ""}
        </div>
      </div>

      <fieldset
        className="card col-12 "
        style={{ marginTop: 10, marginLeft: 0, border: 0 }}
      >
        <legend className="card legend">Relévé de facturation</legend>
        <TreeViewReglements
          dossiers={dossiersFacture}
          reglement={reglement}
          affectation={affectation}
          setAffectation={setAffectation}
        />
      </fieldset>
    </>
  );
};

export default NewReglements;
