import { mdiPlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useLocation, useNavigate, useParams } from "react-router-dom";
import Listing from "../../../components/listing/Listing";
import { removeClassName } from "../../../helpers/fonctions";
import { addBanque, addSociete } from "../../../redux/societe/action";
import { societe as init } from "./init";
import './societe.css'
const Banque = () => {
  const banques = useSelector(state => state.societe.banques)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation()
  const params = useParams()
  const [societe, setSociete] = useState(init)

  const handleChange = (e) => {
    setSociete({ ...societe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let dataForm = new FormData(e.target)
    let societe = Object.fromEntries(dataForm)
    societe && dispatch(addSociete(societe)) && navigate(-1)

  }
  const renderBanque = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setSociete({ ...societe, banque: item.nom, rib: item.rib, });
      }}
    >
      <span>{item.nom}</span>
    </div>
  );

  useEffect(() => {
    location.state && setSociete(location.state)


  }, [location.state])

  return (
    <div>
      <div className="header-title" style={{ marginBottom: 30 }}>
        Mis à jour (Infos)

      </div>

      <Form method="post" id="societe-form" onSubmit={handleSubmit} >
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="number"
              name="nif"
              autoComplete="off"
              value={societe.nif}
              onChange={handleChange}
              required
            />

            <label htmlFor={"nif"}>Nif</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              name="rccm"
              autoComplete="off"
              value={societe.rccm}
              onChange={handleChange}
              required
            />
            <label htmlFor={"rccm"}>Rccm</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="agrement"
              autoComplete="off"
              value={societe.agrement}
              onChange={handleChange}
              required
            />
            <label htmlFor={"agrement"}>N° Agrément</label>
          </div>


        </div>
        {/* ligne 2 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="text"
              name="tel1"
              autoComplete="off"
              value={societe.tel1}
              onChange={handleChange}
              required
            />
            <label htmlFor={"tel1"}>Téléphone L1</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="tel2"
              autoComplete="off"
              value={societe.tel2}
              onChange={handleChange}
              required
            />
            <label htmlFor={"tel2"}>Téléphone L2</label>


          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="fax"
              autoComplete="off"
              value={societe.fax}
              onChange={handleChange}
              required
            />
            <label htmlFor={"fax"}>Fax</label>


          </div>

        </div>
        {/* ligne 3 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="text"
              name="bp"
              autoComplete="off"
              value={societe.bp}
              onChange={handleChange}
              required
            />
            <label htmlFor={"bp"}>Bp</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              name="adresse1"
              autoComplete="off"
              value={societe.adresse1}
              onChange={handleChange}
              required
            />
            <label htmlFor={"adresse1"}>Adresse</label>


          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="adresse2"
              autoComplete="off"
              value={societe.adresse2}
              onChange={handleChange}
              required
            />
            <label htmlFor={"adresse2"}>Région/Pays</label>


          </div>

        </div>
        {/* ligne 4 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="text"
              name="banque"
              autoComplete="off"
              value={societe.banque}
              onChange={handleChange}
              required
            />
            <label htmlFor={"banque"}>Banque/Défaut</label>
            <Listing
              content={banques}
              render={renderBanque}
              footer={
                <Icon
                  path={mdiPlusBox}
                  size={0.8}
                  onClick={() => {
                    removeClassName("footer-item", "actif")
                    navigate("/parametre/societe/newBanque")
                  }
                  }
                />}
            />
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              name="rib"
              autoComplete="off"
              value={societe.rib}
              onChange={handleChange}
              required
            />
            <label htmlFor={"rib"}>N° Rib</label>


          </div>
          {/* <div className="inputBox col-3">
          <input
            type="text"
            name="adresse2"
            autoComplete="off"
            value={societe.adresse2}
            onChange={handleChange}
            required
          />
          <label htmlFor={"adresse2"}>Région/Pays</label>
         
          
        </div> */}

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
      </Form></div>
  );
};

export default Banque;
