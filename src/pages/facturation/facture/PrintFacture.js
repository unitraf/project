import React from "react";
import Fieldset from "../../../components/fieldset/Fieldset";
import { NumberToLetter } from "../../../helpers/convertNumber";
import { groupBy } from "../../../helpers/fonctions";
import { annee, anneeMois, date, nombre, prefixe } from "../../../helpers/render";
import "../facturation.css";
const deb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const interv = [1, 2, 3, 4, 5];
const PrintFacture = (props) => {
  const { dossier } = props;
  const prestations =
  dossier && groupBy([...(dossier.prestations || [])], "rubrique");
  const listDebours = dossier&&prestations['débours']
  const listInterv = dossier&&prestations['interventions']
  const listAutres = dossier&&prestations['autres']

  console.log(listDebours,listInterv, listAutres );
  const renderDetails = (
    <table className="tableau" style={{ fontSize:"0.8rem"}}>
      <thead>
        <tr>
          <th
          className="col-2"
           
          >
            Rubrique
          </th>
          <th className="col-3">Désignation</th>
          <th className="col-1">Qté</th>
          <th className="col-2">Prix Unit.</th>
          <th className="col-2">Taxe</th>
          <th className="col-2" >Montant</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: 12 }}>
        {/* Debours 1 */}
        {listDebours&&
        <>
        <tr className="col-12">
          <td className="col-2">Débours</td>
        </tr>
        {listDebours.map((item, index) => (
          <tr key={index} className="col-12" style={{}}>
            <td className="col-2" style={{ border: 0 }}>
              #{index + 1}
            </td>
            <td
              className="col-3"
              style={{ textAlign: "left", paddingLeft: 10 }}
            >
              {item.libelle}
            </td>
            <td className="col-1">1</td>
            <td
              className="col-2"
              style={{ textAlign: "right", paddingRight: 10 }}
            >
              { nombre(item.valeur) }
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
              {nombre(item.valeur)}
            </td>
          </tr>
        ))}
        </>
        }
        {/* Intervention 3*/}
        {listInterv&&<>
        <tr className="col-12">
          <td className="col-2">Interventions</td>
        </tr>
        
        {listInterv.map((item, index) => (
          <tr key={index} className="col-12" style={{}}>
            <td className="col-2" style={{ border: 0 }}>
              #{index + 1}
            </td>
            <td
              className="col-3"
              style={{ textAlign: "left", paddingLeft: 10 }}
            >
              {item.libelle}
            </td>
            <td className="col-1">1</td>
            <td
              className="col-2"
              style={{ textAlign: "right", paddingRight: 10 }}
            >
              {nombre(item.valeur)}
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
             {nombre(item.valeur)}
            </td>
          </tr>
        ))}
        </>}
      </tbody>
    </table>
  );
  const renderTotal = (
    <div
      style={{ display: "flex", textTransform: "uppercase", fontSize: "1rem" }}
    >
      <Fieldset className="col-3" legend="Débours" content={dossier.facture.debours?dossier.facture.debours:"-"} />
      <Fieldset className="col-3" legend="INTERV." content={dossier.facture.interventions?dossier.facture.interventions:"-"} />
      <Fieldset className="col-3" legend="HT" content={dossier.facture.ht?dossier.facture.ht:"-"} />
      <Fieldset className="col-3" legend="Tva" content={dossier.facture.tva?dossier.facture.tva:"-"} />
      <Fieldset className="col-3" legend="TTC" content={dossier.facture.net?dossier.facture.net:"-"}/>
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
        <div className="col-4">
          {/* ligne 1 */}
          <div className="col-12" style={{ display: "flex", fontSize:"0.8rem" }}>
          <div className="col-6" style={{ display: "flex" }}>
            <Fieldset
              className="col-12"
              legend={"N°"}
              content={`${anneeMois(dossier.facture.date) }/${dossier.facture.numero}`}
             
            />
          </div>
          <div className="col-6" style={{ display: "flex" }}>
            <Fieldset
              className="col-12"
              legend={"DTR"}
              content={`${prefixe(dossier.date) }/${dossier.numero}/${annee( dossier.date)}`}
             
            />
          </div></div>
          {/* ligne 2 */}
          <div style={{ display: "flex", fontSize:"0.8rem" }}>
            <Fieldset
              className="col-12"
              legend={"Réf. Cmde"}
           
              content={dossier.reference?dossier.reference:"-"}
            />
          </div>
        </div>
        {/* droite */}
        <div className="col-8" style={{ display: "flex", fontSize:"0.8rem" }}>
          <Fieldset
            className="col-6"
            legend={"Client"}
            
            content={
              <div>
                <p >{dossier.client.nom?(dossier.client.nom).toUpperCase():"-"}</p>
                <p >{dossier.client.nif?(`NIF : ${dossier.client.nif}`).toUpperCase():"-"}</p>
                <p >{dossier.client.tel?(`TEL : ${dossier.client.tel}`).toUpperCase():"TEL : //"}</p>
                <p >{dossier.client.bp&&(`BP : ${dossier.client.bp}`).toUpperCase()} {dossier.client.adresse&&(` ${dossier.client.adresse}`).toUpperCase()}</p>
              
              </div>
            }
          />
          <Fieldset
            className="col-6"
            legend={"SECeF/DGI"}
            content={
              <div>
                <p  id="code">{dossier.facture.code&&(`${dossier.facture.code}`).toUpperCase()}</p>
                <p  id="nim">{dossier.facture.nim&&(`Nim : ${dossier.facture.nim}`).toUpperCase()}</p>
                <p  id="compteur">{dossier.facture.compteur&&(`Compteur : /${dossier.facture.compteur} FV`).toUpperCase()}</p>
                <p  id="date">{dossier.facture.date&&(`Date-Heure : ${date(dossier.facture.date)} ${dossier.facture.heure}:${dossier.facture.seconde}`).toUpperCase()} </p>
        
  </div>
            }
          />
        </div>
      </div>
      {/* Ligne 3 */}
      <div
        style={{
          borderBottom: "1px solid var(--main-color)",
          marginInline: 5,
          marginTop: 5
          , fontSize:"0.8rem"
        }}
      ></div>

      <div style={{ display: "flex", fontSize:"0.8rem" }}>
        <Fieldset
          className="col-2"
          legend={"Colis"}

          content={`${dossier.nombre} ${dossier.type}(s)`}
        />
        <Fieldset
          className="col-5"
          legend={"Description"}
          
          content={dossier.description?dossier.description:"-"}
        />
        <Fieldset
          className="col-2"
          legend={"Provenance"}
          
          content={dossier.provenance?dossier.provenance:"-"}
        />
        <Fieldset
          className="col-3"
          legend={"Document Transp."}
          
          content={dossier.document?dossier.document:"-"}
        />
      </div>
      {/* ligne 4 */}
      <div style={{ display: "flex", fontSize:"0.8rem" }}>
        <Fieldset
          className="col-2"
          legend={"Poids Brut"}
          
          content={dossier.facture.poids?dossier.facture.poids:"-"}
        />
        <Fieldset
          className="col-2"
          legend={"Poids Vol."}
          
          content={dossier.facture.poidsVol?dossier.facture.poidsVol:"-"}
        />
        <Fieldset
          className="col-2"
          legend={"Volume"}
          
          content={dossier.facture.volume?dossier.facture.volume:"-"}
        />
        <Fieldset
          className="col-3"
          legend={"Valeur en douane"}
          
          content={dossier.facture.valeur?dossier.facture.valeur:"-"}
        />
        <Fieldset
          className="col-3"
          legend={"Droits & Taxes"}
          
          content={dossier.facture.total?dossier.facture.total:"-"}
        />
      </div>
      {/* ligne 5 Tableau */}
      <div style={{ display: "flex" , fontSize:"0.8rem" }}>
        <Fieldset
          className="col-12"
          legend={""}
          
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
