import React from 'react'
import Title from '../../components/title/Title'
import { useNavigate } from 'react-router-dom'

const Sauvegarde = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="card">
    <Title title="Backup's (historiques)" />
  </div>
  <div className="dossier col-12">
    {/* Stockages */}
    <fieldset className="card entite col-12 ">
      <legend
        className="card legend"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        {" "}
        <span>Stockages</span>{" "}
        
      </legend>
      <div className="pr-row">
     
      </div>
    </fieldset>
    {/* Restaurations */}
    <fieldset className="card entite col-12 ">
      <legend
        className="card legend"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        {" "}
        <span>Restaurations</span>{" "}
        
      </legend>
      <div className="pr-row">
     
      </div>
    </fieldset>
    {/* Base de données */}
    <fieldset className="card entite col-12 ">
      <legend
        className="card legend"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        {" "}
        <span>Base de données </span>{" "}
        
      </legend>
      <div className="pr-row">
     
      </div>
    </fieldset>
  </div>
  {/* Button retour */}
  <div className="" style={{ margin: 5 }}>
        <button
          className="button"
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Quitter
        </button>
      </div>
  </>
  )
}

export default Sauvegarde