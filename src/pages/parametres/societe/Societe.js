import React from "react";
import { useSelector } from "react-redux";
import "./societe.css";
import Title from "../../../components/title/Title";
import Entete from "./entete/Entete";
import Banques from "./banque/Banques";
import Modes from "./reglement/Modes";
import Exercice from "./exercice/Exercice";
import Types from "./clientele/Types";
import { useNavigate } from "react-router-dom";

const Societe = () => {
  const navigate = useNavigate()
  const state = useSelector((state) => state.societe);
  const { unitraf, banques, reglements, typeClients, exercice } = state;

  return (
    <div>
      <div className="card">
        <Title title="Données (Informations)" />
      </div>
      <div className="dossier col-12">
        {/* unitraf Entete */}

        <Entete unitraf={unitraf} />
        {/* unitraf Banque */}

        <Banques banques={banques} />
        {/* unitraf Mode reglement */}

        <Modes reglements={reglements} />
        <Exercice exercice={[exercice]} />
        {/* unitraf CLientele */}

        <Types typeClients={typeClients} />
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
    </div>
  );
};

export default Societe;
