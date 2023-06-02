import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Title from "../../../components/title/Title";
import Menu from "../../../components/menu/Menu";
import { mdiDotsVertical, mdiListStatus } from "@mdi/js";
import Icon from "@mdi/react";
import { codeDouane } from "../../../helpers/render";
import { useSelector } from "react-redux";
import TreeViewDossier from "./TreeViewDossier";

const Bureau = () => {
  const location = useLocation();
  const dossiers = useSelector((state) => state.dossiers);
  const { state } = location;
  console.log(state.uuid, state.code, dossiers);
  const navigate = useNavigate();

  const filterDossier = dossiers
    .map((dossier) => {
      if (dossier.declaration.length > 0) {
        let declaration = dossier.declaration.map((decl) => {
          return { ...decl, dossier };
        });

        return { ...dossier, declaration };
      }
      return [];
    })
    .flat(Infinity)
    .map((dossier) =>
      dossier.declaration.filter((decl) => decl.douane.uuid == state.uuid)
    )
    .flat(Infinity);

  console.log(filterDossier);
  const linkDossier = [
    {
      icon: mdiListStatus,
      content: "Editer",
      route: `/douane/bureaux/newBureau/${state.uuid}`,
    },
  ];
  const renderLinkDossier = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => navigate(`${item.route}`, { state })}
    >
      <Icon path={item.icon} size={0.6} color="var(--main-color)" />
      <span>{item.content}</span>
    </div>
  );
  return (
    <div>
      <div className="card">
        <Title title="Données (Infos)" />
      </div>
      <div className="dossier col-12">
        {/* infos Bureau */}
        <fieldset className="card entite col-4 ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            {" "}
            <span>Bureau</span>{" "}
            <span>
              <Menu
                icon={mdiDotsVertical}
                size={0.8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  marginTop: 5,
                  right: -5,
                }}
                content={linkDossier}
                // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
                render={renderLinkDossier}
              />
            </span>
          </legend>
          <div className="pr-row">
            <fieldset className="attribut col-2 ">
              <legend>Code</legend>
              <span>{codeDouane(state.code)}</span>
            </fieldset>
            <fieldset className="attribut ml col-7 ">
              <legend>Douane</legend>
              <span>{state.bureau}</span>
            </fieldset>
            <fieldset className="attribut ml col-3 ">
              <legend>Région</legend>
              <span>{state.region}</span>
            </fieldset>
          </div>
        </fieldset>
        {/* List Dossier et declaration */}
        <fieldset className="card entite col-12 ">
          <legend className="card legend">Déclarations</legend>

          <TreeViewDossier declaration={filterDossier} />

          <div className="pr-row"></div>
        </fieldset>
      </div>
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
  );
};

export default Bureau;
