import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Form,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { facture as init } from "../init";
import Listing from "../../../components/listing/Listing";
import { generateSecef } from "../../../helpers/fonctions";
import { anneeMois } from "../../../helpers/render";
import { updateDossier } from "../../../redux/dossier/action";
import SnackBar, { displaySnack } from "../../../components/snackbar/SnackBar";


const DestroyForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { state } = useLocation();
  const [avoir, setAvoir] = useState(init);
  console.log(state);
  const handleChange = (e) => {
    setAvoir({ ...avoir, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData);
    let avoir = {...data, facture: state.facture, prestations:state.prestations}
    let dossier = {...state, facture:null, avoirs:[...state.avoirs || [],avoir]}
    dispatch(updateDossier(dossier))
    displaySnack()
    setTimeout(() => {
      
      navigate('/facturation/avoirs')
    }, 3000);
    console.log("Avoir",avoir);
    console.log("Dossier",dossier);
  };
  const renderSecef = (item, index) => (
    <div key={index} className="item" style={{ display: "flex" }}>
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();

          setAvoir({ ...avoir, ...generateSecef() });
        }}
      >
        Générer
      </button>
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();

          setAvoir({ ...avoir, code: "" });
        }}
      >
        Effacer
      </button>
    </div>
  );

  return (
    <>
      <div className="header-title form">Avoir (Suppression facturation)</div>
      <Form method="post" id="avoir-form" onSubmit={handleSubmit}>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="col-10" style={{ display: "flex" }}>
            <div className="inputBox col-3">
              <input
                type="text"
                name="nim"
                autoComplete="off"
                value={avoir.nim}
                onChange={handleChange}
                required
              />
              <label htmlFor={"nim"}>Nim</label>
            </div>
            <div className="inputBox col-2">
              <input
                type="text"
                name="compteur"
                autoComplete="off"
                value={avoir.compteur}
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
                value={avoir.numero}
                onChange={handleChange}
                required
              />
              <label htmlFor={"numero"}>Numéro</label>
            </div>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="reference"
              autoComplete="off"
              value={`${anneeMois(state.facture.date)}/${state.facture.numero}`}
              onChange={handleChange}
            />
            <label htmlFor={"reference"}>Ref. facture</label>
          </div>
        </div>
        {/* ligne 2 */}
        <div
          className="col-12"
          style={{
            display: "flex",
            marginBottom: 20,
            justifyContent: "space-between",
          }}
        >
          <div className="col-9" style={{ display: "flex" }}>
            <div className="inputBox col-5">
              <input
                type="text"
                name="code"
                autoComplete="off"
                value={avoir.code}
                onChange={handleChange}
                required
              />
              <label htmlFor={"code"}>Code</label>
              <Listing content={[""]} render={renderSecef} />
            </div>
            <div className="inputBox col-3">
              <input
                type="date"
                name="date"
                autoComplete="off"
                value={avoir.date}
                onChange={handleChange}
              />
              <label htmlFor={"date"}>Date</label>
            </div>
            <div className="inputBox col-2">
              <input
                type="time"
                name="heure"
                autoComplete="off"
                value={avoir.heure}
                onChange={handleChange}
              />
              <label htmlFor={"heure"}>Heure</label>
            </div>
            <div className="inputBox col-1">
              <input
                type="text"
                name="seconde"
                autoComplete="off"
                value={avoir.seconde}
                onChange={handleChange}
              />
              <label htmlFor={"seconde"}>Seconde</label>
            </div>
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
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Annuler
          </button>
        </div>
      </Form>
      <SnackBar message={`Avoir N° ${anneeMois(avoir.date)}/${avoir.numero} établis`}/>
    </>
  );
};

export default DestroyForm;
