import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Title from "../../components/title/Title";
import Icon from "@mdi/react";
import { mdiAccountOutline, mdiDatabase, mdiHomeOutline } from "@mdi/js";
import "./parametre.css";

const listCard = [
  { icon: mdiHomeOutline, link: "Société (U)", route: "/parametre/societe" },
  { icon: mdiAccountOutline, link: "Utilisateurs", route: "/parametre/users" },
  { icon: mdiDatabase, link: "Sauvegardes", route: "/parametre/sauvegarde" },
];

const Parametre = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const renderParametre = (
    <div className="parametre">
      <div className="card">
        <Title title="Configurations (base)" />
      </div>
      <div className="cardLink">
        {listCard.map((item, index) => (
          <div
            className=" card cardLink-item"
            key={index}
            onClick={() => navigate(item.route)}
          >
            <Icon path={item.icon} size={2} color={"var(--main-color)"} />

            <div>{item.link}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStat = (
    <div>
      <div className="dossier col-12">
        {/* Socciete */}
        <fieldset className="card entite col-12 ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Icon
              path={mdiHomeOutline}
              size={0.8}
              color={"var(--main-color)"}
            />
            <span>Unitraf</span>{" "}
          </legend>
          <div className="pr-row"></div>
        </fieldset>
        {/* Utilisateur */}
        <fieldset className="card entite col-12 ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Icon
              path={mdiAccountOutline}
              size={0.8}
              color={"var(--main-color)"}
            />
            <span>Comptes</span>{" "}
          </legend>
          <div className="pr-row"></div>
        </fieldset>
        {/*Sauvegarde*/}
        <fieldset className="card entite col-12 ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Icon path={mdiDatabase} size={0.8} color={"var(--main-color)"} />
            <span>Historiques</span>{" "}
          </legend>
          <div className="pr-row"></div>
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
    </div>
  );
  return (
    <div>
      {location === "/parametre" && (
        <>
          {renderParametre}
          {renderStat}
        </>
      )}

      <Outlet />
    </div>
  );
};

export default Parametre;
