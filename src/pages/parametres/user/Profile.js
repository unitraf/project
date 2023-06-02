import React from "react";
import Menu from "../../../components/menu/Menu";
import { mdiDotsVertical, mdiOnepassword } from "@mdi/js";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import Title from "../../../components/title/Title";
import TreeViewDossier from "./TreeViewDossier";
import { useSelector } from "react-redux";

const Profile = () => {
  const location = useLocation();
  const dossiers = useSelector((state) => state.dossiers);

  const { state } = location;

  const navigate = useNavigate();
  const link = [
    {
      icon: mdiOnepassword,
      content: "Réinitialiser",
      route: "/parametre/users",
    },
  ];
  const renderLink = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => navigate(`${item.route}/${state.uuid}`, { state })}
    >
      <Icon path={item.icon} size={0.5} color="var(--main-color)" />
      <span>{item.content}</span>
    </div>
  );
  return (
    <>
      <div className="card">
        <Title title="Données (Informations)" />
      </div>
      <div className="dossier col-12">
        {/* Profile */}
        <div className="dossier col-12">
          <fieldset className="card entite col-12 ">
            <legend className="card legend">Profile</legend>
            <div className="pr-row">
              <fieldset className="attribut col-3 ">
                <legend>Uuid</legend>
                <span>{state ? state.uuid : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-2 ">
                <legend>Prénom</legend>
                <span>{state.prenom ? state.prenom : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-3 ">
                <legend>Nom</legend>
                <span>{state.nom ? state.nom : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-2 ">
                <legend>Fonction</legend>
                <span>{state.fonction ? state.fonction : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-2 ">
                <legend>Email</legend>
                <span>{state.email ? state.email : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-1 ">
                <legend>Status</legend>
                <span>{state.status ? state.status : "-"}</span>
              </fieldset>
            </div>
          </fieldset>
        </div>

        {/*PassWord  */}
        <div className="dossier ">
          <fieldset className=" card entite ">
            <legend
              className="card legend"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              {" "}
              <span>Mot de passe</span>{" "}
              <span>
                <Menu
                  icon={mdiDotsVertical}
                  size={0.8}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    marginTop: 5,
                  }}
                  content={link}
                  // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
                  render={renderLink}
                />
              </span>
            </legend>
            <div className="autorisation"></div>
          </fieldset>
        </div>
        {/*Autorisations  */}
        <div className="dossier ">
          <fieldset className=" card entite ">
            <legend
              className="card legend"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              {" "}
              <span>Autorisations d'accès</span>{" "}
            </legend>
            <div className="autorisation">
              {state.privileges.length > 0 &&
                state.privileges.map((item, index) => (
                  <span key={index} className="acces">
                    {item} <span className="acces-x"></span>
                  </span>
                ))}
            </div>
          </fieldset>
        </div>
        {/* infos dossiers client*/}
        <fieldset className="card entite col-12 ">
          <legend className="card legend">Dossiers Client(s)</legend>

          <TreeViewDossier dossiers={dossiers} />

          <div className="pr-row"></div>
        </fieldset>

        <div className="card" style={{ margin: 5 }}>
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
    </>
  );
};

export default Profile;
