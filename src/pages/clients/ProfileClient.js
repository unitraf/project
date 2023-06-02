import React from "react";
import Title from "../../components/title/Title";
import "./profile.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TreeViewDossier from "./TreeViewDossier";

const documentById = (array = [], uuid) =>
  uuid && array.filter((item) => item.nif === uuid);
const ProfileClient = () => {
  const navigate = useNavigate()
  const params = useParams();
  const state = useSelector((state) => state);
  const { clients, dossiers } = state;
  const client = documentById(clients, params.id)[0];

  return (
    <div>
      
      <div className="card" style={{marginBottom:5}} >

        <Title title="Profile" />
        </div>
    
      <div className=" profile col-12">
        {/* infos client */}
        <fieldset className="card entite col-4 ">
          <legend className="card legend">Client</legend>
          <div className="pr-row">
            <fieldset className="attribut col-2 ">
              <legend>Nffif</legend>
              <span>{client.nif}</span>
            </fieldset>
            <fieldset className="attribut ml col-10">
              <legend>Raison sociale</legend>
              <span>{client.nom}</span>
            </fieldset>
          </div>
          <div className="pr-row">
            <fieldset className="attribut col-8">
              <legend>Téléphone</legend>
              <span>{client.tel ? client.tel : "-"}</span>
            </fieldset>
            <fieldset className="attribut col-4 ml">
              <legend>Bp</legend>
              <span>{client.bp ? client.bp : "-"}</span>
            </fieldset>
          </div>
          <div className="pr-row">
            <fieldset className="attribut col-12">
              <legend>Adresse</legend>
              <span>{client.adresse ? client.adresse : "-"}</span>
            </fieldset>
          </div>
        </fieldset>

        {/* infos client */}
        <fieldset className="card entite col-3 ml">
          <legend className="card legend">Contact</legend>
          <div className="pr-row">
            <fieldset className="attribut col-12">
              <legend>Nom</legend>
              <span>{client.contact.nom ? client.contact.nom : "-"}</span>
            </fieldset>
          </div>
          <div className="pr-row">
            <fieldset className="attribut  col-12">
              <legend>Fonction</legend>
              <span>
                {client.contact.fonction ? client.contact.fonction : "-"}
              </span>
            </fieldset>
          </div>
          <div className="pr-row">
            <fieldset className="attribut col-4">
              <legend>Téléphone</legend>
              <span>{client.contact.teel ? client.contact.tel : "-"}</span>
            </fieldset>
            <fieldset className="attribut col-8 ml">
              <legend>Email</legend>
              <span>{client.contact.email ? client.contact.email : "-"}</span>
            </fieldset>
          </div>
        </fieldset>

        {/* infos complément */}
        <fieldset className="card entite col-4 ml">
          <legend className="card legend">Catégorie</legend>
          <div className="pr-row">
            <fieldset className="attribut  col-4">
              <legend>Type</legend>
              <span>
                {client.type.designation ? client.type.designation : "-"}
              </span>
            </fieldset>
            <fieldset className="attribut ml col-4">
              <legend>% Tva</legend>
              <span>{client.type.tva ? client.type.tva : "-"}</span>
            </fieldset>
            <fieldset className="attribut ml col-4">
              <legend>Compte Aux.</legend>
              <span>{client.compte ? client.compte : "-"}</span>
            </fieldset>
          </div>
          <div className="pr-row">
            <fieldset className="attribut  col-12">
              <legend>Mode de reglément</legend>
              <span>
                {client.type.mode.libelle ? client.type.mode.libelle : "-"}
              </span>
            </fieldset>
          </div>
        </fieldset>

        {/* infos adresses Livraison */}
        <fieldset className="card entite col-7 ">
          <legend className="card legend">Coordonnées de livraisons</legend>
          <div className="pr-row">
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Adresse</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nom</td>
                  <td>Adresse</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pr-row"></div>
        </fieldset>

        {/* infos Responsable */}
        <fieldset className="card entite col-3 ml">
          <legend className="card legend">Résp. CC</legend>
          <div className="pr-row">
            <fieldset className="attribut  col-12">
              <legend>Intervenant</legend>
              <span>
                {client.responsable.nom ? client.responsable.nom : "-"}
              </span>
            </fieldset>
          </div>
          <div className="pr-row"></div>
        </fieldset>

        {/* infos notes */}
        <fieldset className="card entite col-12 ">
          <legend className="card legend">Compléments</legend>
          <div className="pr-row">
            <fieldset className="attribut  col-12">
              <legend>Notes</legend>
              <span>{client.notes ? client.notes : "-"}</span>
            </fieldset>
          </div>
          <div className="pr-row"></div>
        </fieldset>

        {/* infos notes */}
        <fieldset className="card entite col-12 ">
          <legend className="card legend">Performances</legend>
          <div className="pr-row">
            <fieldset className="attribut  col-2">
              <legend>Ouvert</legend>
              <span>a voir</span>
            </fieldset>
            <fieldset className="attribut ml col-2">
              <legend>Ouvert</legend>
              <span>a voir</span>
            </fieldset>
            <fieldset className="attribut ml col-2">
              <legend>Ouvert</legend>
              <span>a voir</span>
            </fieldset>
          </div>
          <div className="pr-row"></div>
        </fieldset>
        {/* infos dossiers */}
        <fieldset className="card entite col-12 ">
          <legend className="card legend">Historique</legend>

          <TreeViewDossier dossiers={dossiers} />

          <div className="pr-row"></div>
        </fieldset>

      </div>
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

export default ProfileClient;
