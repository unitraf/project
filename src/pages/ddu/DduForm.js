import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Form, useNavigate, useParams } from "react-router-dom";
import Listing from "../../components/listing/Listing";
import { listRegime } from "../minutes/init";
import { listBureau } from "../t1/init";
import { listType } from "./init";

const DduForm = (props) => {
  const params = useParams()
  const navigate = useNavigate();
  const { ddu } = props;
  const listPosition = useSelector(state=>state.tarifs)
 
  const [data, setData] = useState(ddu);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // submit(e.currentTarget.form);
  };
  const renderBureau = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setData({ ...data, bureau: `${item.bureau } (${item.code })`})
      }}
    >
      <span className="col-4">{item.bureau}</span>
    </div>
  );
  const renderRegime = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setData({ ...data, regime:item.code })
      }}
    >
      <span className="col-4">{`${item.regime } (${item.code })`}</span>
    </div>
  );
  const renderPosition = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setData({ ...data, position:item.nts, designation:item.designation })
      }}
    >
      <span className="col-4">{item.nts}</span>
    </div>
  );
  const renderType = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setData({ ...data, type:item.nature,})
      }}
    >
      <span className="col-4">{(`${item.nature} (${item.code})`)}</span>
    </div>
  );
  useEffect(() => {
    params.dossierId&&setData({...data, dossier:params.dossierId})
  }, [params.dossierId])
  return (
    <Form method="post" id="data-form">
      {/* ligne 1** */}

      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="number"
            name="dossier"
            value={data.dossier}
            onChange={handleChange}
          />
          <label htmlFor={"dossier"}>N° Dossier</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="number"
            name="t1"
            value={data.t1}
            onChange={handleChange}
          />
          <label htmlFor={"t1"}>N° T1</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="number"
            name="repertoire"
            value={data.repertoire}
            onChange={handleChange}
          />
          <label htmlFor={"repertoire"}>N° Répertoire</label>
        </div>
        <div className="inputBox col-5">
          <input
            type="text"
            name="bureau"
            autoComplete="off"
            value={data.bureau}
            onChange={handleChange}
           
          />
          <label htmlFor={"bureau"}>Bureau</label>
          <Listing
            content={listBureau}
            render={renderBureau}
           
          />
        </div>
      </div>
      {/* ligne 2 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
       
        <div className="inputBox col-2">
          <input
            type="number"
            name="reference"
            autoComplete="off"
            value={data.reference}
            onChange={handleChange}
            required
          />
          <label htmlFor={"reference"}>Reférence</label>
        </div>
        <div className="inputBox col-3">
          <input
            type="date"
            name="date"
            autoComplete="off"
            value={data.date}
            onChange={handleChange}
          />

          <label htmlFor={"date"}>Date</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="number"
            name="sommier"
            autoComplete="off"
            value={data.sommier}
            onChange={handleChange}
          />

          <label htmlFor={"sommier"}>N° Sommier</label>
        </div>
      </div>
      {/* ligne 3 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="number"
            name="nombre"
            autoComplete="off"
            value={data.nombre}
            onChange={handleChange}
          />

          <label htmlFor={"nombre"}>Nombre</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="type"
            autoComplete="off"
            value={data.type}
            onChange={handleChange}
          />
          <label htmlFor={"type"}>Nature</label>
          <Listing
            content={listType}
            render={renderType}
           
          />
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="position"
            autoComplete="off"
            value={data.position}
            onChange={handleChange}
          />
          <label htmlFor={"position"}>Position</label>
          <Listing
            content={listPosition}
            render={renderPosition}
           
          />
        </div>
        <div className="inputBox col-4">
          <input
            type="text"
            name="designation"
            autoComplete="off"
            value={data.designation}
            onChange={handleChange}
          />
          <label htmlFor={"designation"}>Désignation</label>
        </div>
        
      </div>
      {/* ligne 4 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="text"
            name="regime"
            autoComplete="off"
            value={data.regime}
            onChange={handleChange}
          />

          <label htmlFor={"regime"}>Régime</label>
          <Listing
            content={listRegime}
            render={renderRegime}
           
          />
        </div>
        <div className="inputBox col-2">
          <input
            type="number"
            name="poids"
            autoComplete="off"
            value={data.poids}
            onChange={handleChange}
            required
          />

          <label htmlFor={"poids"}>Poids</label>
        </div>
        <div className="inputBox col-3">
          <input
            type="number"
            name="valeur"
            autoComplete="off"
            value={data.valeur}
            onChange={handleChange}
            required
          />

          <label htmlFor={"valeur"}>Valeur</label>
        </div>
      </div>
      {/* ligne 5 */}

      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-3">
          <input
            type="number"
            name="license"
            autoComplete="off"
            value={data.license}
            onChange={handleChange}
          />

          <label htmlFor={"license"}>N° License</label>
        </div>
        <div className="inputBox col-3">
          <input
            type="number"
            name="exo"
            value={data.exo}
            onChange={handleChange}
          />
          <label htmlFor={"exo"}>N° Exo</label>
        </div>
      </div>
      {/* ligne 5 **/}

      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-3">
          <input
            type="number"
            name="liquidation"
            autoComplete="off"
            value={data.liquidation}
            onChange={handleChange}
            required
          />

          <label htmlFor={"liquidation"}>N° Liquidation</label>
        </div>
        <div className="inputBox col-3">
          <input
            type="date"
            name="dateLiquidation"
            value={data.dateLiquidation}
            onChange={handleChange}
            required
          />
          <label htmlFor={"dateLiquidation"}>Date Liq.</label>
        </div>
      </div>
      {/* ligne 6 */}

      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-3">
          <input
            type="number"
            name="droits"
            autoComplete="off"
            value={data.droits}
            onChange={handleChange}
            required
          />

          <label htmlFor={"droits"}>Droits & Taxes</label>
        </div>
        <div className="inputBox col-3">
          <input
            type="number"
            name="taxes"
            value={data.taxes}
            onChange={handleChange}
            required
          />
          <label htmlFor={"taxes"}>Taxes Glob.</label>
        </div>
        <div className="inputBox col-3">
          <input
            type="number"
            name="total"
            value={data.total}
            onChange={handleChange}
            required
          />
          <label htmlFor={"total"}>Total Décl.</label>
        </div>
      </div>

      {/* ligne 6 */}

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
          Annuler
        </button>
      </div>
    </Form>
  );
};

export default DduForm;
