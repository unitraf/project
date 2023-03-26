import React, { useState } from "react";
import "./onglets.css";

const Onglets = (props) => {
  const [toggleOnglets, setToggleOnglets] = useState(0);

  const toggleOnglet = (index) => {
    setToggleOnglets(index);
  };

  const renderHeaders = (
    <div style={{ display: "flex" }}>
      {props.ongletHeaders &&
        props.ongletHeaders.map((onglet, index) => (
          <div
            key={index}
            className={toggleOnglets === index ? " onglet-active" : "onglet"}
            style={{ display: "flex", alignItems:"center" }}
            onClick={() => {
              props.active && props.active(onglet);
              toggleOnglet(index);
            }}
          >
            {onglet}
             {props.icon&&props.icon}
          </div>
          
        ))}
        {/* {props.icon&&props.icon} */}
    </div>
  );

  return (
    <div className="container ">
      {/* Entete onglets*/}
      <div className="header-onglets">{renderHeaders}{props.menu} </div>
      {/* Contenu onglet */}

      <div className="contenu-onglets ">
        {props.ongletBody && props.ongletBody[toggleOnglets]}
      </div>
    </div>
  );
};

export default Onglets;
