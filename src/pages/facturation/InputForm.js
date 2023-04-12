import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import Listing from "../../components/listing/Listing";
import { generateSecef, getTotal } from "../../helpers/fonctions";
import { nombre } from "../../helpers/render";
import { useLocation } from "react-router-dom";

const InputForm = (props) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const reglements = useSelector((state) => state.societe.reglements);
  const state = useSelector((state) => state);
  const { clients, societe } = state;
  const { data, setData, dossier, status } = props;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const renderSecef = (item, index) => (
    <div key={index} className="item" style={{ display: "flex" }}>
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();

          setData({ ...data, ...generateSecef() });
        }}
      >
        Générer
      </button>
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();

          setData({ ...data, code: "" });
        }}
      >
        Effacer
      </button>
    </div>
  );
  const renderReglement = (item, index) => (
    <div
      key={index}
      className="item"
      style={{ display: "flex" }}
      onClick={() => {
        let echeance = moment()
          .add(parseInt(item.jours), "days")
          .format("YYYY-MM-DD");
        let reglement = item.libelle;
        setData({ ...data, reglement, echeance });
      }}
    >
      <span>{item.libelle}</span>
    </div>
  );
  const renderStatus = (item, index) => (
    <div
      key={index}
      className="item"
      style={{ display: "flex" }}
      onClick={() => {
       
        setData({ ...data, status:item });
      }}
    >
      <span>{item}</span>
    </div>
  );
  const renderClients = (item, index) => (
    <div
      key={index}
      className="item"
      style={{ display: "flex" }}
      onClick={() => {
        setData({ ...data, prospect: item });
      }}
    >
      <span>{item.nom}</span>
    </div>
  );

  return (
    <>
      {/* ligne 1 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="col-10" style={{ display: "flex" }}>
          <div className="inputBox col-3">
            <input
              type="text"
              name="nim"
              autoComplete="off"
              value={data.nim}
              onChange={handleChange}
              required
            />
            <label htmlFor={"nim"}>Nim</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="compteur"
              autoComplete="off"
              value={data.compteur}
              onChange={handleChange}
              required
            />
            <label htmlFor={"compteur"}>Compteur</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="number"
              name="numero"
              autoComplete="off"
              value={data.numero}
              onChange={handleChange}
              required
            />
            <label htmlFor={"numero"}>Numéro</label>
          </div>
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="status"
            autoComplete="off"
            value={data.status}
            onChange={handleChange}
            required
          />
          <label htmlFor={"status"}>Status</label>
          {status&&<Listing
            content={status}
            render={renderStatus}
           
          />}
        </div>
      </div>
      {/* ligne 2 */}
      <div
        className="col-12"
        style={{
          display: "flex",
          marginBottom: 20,
          justifyContent: "space-between",
        }}
      >
        <div className="col-9" style={{ display: "flex" }}>
          <div className="inputBox col-5">
            <input
              type="text"
              name="code"
              autoComplete="off"
              value={data.code}
              onChange={handleChange}
              required
            />
            <label htmlFor={"code"}>Code</label>
            <Listing content={[""]} render={renderSecef} />
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
              style={{ paddingLeft: 25 }}
              type="time"
              name="heure"
              autoComplete="off"
              value={data.heure}
              onChange={handleChange}
            />
            <label htmlFor={"heure"}>Heure</label>
          </div>
          <div className="inputBox col-1">
            <input
              type="text"
              name="seconde"
              autoComplete="off"
              value={data.seconde}
              onChange={handleChange}
            />
            <label htmlFor={"seconde"}>Sec.</label>
          </div>
        </div>
        <div className="col-2">
          <div className="inputBox col-12">
            <input
              type="date"
              name="echeance"
              autoComplete="off"
              value={data.echeance}
              onChange={handleChange}
            />
            <label htmlFor={"echeance"}>Echéance</label>
          </div>
        </div>
      </div>
      {/* ligne 3 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="col-10" style={{ display: "flex" }}>
          {pathname !== "/facturation/devis/newDevis" && (
            <>
              <div className="inputBox col-2">
                <input
                  type="number"
                  name="dossier"
                  autoComplete="off"
                  value={data.dossier}
                  onChange={handleChange}
                  required
                />
                <label htmlFor={"dossier"}>Dossier</label>

                {/* <Listing
           content={dossiers}
           render={renderLibelles}
         /> */}
              </div>

              <div className="inputBox col-2">
                <input
                  type="text"
                  name="annee"
                  autoComplete="off"
                  value={data.annee}
                  onChange={handleChange}
                  required
                />
                <label htmlFor={"annee"}>Année</label>
              </div>
            </>
          )}
          {pathname === "/facturation/devis/newDevis" ? (
            <div className="inputBox col-6">
              <input
                type="text"
                name="prospect"
                autoComplete="off"
                defaultValue={data.prospect.nom}
                required
              />
              <label htmlFor={"prospect"}>Client</label>
              <Listing content={clients} render={renderClients} />
            </div>
          ) : (
            <div className="inputBox col-6">
              <input
                type="text"
                name="client"
                autoComplete="off"
                defaultValue={dossier && dossier.client.nom}
                required
              />
              <label htmlFor={"client"}>Client</label>
            </div>
          )}
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="reglement"
            autoComplete="off"
            value={data.reglement}
            onChange={handleChange}
          />
          <label htmlFor={"reglement"}>Mode de reglément</label>

          <Listing content={societe.reglements} render={renderReglement} />
        </div>
      </div>
      {/* ligne 4 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="text"
            name="colis"
            autoComplete="off"
            defaultValue={
              dossier && `${nombre(dossier.nombre)} ${dossier.type}'s`
            }
          />
          <label htmlFor={"colis"}>Colis</label>
        </div>
        <div className="inputBox col-4">
          <input
            type="text"
            name="description"
            autoComplete="off"
            defaultValue={dossier && dossier.description}
            required
          />
          <label htmlFor={"description"}>Description</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="provenance"
            autoComplete="off"
            defaultValue={dossier && dossier.provenance}
          />
          <label htmlFor={"provenance"}>Provenance</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="document"
            autoComplete="off"
            defaultValue={dossier && dossier.document}
          />
          <label htmlFor={"document"}>Document</label>
        </div>
      </div>
      {/* ligne 5 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="text"
            name="poids"
            autoComplete="off"
            defaultValue={dossier && nombre(dossier.poids)}
          />
          <label htmlFor={"poids"}>Poids Brut</label>
        </div>

        <div className="inputBox col-2">
          <input
            type="text"
            name="poidsVol"
            autoComplete="off"
            defaultValue={dossier && nombre(dossier.poidsVol)}
            // required
          />
          <label htmlFor={"poidsVol"}>Poids Vol.</label>
        </div>

        <div className="inputBox col-2">
          <input
            type="text"
            name="volume"
            autoComplete="off"
            defaultValue={dossier && nombre(dossier.volume)}
          />
          <label htmlFor={"volume"}>Volume</label>
        </div>

        <div className="inputBox col-2">
          <input
            type="text"
            name="valeur"
            autoComplete="off"
            defaultValue={
              dossier && nombre(getTotal(dossier.declaration, "valeur"))
            }
          />
          <label htmlFor={"valeur"}>Valeur en douane</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="total"
            autoComplete="off"
            defaultValue={
              dossier && nombre(getTotal(dossier.declaration, "total"))
            }
          />
          <label htmlFor={"total"}>Droits & taxes</label>
        </div>
      </div>
    </>
  );
};

export default InputForm;
