import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, useNavigate, useParams } from "react-router-dom";
import { addBanque, deleteBanque, updateBanque } from "../../../redux/societe/action";
import { banque as init } from "./init";
import './societe.css'
const Banque = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const params = useParams()
  const [banque, setBanque] = useState(init)

  const handleChange = (e) => {
    setBanque({ ...banque, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let dataForm = new FormData(e.target)
    let banque = Object.fromEntries(dataForm)
    banque && dispatch(addBanque(banque)) && navigate(-1)

  }

  return (
    <div>
      <div className="header-title" style={{ marginBottom: 30 }}>
        Nouvelle (Banque)

      </div>

      <Form method="post" id="banque-form" onSubmit={handleSubmit} >
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="text"
              maxLength={3}
              name="code"
              autoComplete="off"
              value={banque.code}
              onChange={handleChange}
              required
            />

            <label htmlFor={"code"}>Code</label>
          </div>
          <div className="inputBox col-5">
            <input
              type="text"
              name="nom"
              autoComplete="off"
              value={banque.nom}
              onChange={handleChange}
              required
            />
            <label htmlFor={"nom"}>Nom</label>
          </div>


        </div>

        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-5">
            <input
              type="text"
              name="rib"
              autoComplete="off"
              value={banque.rib}
              onChange={handleChange}
              required
            />
            <label htmlFor={"rib"}>N° Rib</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="compte"
              autoComplete="off"
              value={banque.compte}
              onChange={handleChange}
              required
            />
            <label htmlFor={"compte"}>Compte</label>


          </div>
          {/* <Checkbox name="defaut" label="Banque par défaut" onChange={e=> 
          setBanque({...banque,[ e.target.name]:e.target.checked })
         } /> */}
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
