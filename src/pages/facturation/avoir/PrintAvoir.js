import React from "react";
import Fieldset from "../../../components/fieldset/Fieldset";
import { NumberToLetter } from "../../../helpers/convertNumber";
import { getTotal, groupBy } from "../../../helpers/fonctions";
import { annee, anneeMois, date, nombre, prefixe } from "../../../helpers/render";
import "../facturation.css";
const PrintAvoir = (props) => {
  const { dossier } = props;
  const avoirs = dossier.avoirs[0]
  const prestations =
  avoirs && groupBy([...(avoirs.prestations || [])], "rubrique");
  const listDebours = avoirs&&prestations['débours']
  const listInterv = avoirs&&prestations['interventions']
  const listAutres = avoirs&&prestations['autres']
const net = getTotal(avoirs.prestations, "montant")+getTotal(avoirs.prestations, "taxe")
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
      <Fieldset className="col-3" legend="Débours" content={avoirs.facture.debours?avoirs.facture.debours:"-"} />
      <Fieldset className="col-3" legend="INTERV." content={avoirs.facture.interventions?avoirs.facture.interventions:"-"} />
      <Fieldset className="col-3" legend="HT" content={avoirs.facture.ht?avoirs.facture.ht:"-"} />
      <Fieldset className="col-3" legend="Tva" content={avoirs.facture.tva?avoirs.facture.tva:"-"} />
      <Fieldset className="col-3" legend="TTC" content={avoirs.facture.net?avoirs.facture.net:"-"}/>
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
        Avoir
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
              content={`${anneeMois(avoirs.facture.date) }/${avoirs.facture.numero}`}
             
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
                <p  id="code">{avoirs.code&&(`${avoirs.code}`).toUpperCase()}</p>
                <p  id="nim">{avoirs.nim&&(`Nim : ${avoirs.nim}`).toUpperCase()}</p>
                <p  id="compteur">{avoirs.compteur&&(`Compteur : /${avoirs.compteur} AV`).toUpperCase()}</p>
                <p  id="date">{avoirs.date&&(`Date-Heure : ${date(avoirs.date)} ${avoirs.heure}:${avoirs.seconde}`).toUpperCase()} </p>
        
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

          content={`${avoirs.facture.nombre} ${avoirs.facture.type}(s)`}
        />
        <Fieldset
          className="col-5"
          legend={"Description"}
          
          content={avoirs.facture.description?avoirs.facture.description:"-"}
        />
        <Fieldset
          className="col-2"
          legend={"Provenance"}
          
          content={avoirs.facture.provenance?avoirs.facture.provenance:"-"}
        />
        <Fieldset
          className="col-3"
          legend={"Document Transp."}
          
          content={avoirs.facture.document?avoirs.facture.document:"-"}
        />
      </div>
      {/* ligne 4 */}
      <div style={{ display: "flex", fontSize:"0.8rem" }}>
        <Fieldset
          className="col-2"
          legend={"Poids Brut"}
          
          content={avoirs.facture.poids?avoirs.facture.poids:"-"}
        />
        <Fieldset
          className="col-2"
          legend={"Poids Vol."}
          
          content={avoirs.facture.poidsVol?avoirs.facture.poidsVol:"-"}
        />
        <Fieldset
          className="col-2"
          legend={"Volume"}
          
          content={avoirs.facture.volume?avoirs.facture.volume:"-"}
        />
        <Fieldset
          className="col-3"
          legend={"Valeur en douane"}
          
          content={avoirs.facture.valeur?avoirs.facture.valeur:"-"}
        />
        <Fieldset
          className="col-3"
          legend={"Droits & Taxes"}
          
          content={avoirs.facture.total?avoirs.facture.total:"-"}
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
                {NumberToLetter(net)}
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PrintAvoir;
