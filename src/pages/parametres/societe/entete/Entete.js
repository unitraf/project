import { mdiDotsVertical, mdiListStatus } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../../../components/menu/Menu";

const Entete = ({ unitraf }) => {
  const navigate = useNavigate();
  const linkEntete = [
    {
      icon: mdiListStatus,
      content: "Editer",
      route: `/parametre/societe/entete`,
    },
  ];

  const renderLink = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => navigate(`${item.route}`, { state: unitraf })}
    >
      <Icon path={item.icon} size={0.6} color="var(--main-color)" />
      <span>{item.content}</span>
    </div>
  );
  return (
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
        <span >Unitraf</span>{" "}
        <span >
          <Menu
            icon={mdiDotsVertical}
            size={0.7}
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              marginTop: 5,
              right: -5,
            }}
            content={linkEntete}
            // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
            render={renderLink}
          />
        </span>
      </legend>
      <div className="pr-row">
        <fieldset className="attribut col-1 ">
          <legend>Nif</legend>
          <span>{unitraf ? unitraf.nif : "-"}</span>
        </fieldset>
        <fieldset className="attribut ml col-2 ">
          <legend>Rccm</legend>
          <span>{unitraf ? unitraf.rccm : "-"}</span>
        </fieldset>
        <fieldset className="attribut ml col-1 ">
          <legend>Agrément</legend>
          <span>{unitraf ? unitraf.agrement : "-"}</span>
        </fieldset>
        <fieldset className="attribut ml col-1 ">
          <legend>Bp</legend>
          <span>{unitraf ? unitraf.bp : "-"}</span>
        </fieldset>
        <fieldset className="attribut ml col-3 ">
          <legend>Adresse</legend>
          <span>
            {unitraf ? `${unitraf.adresse1} - ${unitraf.adresse2}` : "-"}
          </span>
        </fieldset>
        <fieldset className="attribut ml col-3 ">
          <legend>Téléphones</legend>
          <span>
            {unitraf ? `(+227) ${unitraf.tel1}/${unitraf.tel2}` : "-"}
          </span>
        </fieldset>
        <fieldset className="attribut ml col-1 ">
          <legend>Banque</legend>
          <span>{unitraf.banque ? `${unitraf.banque.nom}` : "-"}</span>
        </fieldset>
      </div>
    </fieldset>
  );
};

export default Entete;
