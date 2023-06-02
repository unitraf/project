import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import Listing from "../../components/listing/Listing";
import { listType } from "../douane/ddu/init";
import { listRegime } from "./init";
import MinuteCalcul from "./MinuteCalcul";
import "./minutes.css";

const MinuteForm = (props) => {
  const state = useSelector((state) => state);
  const { tarifs, dossiers } = state;
  const navigate = useNavigate();
  const { minute, setMinute } = props;
  const renderType = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setMinute({ ...minute, type:item.nature,})
      }}
    >
      <span className="col-4">{(`${item.nature} (${item.code})`)}</span>
    </div>
  );
  const dossier = minute.dossier&&dossiers.filter(dossier=>minute.dossier===dossier.numero)[0]
  const t1 = minute.t1&&minute.dossier&&dossier.t1.filter(t1=>minute.t1===t1.numero)[0]
  const valeur =
    parseInt(minute.fob) +
    parseInt(minute.fret) +
    parseInt(minute.assurance) +
    parseInt(minute.autres);
  const taxe =
    parseInt(minute.fvc) +
    parseInt(minute.ri) +
    parseInt(minute.fs) +
    parseInt(minute.af);
    const baseTva =
    minute.imposition&&
    minute.imposition.entree.reduce((total, curr) => {
    
      if (
        curr.checked &&
        Object.keys(curr)[0] !== "TVA" &&
        Object.keys(curr)[0] !== "DA"&&
        Object.keys(curr)[0] !== "TVI"
      ) {
        return (total += (valeur * Object.values(curr)[0]) / 100);
      }

      if (curr.checked && Object.keys(curr)[0] === "DA") {
        return (total += parseInt(minute.poids) * Object.values(curr)[0]);
      }
      return total;
    }, 0);

    const droits =
      minute.imposition &&minute.regime !=="3000"?
      minute.imposition.entree.reduce(
        (total, curr) =>
          Object.values(curr)[1] ? (total += Object.values(curr)[2]) : total,
        0
      ): minute.imposition &&minute.regime ==="3000"?
      minute.imposition.sortie.reduce(
        (total, curr) =>
          Object.values(curr)[1] ? (total += (Object.values(curr)[0] / 100) * valeur) : total,
        0
      ):0;
 

  const handleChange = (e) => {
    setMinute({ ...minute, [e.target.name]: e.target.value });
    // submit(e.currentTarget.form);
  };
  const handleChecked = (e, index) => {
    let pj = minute.pj.map((pj, ind) =>
      ind === index
        ? { ...minute.pj[index], checked: !minute.pj[index].checked }
        : pj
    );

    setMinute({ ...minute, pj });
  };
  const renderRegime = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => setMinute({ ...minute, regime: item.code })}
    >
      <span className="col-4">{item.regime}</span>
    </div>
  );
  const renderPosition = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() =>{
        setMinute({
          ...minute,
          position: item.nts,
          designation: item.designation,
          us: item.us,
          imposition:{entree:item.entree, sortie:item.sortie}
        })}
      }
    >
      <span>{item.nts}</span>
    </div>
  );


  useEffect(() => {
    let total = droits+taxe
    setMinute({...minute, valeur, taxe, baseTva, droits, total})
  }, [valeur, taxe, baseTva, droits ])

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Form
        method="post"
        id="minute-form"
        className="col-8"
        style={{ marginRight: 5 }}
        onSubmit={() => {
          console.log("submit", minute);
       setMinute({...minute, carnet:t1, folder:dossier})
          // navigate(-1)
        }}
      >
        {/* ligne 1 */}

        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="number"
              name="dossier"
              
              value={minute.dossier}
              onChange={handleChange}
              required
            />
            <label htmlFor={"dossier"}>N° Dossier</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="number"
              name="t1"
              value={minute.t1}
              onChange={handleChange}
              required
            />
            <label htmlFor={"t1"}>N° T1</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="number"
              name="repertoire"
              value={minute.repertoire}
              onChange={handleChange}
              required
            />
            <label htmlFor={"repertoire"}>N° Rép.</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="regime"
              value={minute.regime}
              onChange={handleChange}
              required
            />
            <label htmlFor={"regime"}>C. Régime</label>
            <Listing content={listRegime} render={renderRegime} />
          </div>
        </div>
        {/* ligne 2 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="number"
              name="nombre"
              autoComplete="off"
              value={minute.nombre}
              onChange={handleChange}
              required
            />
            <label htmlFor={"nombre"}>Nombre</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="type"
              autoComplete="off"
              value={minute.type}
              onChange={handleChange}
            />
            <label htmlFor={"type"}>Nature</label>
            <Listing
            content={listType}
            render={renderType}
           
          />
          </div>
          <div className="inputBox col-3">
            <input
              type="number"
              name="poids"
              autoComplete="off"
              value={minute.poids}
              onChange={handleChange}
            />

            <label htmlFor={"poids"}>Poids</label>
          </div>
        </div>
        {/* ligne 3 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="text"
              name="position"
              autoComplete="off"
              value={minute.position}
              onChange={handleChange}
              required
            />
            <label htmlFor={"position"}>Position</label>
            <Listing content={tarifs} render={renderPosition} />
          </div>
          <div className="inputBox col-7">
            <input
              type="text"
              name="designation"
              autoComplete="off"
              defaultValue={minute.designation}
              // onChange={handleChange}
            />
            <label htmlFor={"designation"}>Désignation</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="us"
              autoComplete="off"
              defaultValue={minute.us}
              // onChange={handleChange}
            />
            <label htmlFor={"us"}>Us</label>
          </div>
        </div>
        {/* ligne 4 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="number"
              name="license"
              autoComplete="off"
              value={minute.license}
              onChange={handleChange}
            />

            <label htmlFor={"license"}>N° License</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="number"
              name="exo"
              autoComplete="off"
              value={minute.exo}
              onChange={handleChange}
            />

            <label htmlFor={"exo"}>N° Exo</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="hidden"
              name="baseTva"
              autoComplete="off"
              value={minute.baseTva}
              onChange={handleChange}
            />

          
          </div>
        </div>
        {/* ligne 5 */}

        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="number"
              name="fob"
              autoComplete="off"
              value={minute.fob}
              onChange={handleChange}
              required
            />

            <label htmlFor={"fob"}>Val. Fob</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="number"
              name="fret"
              value={minute.fret}
              onChange={handleChange}
              required
            />
            <label htmlFor={"fret"}>Val. Fret</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="number"
              name="assurance"
              value={minute.assurance}
              onChange={handleChange}
              required
            />
            <label htmlFor={"assurance"}>Val. Ass</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="number"
              name="autres"
              value={minute.autres}
              onChange={handleChange}
            />
            <label htmlFor={"autres"}>Autres</label>
          </div>
          
        </div>
        {/* ligne 6 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="number"
              name="fvc"
              autoComplete="off"
              value={minute.fvc}
              onChange={handleChange}
            />

            <label htmlFor={"fvc"}>Frais VC</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="number"
              name="ri"
              value={minute.ri}
              onChange={handleChange}
            />
            <label htmlFor={"ri"}>Frais RI</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="number"
              name="fs"
              value={minute.fs}
              onChange={handleChange}
            />
            <label htmlFor={"fs"}>Frais Scanner</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="number"
              name="af"
              value={minute.af}
              onChange={handleChange}
            />
            <label htmlFor={"af"}>Autres Frais</label>
          </div>
          
        </div>
        {/* ligne 7 */}
        <div
          className="col-12"
          style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
        >
          
{/* MinuteCalcul */}
<MinuteCalcul minute={minute} setMinute={setMinute} />
        
        </div>
        {/* ligne valeur */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="text"
              name="valeur"
              autoComplete="off"
              value={minute.valeur}
              onChange={handleChange}
              required
            />

            <label htmlFor={"fob"}>Val. Douane</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="taxe"
              value={minute.taxe}
              onChange={handleChange}
              required
            />
            <label htmlFor={"taxe"}>Taxes Glob.</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="droits"
              value={minute.droits}
              onChange={handleChange}
              required
            />
            <label htmlFor={"droits"}>Droits</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="total"
              value={minute.total}
              onChange={handleChange}
            />
            <label htmlFor={"total"}>Total Décl.</label>
          </div>
        
        </div>
        {/* ligne 8 */}
      
          <fieldset className="fieldset" style={{marginBottom: 20,}}>
            <legend style={{fontStyle:"italic" }}>Documents</legend>
            <div
          className="col-12"
          style={{ display: "flex", flexWrap: "wrap", margin: 0, padding:5 }}
        >
            {minute.pj.map((item, index)=>
            <span style={{display:"flex", justifyContent:"center", alignItems:"center",}} key={index} >
            <input
                  id={item.type}
                 
                  style={{width:20, height:15, cursor:"pointer"}}
                  checked={item.checked}
                  type="checkbox"
                  onChange={(e) =>{ handleChecked(e, index)
                  console.log(minute);
                  }}
                  autoComplete="off"
                
                />
                
                <label htmlFor={item.type}>{item.type}</label>
            </span>
          )}
        </div>
          </fieldset>
         
        {/* Buttons */}
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
      {/* right */}
      <div
        className="col-4"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/* Infos dossier */}
        {dossier && (
          <div className="col-12 infos_right" style={{textAlign:"left"}} >
            <div>
              <h4>Détails Dossier {minute.dossier}</h4>
              <p style={{ display: "flex" }}>
                <span className="col-4">Origine</span>
                <span className="col-8 infos_right_val">
                  : {dossier.origine && dossier.origine}
                </span>
              </p>
              <p style={{ display: "flex" }}>
                <span className="col-4">Document</span>
                <span className="col-8 infos_right_val">
                  : {dossier.document}
                </span>
              </p>
              <p style={{ display: "flex" }}>
                <span className="col-4">Mode</span>
                <span className="col-8 infos_right_val">: {dossier.mode}</span>
              </p>
              <p style={{ display: "flex" }}>
                <span className="col-4">Importateur</span>
                <span className="col-8 infos_right_val">
                  : {dossier.client.nom}
                </span>
              </p>
              <p style={{ display: "flex" }}>
                <span className="col-4">Destinataire</span>
                <span className="col-8 infos_right_val">
                  : {dossier.expediteur}
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Infos T1 */}
        {t1 && (
          <div className="col-12 infos_right">
            <div>
              <h4>Détails T1 {minute.t1}</h4>
              <p style={{ display: "flex" }}>
                <span className="col-4">Frontière</span>
                <span className="col-8 infos_right_val">: {t1.burEntree}</span>
              </p>
              <p style={{ display: "flex" }}>
                <span className="col-4">Destination</span>
                <span className="col-8 infos_right_val">: {t1.burSortie}</span>
              </p>
              <p style={{ display: "flex" }}>
                <span className="col-4">Provenance</span>
                <span className="col-8 infos_right_val">: {t1.provenance}</span>
              </p>
              <p style={{ display: "flex" }}>
                <span className="col-4">N° Sommier</span>
                <span className="col-8 infos_right_val">: {t1.sommier}</span>
              </p>
              <p style={{ display: "flex" }}>
                <span className="col-4">Id Transport</span>
                <span className="col-8 infos_right_val">: {t1.transport}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MinuteForm;
