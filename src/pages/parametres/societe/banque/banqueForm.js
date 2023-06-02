import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  addBanque,
  deleteBanque,
  updateBanque,
} from "../../../../redux/societe/action";
import { banque as init } from "../init";
import "../societe.css";
import Title from "../../../../components/title/Title";
import SnackBar, {
  displaySnack,
} from "../../../../components/snackbar/SnackBar";
const BanqueForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const [banque, setBanque] = useState(init);

  const handleChange = (e) => {
    setBanque({ ...banque, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.updateId) {
      displaySnack("Banque mis à jour");
      banque && dispatch(updateBanque(banque));
    }
    if (params.destroyId) {
      displaySnack("Supression banque");
      banque && dispatch(deleteBanque(banque));
    }

    if (!params.destroyId && !params.updateId) {
      displaySnack("Nouvelle banque ajouter");

      banque && dispatch(addBanque(banque));
    }

    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };
  useEffect(() => {
    location.state && setBanque(location.state);
  }, [location.state]);

  return (
    <div className="card">
      <div>
        <Title title="Banque (Nouvelle)" mb={20} />
      </div>

      <Form method="post" id="banque-form" onSubmit={handleSubmit}>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
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

          <div className="inputBox col-4">
            <input
              type="text"
              name="rib"
              autoComplete="off"
              value={banque.rib}
              onChange={handleChange}
              required
            />
            <label htmlFor={"rib"}>Rib</label>
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
            <label htmlFor={"compte"}>Compte auxiliaire</label>
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
            Quitter
          </button>
        </div>
      </Form>
      <SnackBar />
    </div>
  );
};

export default BanqueForm;
