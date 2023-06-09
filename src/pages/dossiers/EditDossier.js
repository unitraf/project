import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import DossierForm from "./DossierForm";
import "./dossiers.css";
import Title from "../../components/title/Title";
import Menu from "../../components/menu/Menu";
import { mdiDotsVertical, mdiFolderPlus } from "@mdi/js";
import Icon from "@mdi/react";
import TreeViewDossier from "./TreeViewDossier";
import { useSelector } from "react-redux";

const EditDossier = () => {
  const params = useParams();
  const location = useLocation();
  const { state } = location;
  console.log("state", state);
  const [dossier, setDossier] = useState(null);
  const currentDossier = useSelector((state) => state.dossiers).filter(
    (dossier) => dossier.uuid === state.uuid
  )[0];
  console.log("currentDossier", currentDossier);
  const navigate = useNavigate();
  useEffect(() => {
   
    currentDossier && setDossier(currentDossier);
  }, [currentDossier]);

  const linkTypes = [
    {
      icon: mdiFolderPlus,
      content: "T1",
      route: `/douane/t1/newT1`,
    },
    {
      icon: mdiFolderPlus,
      content: "Déclaration",
      route: `/douane/ddu/newDdu`,
    },
    {
      icon: mdiFolderPlus,
      content: "Minute",
      route: `/transit/minutes/newMinute`,
    },
    {
      icon: mdiFolderPlus,
      content: "Prestation",
      route: `/facturation/devis/newPrestation`,
    },
  ];

  const renderLink = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => navigate(`${item.route}/${state.numero}`, {})}
    >
      <Icon path={item.icon} size={0.6} color="var(--main-color)" />
      <span>{item.content}</span>
    </div>
  );
  return (
    <div>
      <div className="card">
        <Title
          title={
            params.destroyId ? "Dossier (Suppression)" : "Dossier (Edition)"
          }
        />
      </div>
      <div className="card card-top">
        {dossier && <DossierForm dossier={dossier} setDossier={setDossier} />}
      </div>
      <div className="dossier col-12">
        {params.updateId &&
        <fieldset className="card entite col-12  ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            {" "}
            <span>Document(s)</span>{" "}
            <span>
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
                content={linkTypes}
                // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
                render={renderLink}
              />
            </span>
          </legend>
          {dossier && <TreeViewDossier dossier={dossier} />}
          <div className="pr-row"></div>
        </fieldset>}
      </div>
    </div>
  );
};

export default EditDossier;
