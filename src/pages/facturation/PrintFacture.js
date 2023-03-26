import React from "react";
import Fieldset from "../../components/fieldset/Fieldset";
import { NumberToLetter } from "../../helpers/convertNumber";
import "./facture.css";
const deb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const interv = [1, 2, 3, 4, 5];
const PrintFacture = (props) => {
  const { dossier } = props;
  const renderDetails = (
    <table className="table" style={{}}>
      <thead>
        <tr>
          <th
          className="col-2"
            style={{
              border: "1px solid var(--main-color)",
              color: "var(--main-color)",
            }}
          >
            Rubrique
          </th>
          <th className="col-4">Désignation</th>
          <th className="col-1">Qté</th>
          <th className="col-2">Prix Unit.</th>
          <th className="col-2">Taxe</th>
          <th className="col-2" >Montant</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: 12 }}>
        {/* Deb */}
        <tr className="col-12">
          <td className="col-2">Débours</td>
        </tr>
        {deb.map((item, index) => (
          <tr key={index} className="col-12" style={{}}>
            <td className="col-2" style={{ border: 0 }}>
              #{index + 1}
            </td>
            <td
              className="col-4"
              style={{ textAlign: "left", paddingLeft: 10 }}
            >
              Passage Magasin Douane
            </td>
            <td className="col-1">Quantité</td>
            <td
              className="col-2"
              style={{ textAlign: "right", paddingRight: 10 }}
            >
              Prix Unit.
            </td>
            <td
              className="col-2"
              style={{ textAlign: "right", paddingRight: 10 }}
            >
              {" "}
              Taxe
            </td>
            <td
              className="col-2"
              style={{ textAlign: "right", paddingRight: 10 }}
            >
              Montant
            </td>
          </tr>
        ))}
        <tr className="col-12">
          <td className="col-2">Interventions</td>
        </tr>
        {/* Intervention */}
        {interv.map((item, index) => (
          <tr key={index} className="col-12" style={{}}>
            <td className="col-2" style={{ border: 0 }}>
              #{index + 1}
            </td>
            <td
              className="col-4"
              style={{ textAlign: "left", paddingLeft: 10 }}
            >
              Passage Magasin Douane
            </td>
            <td className="col-1">Quantité</td>
            <td
              className="col-2"
              style={{ textAlign: "right", paddingRight: 10 }}
            >
              Prix Unit.
            </td>
            <td
              className="col-2"
              style={{ textAlign: "right", paddingRight: 10 }}
            >
              Taxes
            </td>
            <td
              className="col-2"
              style={{ textAlign: "right", paddingRight: 10 }}
            >
              Montant
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  const renderTotal = (
    <div
      style={{ display: "flex", textTransform: "uppercase", fontSize: "1rem" }}
    >
      <Fieldset className="col-3" legend="Débours" content={"9 999 999"} />
      <Fieldset className="col-3" legend="INTERV." content={"9 999 999"} />
      <Fieldset className="col-3" legend="HT" content={"99 999 999"} />
      <Fieldset className="col-3" legend="Tva" content={"9 000 000"} />
      <Fieldset className="col-3" legend="TTC" content={"90 999 999"} />
    </div>
  );

  return (
    <div>
      <h1
        className="col-5"
        style={{
          color: "var(--main-color)",
          textTransform: "uppercase",
          padding: "0 5px",
        }}
      >
        Facture
      </h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* gauche */}
        <div className="col-3">
          {/* ligne 1 */}
          <div style={{ display: "flex" }}>
            <Fieldset
              className="col-12"
              legend={"Dossier TR"}
              // content={dossier.numero?`480/${dossier.numero}`:"-"}
              content={"-"}
            />
          </div>
          {/* ligne 2 */}
          <div style={{ display: "flex" }}>
            <Fieldset
              className="col-12"
              legend={"Réf. Cmde"}
              // content={dossier.numero?`480/${dossier.numero}`:"-"}
              content={"-"}
            />
          </div>
        </div>
        {/* droite */}
        <div className="col-9" style={{ display: "flex" }}>
          <Fieldset
            className="col-6"
            legend={"Client"}
            // content={dossier.numero?`480/${dossier.numero}`:"-"}
            content={
              <div>
                <p>MINISTERE DE LA SANTE</p>
                <p>MINISTERE DE LA SANTE</p>
                <p>MINISTERE DE LA SANTE</p>
                <p>MINISTERE DE LA SANTE</p>
              </div>
            }
          />
          <Fieldset
            className="col-6"
            legend={"SECeF/DGI"}
            // content={dossier.numero?`480/${dossier.numero}`:"-"}
            content={"-"}
          />
        </div>
      </div>
      {/* Ligne 3 */}
      <div
        style={{
          borderBottom: "1px solid var(--main-color)",
          marginInline: 5,
          marginTop: 5,
        }}
      ></div>

      <div style={{ display: "flex" }}>
        <Fieldset
          className="col-2"
          legend={"Colis"}
          // content={dossier.numero?`480/${dossier.numero}`:"-"}
          content={"-"}
        />
        <Fieldset
          className="col-5"
          legend={"Description de la marchandise"}
          // content={dossier.numero?`480/${dossier.numero}`:"-"}
          content={"-"}
        />
        <Fieldset
          className="col-2"
          legend={"Provénance"}
          // content={dossier.numero?`480/${dossier.numero}`:"-"}
          content={"-"}
        />
        <Fieldset
          className="col-3"
          legend={"Document Transp."}
          // content={dossier.numero?`480/${dossier.numero}`:"-"}
          content={"-"}
        />
      </div>
      {/* ligne 4 */}
      <div style={{ display: "flex" }}>
        <Fieldset
          className="col-2"
          legend={"Poids Brut"}
          // content={dossier.numero?`480/${dossier.numero}`:"-"}
          content={"-"}
        />
        <Fieldset
          className="col-2"
          legend={"Poids Vol."}
          // content={dossier.numero?`480/${dossier.numero}`:"-"}
          content={"-"}
        />
        <Fieldset
          className="col-2"
          legend={"Volume"}
          // content={dossier.numero?`480/${dossier.numero}`:"-"}
          content={"-"}
        />
        <Fieldset
          className="col-3"
          legend={"Valeur Douane"}
          // content={dossier.numero?`480/${dossier.numero}`:"-"}
          content={"-"}
        />
        <Fieldset
          className="col-3"
          legend={"Droits & Taxes"}
          // content={dossier.numero?`480/${dossier.numero}`:"-"}
          content={"-"}
        />
      </div>
      {/* ligne 5 Tableau */}
      <div style={{ display: "flex" }}>
        <Fieldset
          className="col-12"
          legend={""}
          // content={dossier.numero?`480/${dossier.numero}`:"-"}
          content={renderDetails}
        />
      </div>
      {/* ligne 6 Footer */}
      <div
        className="col-12 minute-footer"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="col-12">
          <div style={{ display: "flex" }}>
            <Fieldset
              className="col-1"
              legend="QR"
              content={
                <img id="qr" src="" alt="QR Code" style={{ width: 64 }} />
              }
            />
            <Fieldset className="col-11" legend="TOTAL" content={renderTotal} />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Fieldset
            className="col-12"
            legend={"Arrêtée la présente facture à la somme de"}
            // content={dossier.numero?`480/${dossier.numero}`:"-"}
            content={
              <span style={{ textTransform: "uppercase" }}>
                {NumberToLetter(9887585)}
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PrintFacture;
