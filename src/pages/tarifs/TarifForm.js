import React from 'react'
import { Form, useNavigate } from 'react-router-dom';

const TarifForm = (props) => {
   const  {tarif}=props
   const navigate = useNavigate()
  return (
    <Form method="post" id="tarif-form">
          {/* ligne 1 */}
          <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
            <div className="inputBox col-3">
              <input
                type="number"
                name="nts"
                autoComplete="off"
                defaultValue={tarif.nts}
                required
              />

              <label htmlFor={"nts"}>N.T.S</label>
            </div>
            <div className="inputBox col-5">
              <input
                type="text"
                name="designation"
                autoComplete="off"
                defaultValue={tarif.designation}
                required
              />
              <label htmlFor={"designation"}>Désignation</label>
            </div>
            <div className="inputBox col-1">
              <input
                type="text"
                name="us"
                autoComplete="off"
                defaultValue={tarif.us}
                required
              />
              <label htmlFor={"us"}>Us</label>
            </div>
          </div>
          {/* ligne 2 */}
          <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
            {tarif.entree.map((item, index)=>
             <div className="inputBox col-1" key={index}>
             <input
               type="text"
               name={Object.keys(item)[0]}
               autoComplete="off"
               defaultValue={Object.values(item)[0]}
               required
             />

             <label htmlFor={Object.keys(item)[0]}>{Object.keys(item)[0]}</label>
           </div>
            )}
          </div>
          {/* ligne 3 */}
          <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
            {tarif.sortie.map((item, index)=>
             <div className="inputBox col-1" key={index}>
             <input
               type="text"
               name={Object.keys(item)[0]}
               autoComplete="off"
               defaultValue={Object.values(item)[0]}
               required
             />

             <label htmlFor={Object.keys(item)[0]}>{Object.keys(item)[0]}</label>
           </div>
            )}
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

export default TarifForm