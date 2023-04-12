import { mdiPlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import React, {  } from "react";
import { useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import Listing from "../../components/listing/Listing";
import { addClassName, removeClassName } from "../../helpers/fonctions";
import { listBureau, paysExport } from "./init";

const T1Form = (props) => {
  const navigate = useNavigate();
 
  const listTarif = useSelector(state=>state.tarifs)
  const { t1, setT1 } = props;
  
  const handleChange = (e) => {
    setT1({ ...t1, [e.target.name]: e.target.value });
    // submit(e.currentTarget.form);
  };

  const renderBureauEntree = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setT1({ ...t1, burEntree: `${item.bureau } (${item.code })`})
      }}
    >
      <span className="col-">{item.bureau}</span>
    </div>
  );
  const renderTarif = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setT1({ ...t1, position:item.nts, designation:item.designation })
        removeClassName("listing-item actif", "actif");
      }}
    >
      <span className="col-4">{item.nts}</span>
    </div>
  );
  const renderBureauSortie = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setT1({ ...t1, burSortie: `${item.bureau } (${item.code })`})
      }}
    >
      <span className="col-4">{item.bureau}</span>
    </div>
  );
  const renderProvenance = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setT1({ ...t1, provenance: item})
      }}
    >
      <span className="col-4">{item}</span>
    </div>
  );

  return (
    <Form method="post" id="t1-form">
      {/* ligne 1 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="number"
            name="dossier"
            value={t1.dossier}
            onChange={handleChange}
            required
          />
          <label htmlFor={"dossier"}>N° Dossier</label>
        </div>
      </div>
      {/* ligne 2 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-4">
          <input
            type="text"
            name="burEntree"
            autoComplete="off"
            value={t1.burEntree?t1.burEntree:""}
            onChange={handleChange}
            required
          />
          <label htmlFor={"burEntree"}>Bureau Frontière</label>
          <Listing
            content={listBureau}
            render={renderBureauEntree}
           
          />
        </div>
        <div className="inputBox col-4">
          <input
            type="text"
            name="burSortie"
            autoComplete="off"
            value={t1.burSortie?t1.burSortie:""}
            onChange={handleChange}
            required
          />
          <label htmlFor={"burSortie"}>Bureau Destinataire</label>
          <Listing
            content={listBureau}
            render={renderBureauSortie}
       
          />
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="provenance"
            autoComplete="off"
            value={t1.provenance?t1.provenance:""}
            onChange={handleChange}
            required
          />

          <label htmlFor={"provenance"}>Provenance</label>
          <Listing
            content={paysExport}
            render={renderProvenance}
         
          />
        </div>
      </div>
      {/* ligne 3 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
      <div className="inputBox col-3">
          <input
            type="date"
            name="date"
            autoComplete="off"
            value={t1.date}
            onChange={handleChange}
          />
          <label htmlFor={"date"}>Date</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="number"
            name="numero"
            autoComplete="off"
            value={t1.numero}
            onChange={handleChange}
            required
          />

          <label htmlFor={"numero"}>N° Transit</label>
        </div>
        
        <div className="inputBox col-2">
          <input
            type="number"
            name="sommier"
            autoComplete="off"
            value={t1.sommier}
            onChange={handleChange}
            required
          />
          <label htmlFor={"sommier"}>N° Sommier</label>
        </div>
      </div>
      {/* ligne 4 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-3">
          <input
            type="text"
            name="transport"
            autoComplete="off"
            value={t1.transport}
            onChange={handleChange}
          />

          <label htmlFor={"transport"}>Moyen Transport</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="number"
            name="quantite"
            autoComplete="off"
            value={t1.quantite}
            onChange={handleChange}
            required
          />

          <label htmlFor={"quantite"}>Quantité</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="number"
            name="poids"
            value={t1.poids}
            onChange={handleChange}
            required
          />
          <label htmlFor={"poids"}>Poids</label>
        </div>
      </div>
      {/* ligne 5 */}

      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        
        <div className="inputBox col-3">
          <input
            type="text"
            name="position"
            value={t1.position}
            onChange={handleChange}
            required
          />
          <label htmlFor={"position"}>Position</label>
          <Listing
            content={listTarif}
            render={renderTarif}
            footer={
              <Icon
                path={mdiPlusBox}
                size={0.8}
                onClick={() =>
                 {
                    removeClassName("footer-item","actif")
                    navigate("/tarifs/newTarif",)}
                }
              />
            
          }
          />
        </div>
        <div className="inputBox col-5">
          <input
            type="text"
            name="designation"
            value={t1.designation}
            onChange={handleChange}
            required
          />
          <label htmlFor={"designation"}>Désignation</label>
         
        </div>
      </div>
      {/* ligne 6 */}

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
  );
};

export default T1Form;
