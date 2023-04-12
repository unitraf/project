import { mdiPlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import Listing from "../../../components/listing/Listing";
import { getTotal, groupBy, removeClassName } from "../../../helpers/fonctions";
import DetailsTable from "../DetailsTable";
import { prestation as init } from "./init";
import InputForm from "../InputForm";
import SnackBar from "../../../components/snackbar/SnackBar";

const DevisForm = (props) => {
  const state = useSelector((state) => state);
  const { articles } = state;
  const { devis, setDevis, status } = props;
  const [prestation, setPrestation] = useState(init);
  let taxe =
    prestation.tva &&
    prestation.valeur &&
    (parseFloat(prestation.quantite) *
      parseFloat(prestation.valeur) *
      parseFloat(prestation.tva)) /
      100;
  let montant =
    prestation.valeur &&
    parseFloat(prestation.quantite) * parseFloat(prestation.valeur);
  //  total
  const prestations =
    devis.prestations && groupBy([...(devis.prestations || [])], "rubrique");
  const debours =
    devis.prestations && getTotal(prestations["débours"], "montant");
  const interventions =
    devis.prestations && getTotal(prestations["interventions"], "montant");
  const tva = devis.prestations && getTotal(devis.prestations, "taxe");

  console.log(devis, debours, interventions, tva);

  const renderArticles = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        console.log(item);
        setPrestation({ ...prestation, ...item });
      }}
    >
      <span>{item.libelle}</span>
    </div>
  );
  const navigate = useNavigate();
  const handleDevis = (e) => {
    setDevis({ ...devis, [e.target.name]: e.target.value });
  };
  const handlePrestation = (e) => {
    setPrestation({ ...prestation, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    const net = debours + interventions + tva;
    const ht = debours + interventions;

    setDevis({ ...devis, debours, interventions, ht, tva, net });
  };
  return (
    <>
      <Form method="post" id="devis-form" onSubmit={handleSubmit}>
        {/* InputForm */}
        <InputForm data={devis} setData={setDevis} status={status} />
        {/* ligne 1 */}

        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-4">
            <input
              type="text"
              name="libelle"
              autoComplete="off"
              value={prestation.libelle}
              onChange={handlePrestation}
              // required
            />
            <label htmlFor={"libelle"}>Libellé du Service</label>
            <Listing
              content={articles}
              render={renderArticles}
              footer={
                <Icon
                  path={mdiPlusBox}
                  size={0.8}
                  onClick={() => {
                    removeClassName("footer-item", "actif");
                    navigate("/facturation/prestations/newArticle");
                  }}
                />
              }
            />
          </div>
          <div className="inputBox col-1">
            <input
              type="text"
              name="unite"
              autoComplete="off"
              value={prestation.unite}
              onChange={handlePrestation}
              required
            />
            <label htmlFor={"unite"}>Unité</label>
          </div>
          <div className="inputBox col-1">
            <input
              type="number"
              name="quantite"
              autoComplete="off"
              value={prestation.quantite}
              onChange={handlePrestation}
              required
            />
            <label htmlFor={"quantite"}>Qté</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="valeur"
              autoComplete="off"
              value={prestation.valeur}
              onChange={handlePrestation}
              // required
            />
            <label htmlFor={"valeur"}>Prix Unit.</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="number"
              name="tva"
              autoComplete="off"
              value={taxe}
              onChange={handlePrestation}
              // required
            />
            <label htmlFor={"tva"}>Taxe</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="number"
              name="montant"
              autoComplete="off"
              value={montant}
              onChange={handlePrestation}
              // required
            />
            <label htmlFor={"montant"}>Montant</label>
          </div>
        </div>
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <button
            // disabled={devis.status === "Validé" && true}
            className="button"
            onClick={(e) => {
              e.preventDefault();
              let taxe = prestation.tva
                ? (parseFloat(prestation.quantite) *
                    parseFloat(prestation.valeur) *
                    parseFloat(prestation.tva)) /
                  100
                : "-";
              let montant =
                parseFloat(prestation.quantite) * parseFloat(prestation.valeur);
              prestation.code &&
                prestation.valeur &&
                setDevis({
                  ...devis,
                  prestations: [
                    ...(devis.prestations || []),
                    { ...prestation, taxe, montant },
                  ],
                });
              prestation.code && prestation.valeur && setPrestation(init);
            }}
          >
            Ajouter
          </button>
        </div>
        {/* render Details */}
        <div className="col-12" style={{ display: "flex" }}>
          <DetailsTable dossier={devis} setDossier={setDevis} />
        </div>

        {/* Button */}
        <div style={{ display: "flex" }}>
          <button
            // disabled={devis.status === "Validé" && true}
            className="button"
            type="submit"
            // onClick={() => setDevis({ ...devis, status: "Validé" })}
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
      <SnackBar message={`Dévis ${devis.status} enrégistrer`} />
    </>
  );
};

export default DevisForm;
