import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Title from "../../components/title/Title";
import {
  mdiBookAlertOutline,
  mdiBookCheck,
  mdiBookMultipleOutline,
  mdiCashRegister,
  mdiFileMultipleOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
const listCard = [
  {
    icon: mdiFileMultipleOutline,
    link: "Journaux",
    route: "/comptabilite/journaux",
  },
  {
    icon: mdiBookMultipleOutline,
    link: "Grand Livre",
    route: "/comptabilite/grandLivre",
  },
  {
    icon: mdiBookAlertOutline,
    link: "Balance",
    route: "/comptabilite/balance",
  },
  { icon: mdiBookCheck, link: "Bilan", route: "/comptabilite/bilan" },
  { icon: mdiCashRegister, link: "Résultat", route: "/comptabilite/resultat" },
];
const Comptabilte = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const renderCompta = (
    <div className="compta">
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

  const renderSoldes = (
    <div className="dossier col-12">
      {/* Graph */}
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
          <span>Graphes</span>{" "}
        </legend>
      </fieldset>
      {/* SIG */}
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
          <span>Soldes Intermédiaires de Gestion</span>{" "}
        </legend>
      </fieldset>
    </div>
  );
  return (
    <div>
      <div className="card">
        <Title title="Comptabilité (détails)" />
      </div>
      {location === "/comptabilite" && (
        <>
          {renderCompta} {renderSoldes}
        </>
      )}
      {/* {Outlet} */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Comptabilte;
