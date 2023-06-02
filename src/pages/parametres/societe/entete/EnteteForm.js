import { mdiPlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useLocation, useNavigate, useParams } from "react-router-dom";
import Listing from "../../../../components/listing/Listing";
import { removeClassName } from "../../../../helpers/fonctions";
import { addSociete } from "../../../../redux/societe/action";
import { societe as init } from "../init";
import "../societe.css";
import Title from "../../../../components/title/Title";
import SnackBar, {
  displaySnack,
} from "../../../../components/snackbar/SnackBar";
const EnteteForm = () => {
  const banques = useSelector((state) => state.societe.banques);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [unitraf, setUnitraf] = useState(init);

  const handleChange = (e) => {
    setUnitraf({ ...unitraf, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // let dataForm = new FormData(e.target)
    // let unitraf = Object.fromEntries(dataForm)
    displaySnack("Données mis à jour");
    unitraf && dispatch(addSociete(unitraf));
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };
  const renderBanque = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setUnitraf({ ...unitraf, banque: item });
      }}
    >
      <span>{item.nom}</span>
    </div>
  );

  useEffect(() => {
    state && setUnitraf(state);
  }, [state]);

  return (
    <div className="card">
      <div>
        <Title title="Société (Mis à jour entête)" mb={20} />
      </div>

      <Form method="post" id="unitraf-form" onSubmit={handleSubmit}>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="text"
              name="nom"
              autoComplete="off"
              value={unitraf.nom}
              onChange={handleChange}
              required
            />

            <label htmlFor={"nom"}>Nom</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="number"
              name="nif"
              autoComplete="off"
              value={unitraf.nif}
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
              value={unitraf.rccm}
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
              value={unitraf.agrement}
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
              value={unitraf.tel1}
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
              value={unitraf.tel2}
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
              value={unitraf.fax}
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
              value={unitraf.bp}
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
              value={unitraf.adresse1}
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
              value={unitraf.adresse2}
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
              value={unitraf.banque && unitraf.banque.nom}
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
                    removeClassName("footer-item", "actif");
                    navigate("/parametre/unitraf/newBanque");
                  }}
                />
              }
            />
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              name="rib"
              autoComplete="off"
              value={unitraf.banque && unitraf.banque.rib}
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
            value={unitraf.adresse2}
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
            Quitter
          </button>
        </div>
      </Form>
      <SnackBar />
    </div>
  );
};

export default EnteteForm;
