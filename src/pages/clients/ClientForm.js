import { mdiPlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import Listing from "../../components/listing/Listing";
import { removeClassName } from "../../helpers/fonctions";
import SnackBar from "../../components/snackbar/SnackBar";
import { useSelector } from "react-redux";
import { contact as init } from "./init";

const ClientForm = (props) => {
  const { client, setClient } = props;
  const [contact, setContact] = useState(init);
  const store = useSelector((state) => state);
  const { societe, users, typeClients, reglements } = store;
  console.log(typeClients, reglements);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };
  const handleContact = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    setDisabled(true);
    setClient({ ...client, contact });
  };
  console.log(client);
  const renderTypeClient = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setClient({ ...client, type: item, reglement: item.mode });
      }}
    >
      <span>{item.designation}</span>
    </div>
  );
  const renderUsers = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setClient({ ...client, responsable: { ...item, password: "*******" } });
      }}
    >
      <span>{item.nom}</span>
    </div>
  );
  const renderReglements = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setClient({ ...client, reglement: item });
      }}
    >
      <span>{item.libelle}</span>
    </div>
  );
  return (
    <>
      <Form method="post" id="client-form" onSubmit={handleSubmit}>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="number"
              name="nif"
              autoComplete="off"
              value={client.nif}
              onChange={handleChange}
              required
            />

            <label htmlFor={"nif"}>NIF</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              name="nom"
              autoComplete="off"
              value={client.nom}
              onChange={handleChange}
              required
            />
            <label htmlFor={"nom"}>Nom, Raison sociale</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              value={client.type && client.type.designation}
              onChange={handleChange}
            />
            <label htmlFor={"compte"}>Type</label>
            <Listing
              content={societe.typeClients}
              render={renderTypeClient}
              footer={
                <Icon
                  path={mdiPlusBox}
                  size={0.8}
                  onClick={() => {
                    removeClassName("footer-item", "actif");
                    navigate("/clients/type");
                  }}
                />
              }
            />
          </div>
        </div>
        {/* ligne 2 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="number"
              name="bp"
              autoComplete="off"
              value={client.bp}
              onChange={handleChange}
            />

            <label htmlFor={"bp"}>Bp</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="tel"
              autoComplete="off"
              value={client.tel}
              onChange={handleChange}
            />
            <label htmlFor={"tel"}>Téléphone</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              name="adresse"
              autoComplete="off"
              value={client.adresse}
              onChange={handleChange}
            />
            <label htmlFor={"adresse"}>Adresse</label>
          </div>
        </div>
        {/* ligne contact 2 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="text"
              name="prenom"
              autoComplete="off"
              value={contact.prenom}
              onChange={handleContact}
            />

            <label htmlFor={"prenom"}>Contact</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="fonction"
              autoComplete="off"
              value={contact.fonction}
              onChange={handleContact}
            />

            <label htmlFor={"fonction"}>Fonction</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="tel"
              autoComplete="off"
              value={contact.tel}
              onChange={handleContact}
            />
            <label htmlFor={"tel"}>Téléphone</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="email"
              autoComplete="off"
              value={contact.email}
              onChange={handleContact}
            />
            <label htmlFor={"email"}>Email</label>
          </div>
        </div>

        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="number"
              name="compte"
              value={client.compte}
              onChange={handleChange}
            />
            <label htmlFor={"compte"}>Compte auxi.</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              value={client.reglement && client.reglement.libelle}
              onChange={handleChange}
            />
            <label htmlFor={"reglement"}>Mode de reglément</label>
            <Listing
              content={societe.reglements}
              render={renderReglements}
              footer={
                <Icon
                  path={mdiPlusBox}
                  size={0.8}
                  onClick={() => {
                    removeClassName("footer-item", "actif");
                    navigate("/parametre/societe/newReglement");
                  }}
                />
              }
            />
          </div>

          <div className="inputBox col-3">
            <input
              type="text"
              // name="responsable"
              value={client.responsable && client.responsable.nom}
              onChange={handleChange}
              required
            />
            <label htmlFor={"responsable"}>Résp. interne</label>
            <Listing
              content={users}
              render={renderUsers}
              footer={
                <Icon
                  path={mdiPlusBox}
                  size={0.8}
                  onClick={() => {
                    removeClassName("footer-item", "actif");
                    navigate("/parametres/users/newUser");
                  }}
                />
              }
            />
          </div>
        </div>
        {/* ligne 3 */}

        <div className="col-9" style={{ display: "flex", marginBottom: 20 }}>
        <textarea  onChange={handleChange} name="note" id="note" cols="50" rows="3" placeholder={client.notes}>
            
            </textarea>
          
        </div>
        {/* Buutton */}
        <div>
          <button disabled={disabled} className="button" type="submit">
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
      <SnackBar message={`Nouveau client ajouter`} />
    </>
  );
};

export default ClientForm;
