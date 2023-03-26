import React from 'react'
import { annee, date, nombre } from '../../helpers/render';
import './printMinute.css'
const PrintMinute = (props) => {
const {minute} = props

    const render = (
        <div className='print-minute-content' >
            
          {/* Header */}
          <section className='m-header'>
            <div className='col-2' style={{ display:"flex", flexDirection:"column",justifyContent:"space-between" }}>
              <h3 >MINUTE</h3>
              <fieldset  className='fieldset' >
                <legend className='legend'>N° Dossier</legend>
                <p>
                  {minute.dossier
                    ? `380/${minute.dossier}/998${annee(minute.date)}`
                    : "-"}
                </p>
              </fieldset>
            </div>
    
            <fieldset  className='fieldset col-1' >
              <legend  className='legend'>Rép.</legend>
              <p >{minute.repertoire ? minute.repertoire : "-"}</p>
            </fieldset>
            <fieldset  className='fieldset col-5' >
                {" "}
                <legend className="legend" >Destinataire</legend>
                <p>
                  {" "}
                  {minute.client ?`${ minute.client.nom} (${minute.client.nif})` : "-"}
                </p>
              </fieldset>
            <fieldset  className='fieldset col-3' >
              <legend className='legend'>Déclarant</legend>
              <p > UNITRAF (NE85364037) </p>
            </fieldset>
            
            {/* <Logo title="Logo" style={{ width: "15%" }} /> */}
          </section>
          {/* Body  mbody*/}
          <div className="">
    
          
          <section className='body' >
            {/* ligne 1 */}
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <fieldset  className='fieldset col-3'>
                {" "}
                <legend className="legend" >N° T1</legend>
                <p>{`${minute.carnet.numero} Du ${date(minute.carnet.date)}`}</p>
              </fieldset>
              <fieldset  className='fieldset col-2' >
                {" "}
                <legend className="legend" >N° Sommier</legend>
                <p>{`${minute.carnet.sommier}/${annee(minute.carnet.date)}`}</p>
              </fieldset>
           
              <fieldset  className='fieldset col-2' >
                <legend className="legend" >BL/LTA</legend>
                <p> {minute.document ? minute.document : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-2'>
                {" "}
                <legend className="legend" >Mode</legend>
                <p> {minute.mode ? minute.mode : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-3' >
                {" "}
                <legend className="legend" >Id Transport</legend>
                <p>{minute.carnet.transport ? minute.carnet.transport : "-"}</p>
              </fieldset>
            </div>
            {/* ligne 2 */}
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
           
              <fieldset  className='fieldset col-3'>
                {" "}
                <legend className="legend" >Frontière</legend>
                <p>{minute.carnet.burEntree ? minute.carnet.burEntree : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-2' >
                {" "}
                <legend className="legend" >Provenance</legend>
                <p> {minute.carnet.provenance ? minute.carnet.provenance :"-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-2' >
                <legend className="legend" >Origine</legend>
                <p> {minute.origine ? minute.origine : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-5' >
                {" "}
                <legend className="legend" >Bureau Douane</legend>
                <p>{minute.carnet.burSortie ? minute.carnet.burSortie : "-"}</p>
              </fieldset>
            </div>
            {/* ligne 3 */}
            {/* <div style={{display:"flex"}}>
              <fieldset  className='fieldset col-6' >
                {" "}
                <legend className="legend" >Importateur</legend>
                <p>
                  {" "}
                  {minute.client ?`${ minute.client.nom} (${minute.client.nif})` : "-"}
                </p>
              </fieldset>
              <fieldset  className='fieldset col-6' >
                {" "}
                <legend className="legend" >Destinataire</legend>
                <p>
                  {" "}
                  {minute.client ?`${ minute.client.nom}` : "-"}
                </p>
              </fieldset>
            </div> */}
            {/* ligne 4 */}
            <div   style={{display:"flex", justifyContent:"space-between"}}>
            
              <fieldset  className='fieldset col-2' >
                {" "}
                <legend className="legend" >Nombre</legend>
                <p>{minute.nombre ?nombre(minute.nombre)  : "-"} </p>
              </fieldset>
              <fieldset  className='fieldset col-1' >
                <legend className="legend" >Us</legend>
                <p>{minute.us ? minute.us : "U"}</p>
              </fieldset>
              <fieldset  className='fieldset col-1' >
                {" "}
                <legend className="legend" >Nature</legend>
                <p> {minute.type ? minute.type : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-2' >
                {" "}
                <legend className="legend" >Poids</legend>
                <p> {minute.poids ?`${ nombre(minute.poids) } Kg` : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-2' >
                {" "}
                <legend className="legend" >Position</legend>
                <p>{minute.position ? minute.position : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-4'>
                {" "}
                <legend className="legend" >Désignation</legend>
                <p> {minute.designation ? minute.designation : "-"}</p>
              </fieldset>
              
            </div>
            {/* ligne 5 */}
            {/* valeur */}
            <fieldset  className='fieldset' style={{ justifyContent:"space-between"}}>
              {" "}
              <legend className="legend" >Valeurs</legend>
              <fieldset  className='fieldset col-3' >
                {" "}
                <legend className="legend" >Fob</legend>
                <p> {minute.fob ? nombre(minute.fob ): "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-3'>
                {" "}
                <legend className="legend" >Fret</legend>
                <p> {minute.fret ? nombre( minute.fret): "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-3' >
                {" "}
                <legend className="legend" >Assurance</legend>
                <p> {minute.assurance ?nombre( minute.assurance) : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-3' >
                {" "}
                <legend className="legend" >Autres</legend>
                <p>{minute.autres ? nombre( minute.autres) : "-"} </p>
              </fieldset>
             
            </fieldset>
    
            {/* ligne 8 */}
    
            <div className="" style={{display:"flex", justifyContent:"space-around"}}>
            <fieldset  className='fieldset' style={{ width:"25%"}}>
                {" "}
                <legend className="legend" >Régime</legend>
                <p> {minute.regime ? minute.regime : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset' style={{ width:"25%"}}>
                {" "}
                <legend className="legend" >N° Exonération</legend>
                <p>{minute.exo ? minute.exo : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset' style={{ width:"25%"}}>
                {" "}
                <legend className="legend" >N° License</legend>
                <p>{minute.license ? minute.license :"-"}</p>
              </fieldset>
            </div>
            {/* Imposition */}
            <fieldset  className='fieldset' >
              <legend className="legend" >Calcul des impositions</legend>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Base d'imposition</th>
                    <th>Taux</th>
                    <th>Montant</th>
                  </tr>
                </thead>
                <tbody>
                  {minute.calculs&&minute.calculs.map(
                        (item, index) =>
                          item.checked && (
                            <tr key={index}>
                              <td className="col-2">{Object.keys(item)[0]}</td>
                              <td className="col-4">
                                {Object.keys(item)[0] === "TVA"
                                  ?parseInt(minute.valeur) + parseInt(minute.baseTva) 
                                  : Object.keys(item)[0] === "DA"
                                  ? minute.poids
                                  : minute.valeur}
                              </td>
                              <td className="col-3">{Object.values(item)[0]}</td>
                              <td className="col-3">{Math.round(item.montant).toLocaleString() }</td>
                            </tr>
                          )
                      )}
                    
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3}>Total</td>
    
                    <td>{minute.droits?Math.round(minute.droits).toLocaleString():"-"}</td>
                  </tr>
                </tfoot>
              </table>
            </fieldset>
            {/* Taxes */}
            <fieldset  className='fieldset'
             
            >
              <legend className="legend" >Taxes</legend>
    
              <fieldset  className='fieldset col-3' >
                {" "}
                <legend className="legend" >FVC</legend>
                <p> {minute.fvc ?nombre(minute.fvc)  : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-3' >
                {" "}
                <legend className="legend" >RI</legend>
                <p>{minute.ri ?nombre(minute.ri) : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-3' >
                {" "}
                <legend className="legend" >Scanner</legend>
                <p> {minute.fs ? nombre(minute.fs): "-"}</p>
              </fieldset>
    
              <fieldset  className='fieldset col-3'>
                {" "}
                <legend className="legend" >Autres</legend>
                <p> {minute.af ? nombre(minute.af): "-"}</p>
              </fieldset>
           
            </fieldset>
    
            {/* Total declaration */}
            <div style={{ display:"flex", justifyContent: "space-around" }}>
            <fieldset  className='fieldset col-3' >
                {" "}
                <legend className="legend" >Valeur Douane</legend>
                <p>{minute.valeur ? nombre( minute.valeur) : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-3' >
                {" "}
                <legend className="legend" >Montant Imposit°</legend>
                <p>{minute.droits ? nombre(minute.droits) : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-3' >
                {" "}
                <legend className="legend" >Taxes Globales</legend>
                <p>{minute.taxe ? nombre( minute.taxe) : "-"}</p>
              </fieldset>
              <fieldset  className='fieldset col-3' >
                {" "}
                <legend className="legend" >Total Déclaration</legend>
                <p>{minute.total ? nombre(minute.total) : "-"}</p>
              </fieldset>
            </div>
            <div className=' minute-footer col-12' style={{display:"flex", justifyContent: "space-around" }}>
              {/* Document */}
              <fieldset  className='fieldset col-6' >
                <legend className="legend" >Documents joints</legend>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Type</th>
                      <th>Reférences</th>
                    </tr>
                  </thead>
                  <tbody>
                    {minute.pj.map(
                      (item, index) =>
                        item.checked && (
                          <tr key={index}>
                            <td className="col-1">1</td>
                            <td className="col-4">{item.type}</td>
                            <td className="col-7"></td>
                          </tr>
                        )
                    )}
                  </tbody>
                </table>
              </fieldset>
              <fieldset  className='fieldset col-6' >
                <legend className="legend" >Observations</legend>
                {/* <span style={{position:"sticky",bottom:10, right:10}}>{date(minute.createAt) }</span> */}
              </fieldset>
            </div>
          </section></div>
          
          {/* <section className="footer">footer</section> */}
        </div>
      )
  return (
    <div>{render}</div>
  )
}

export default PrintMinute