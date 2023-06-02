import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, useLocation, useNavigate, useParams } from "react-router-dom";
import Listing from "../../../../components/listing/Listing";
import { addReglement, deleteReglement,updateReglement } from "../../../../redux/societe/action";
import { reglement as init, paiement } from "../init";
import "../societe.css";
import Title from "../../../../components/title/Title";
import SnackBar, { displaySnack } from "../../../../components/snackbar/SnackBar";
const ModeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams()
  const location = useLocation()
  const [reglement, setReglement] = useState(init);

  const handleChange = (e) => {
    setReglement({ ...reglement, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
    e.preventDefault();

    if (params.updateId) {
        displaySnack("Mode de reglément mis à jour");
        reglement && dispatch(updateReglement(reglement));
    }
    if (params.destroyId) {
        displaySnack("Supression mode de reglément");
        reglement && dispatch(deleteReglement(reglement));
    }
    
    if (!params.destroyId&&!params.updateId) {
        displaySnack("Nouvelle mode de reglément ajouter");
        
        reglement && dispatch(addReglement(reglement));
    }

    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };
  useEffect(() => {
    location.state && setReglement(location.state);
  }, [location.state]);
  const renderType = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setReglement({ ...reglement, type: item });
      }}
    >
      <span>{item}</span>
    </div>
  );
  const renderPaiement = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setReglement({ ...reglement, paiement: item.libelle });
      }}
    >
      <span>{item.libelle}</span>
    </div>
  );

  return (
    <div className="card" >
    <Title title={params.updateId?'Mode de reglément (Mis à jour)':params.destroyId?'Mode de reglément (Supression)':'Mode de reglément (Nouveau)'} mb={20}/>
      <Form method="post" id="reglement-form" onSubmit={handleSubmit}>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
       
          <div className="inputBox col-5">
            <input
              type="text"
              name="libelle"
              autoComplete="off"
              value={reglement.libelle}
              onChange={handleChange}
              required
            />
            <label htmlFor={"libelle"}>Libellé</label>
          </div>
      <div className="inputBox col-2">
            <input
              type="text"
              name="type"
              autoComplete="off"
              value={reglement.type}
              onChange={handleChange}
              required
            />
            <label htmlFor={"type"}>Type</label>
            <Listing
              content={["Comptant", "Crédit", "Prélevement"]}
              render={renderType}
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
            <label htmlFor={"paiement"}>Moy. de paiement</label>
            <Listing
              content={paiement}
              render={renderPaiement}
              // footer={
              //   <Icon
              //     path={mdiPlusBox}
              //     size={0.8}
              //     onClick={() =>
              //      {
              //         removeClassName("footer-item","actif")
              //         navigate("/parametre/societe/newReglement",)}
              //     }
              //   />}
            />
          </div>
          <div className="inputBox col-2">
            <input
              type="number"
              maxLength={2}
              name="jours"
              autoComplete="off"
              value={reglement.jours}
              onChange={handleChange}
              required
            />
            <label htmlFor={"jours"}>Echéance (jrs)</label>
          </div>
      
        </div>
        {/* Button */}
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

export default ModeForm;
