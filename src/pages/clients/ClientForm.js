import { mdiPlusBox } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react'
import { Form, useLocation, useNavigate } from 'react-router-dom';
import Listing from '../../components/listing/Listing';
import { removeClassName } from '../../helpers/fonctions';

const ClientForm = (props) => {
   const  {client}=props
   const navigate = useNavigate()
   const renderRubrique = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        // setArticle({ ...article,rubrique: item.rubrique,tva: item.tva, });
      }}
    >
      <span>{item.rubrique}</span>
    </div>
  );
  return (
    <Form method="post" id="client-form">
          {/* ligne 1 */}
          <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
            <div className="inputBox col-2">
              <input
                type="number"
                name="nif"
                autoComplete="off"
                defaultValue={client.nif}
                required
              />

              <label htmlFor={"nif"}>NIF</label>
            </div>
            <div className="inputBox col-6">
              <input
                type="text"
                name="nom"
                autoComplete="off"
                defaultValue={client.nom}
                required
              />
              <label htmlFor={"nom"}>Nom, Raison sociale</label>
            </div>
          </div>
          {/* ligne 2 */}
          <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
            <div className="inputBox col-2">
              <input
                type="number"
                name="bp"
                autoComplete="off"
                defaultValue={client.bp}
              />

              <label htmlFor={"bp"}>Bp</label>
            </div>
            <div className="inputBox col-2">
              <input
                type="text"
                name="tel"
                autoComplete="off"
                defaultValue={client.tel}
               
              />
              <label htmlFor={"tel"}>Téléphone</label>
            </div>
            <div className="inputBox col-4">
              <input
                type="text"
                name="adresse"
                autoComplete="off"
                defaultValue={client.adresse}
              />
              <label htmlFor={"adresse"}>Adresse</label>
            </div>
          </div>
          {/* ligne 3 */}
          <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
            <div className="inputBox col-3">
              <input
                type="email"
                name="email"
                autoComplete="off"
                defaultValue={client.email}
              />

              <label htmlFor={"nif"}>Email</label>
            </div></div>
          {/* ligne 3 */}

          <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
              <input type="text" name="type" defaultValue={client.type} />
              <label htmlFor={"compte"}>Type</label>
              <Listing
            content={["rubriques"]}
            render={renderRubrique}
            footer={
              <Icon
                path={mdiPlusBox}
                size={0.8}
                onClick={() =>
                 {
                    removeClassName("footer-item","actif")
                    navigate("/facturation/prestations/newRubrique", )}
                }
              />}
              />
            </div>
            <div className="inputBox col-3">
              <input type="text" name="reglement" defaultValue={client.reglement} />
              <label htmlFor={"reglement"}>Mode de reglément</label>
              <Listing
            content={["rubriques"]}
            render={renderRubrique}
            footer={
              <Icon
                path={mdiPlusBox}
                size={0.8}
                onClick={() =>
                 {
                    removeClassName("footer-item","actif")
                    navigate("/facturation/prestations/newRubrique", )}
                }
              />}
              />
            </div>
            <div className="inputBox col-2">
              <input type="number" name="compte" defaultValue={client.compte} />
              <label htmlFor={"compte"}>Compte</label>
            </div>
           

           
          </div>
            {/* ligne 3 */}

            <div className="col-12" style={{ display: "flex", marginBottom: 20,  }}>
            <div className="checkbox col-2" style={{  paddingBlock:3 }}>
              <input
                className=""
                type="checkbox"
                name="exo"
                defaultChecked={client.exo}
              />
              <label htmlFor={"exo"}>Dispense (Tva) </label>
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
  )
}

export default ClientForm