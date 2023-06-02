import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useLocation, useNavigate, useParams } from "react-router-dom";
import Listing from "../../../../components/listing/Listing";
import {
  addType,
  deleteType,
  updateType,
} from "../../../../redux/societe/action";
import { type as init } from "../init";
import "../societe.css";
import Title from "../../../../components/title/Title";
import SnackBar, {
  displaySnack,
} from "../../../../components/snackbar/SnackBar";
const TypeForm = () => {
  const dispatch = useDispatch();
  const modes = useSelector((state) => state.societe.reglements);
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [type, setType] = useState(init);

  const handleChange = (e) => {
    setType({ ...type, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  
    e.preventDefault();
    // let dataForm = new FormData(e.target)
    // let type = Object.fromEntries(dataForm)
    if (params.updateId) {
      displaySnack("Type clientèle mis à jour");
      type && dispatch(updateType(type));
    }
    if (params.destroyId) {
      displaySnack("Supression type clientèle ");
      type && dispatch(deleteType(type));
    }

    if (!params.destroyId && !params.updateId) {
      displaySnack("Nouveau type de clientèle  ajouter");

      type && dispatch(addType(type));
    }

    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };
  useEffect(() => {
    location.state && setType(location.state);
  }, [location.state]);

  const renderMode = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setType({ ...type, mode: item });
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
        setType({ ...type, paiement: item.libelle });
      }}
    >
      <span>{item.libelle}</span>
    </div>
  );

  return (
    <div className="card">
      <Title
        title={
          params.updateId
            ? "Clientèle (Mis à jour)"
            : params.destroyId
            ? "Clientèle (Supression)"
            : "Clientèle (Nouveau)"
        }
        mb={20}
      />
      <Form method="post" id="type-form" onSubmit={handleSubmit}>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="text"
              name="designation"
              autoComplete="off"
              value={type.designation}
              onChange={handleChange}
              required
            />
            <label htmlFor={"designation"}>Type</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              autoComplete="off"
              value={type.mode && type.mode.libelle}
              onChange={handleChange}
            />

            <label htmlFor={"mode"}>Mode de reglément</label>
            <Listing content={modes} render={renderMode} />
          </div>
        </div>
        {/* ligne 2 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="number"
              name="acompte"
              autoComplete="off"
              value={type.acompte}
              onChange={handleChange}
            />

            <label htmlFor={"acompte"}>% Acompte </label>
          </div>
          <div className="inputBox col-2">
            <input
              type="number"
              name="remise"
              autoComplete="off"
              value={type.remise}
              onChange={handleChange}
            />

            <label htmlFor={"remise"}>% Remise</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="number"
              name="tva"
              maxLength={2}
              autoComplete="off"
              value={type.tva}
              onChange={handleChange}
            />
            <label htmlFor={"tva"}>% Tva</label>
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
      <SnackBar />
    </div>
  );
};

export default TypeForm;
