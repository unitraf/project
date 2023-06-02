import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Title from "../../../components/title/Title";
import Menu from "../../../components/menu/Menu";
import {
  mdiDotsVertical,
  mdiFilter,
  mdiFilterCheckOutline,
  mdiListStatus,
} from "@mdi/js";
import Icon from "@mdi/react";
import { annee, date, nombre } from "../../../helpers/render";
import { getTotal, groupBy } from "../../../helpers/fonctions";
import TreeViewDossier from "./TreeViewDossier";
import RadialBar from "../../clients/chart/RadialBar";

const Exo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const qteTotalMarchandise = nombre(getTotal(state.details, "quantite"));
  const valTotalMarchandise = nombre(getTotal(state.details, "valeur"));
  const dossiers = useSelector((state) => state.dossiers);
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
      dossier.declaration.filter((decl) => decl.exo.numero == state.numero)
    )
    .flat(Infinity);
  const qteTotalImputation = nombre(getTotal(filterDossier, "nombre"));
  const valTotalImputation = nombre(getTotal(filterDossier, "valeur"));
  const listPosition =
    filterDossier.length > 0 && groupBy(filterDossier, "position");
  const listArticle =
    filterDossier.length > 0 &&
    groupBy(
      filterDossier.map((decl) => decl.articles).flat(Infinity),
      "position"
    );
  console.log(groupBy(listArticle, "position"));
  console.log(listArticle);
  const pourcentage =
    getTotal(filterDossier, "valeur") / getTotal(state.details, "valeur");

  console.log("pourcentage", pourcentage.toPrecision(3));
  const linkDossier = [
    {
      icon: mdiListStatus,
      content: "Editer",
      route: `/douane/exo/newExo/${state.uuid}`,
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
        <fieldset className="card entite col-10 ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            {" "}
            <span>Certificat d'exonération</span>{" "}
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
            <fieldset className="attribut col-3 ">
              <legend>Bénéficiaire</legend>
              <span>{state.beneficiaire.nom}</span>
            </fieldset>
            <fieldset className="attribut ml col-1 ">
              <legend>Année</legend>
              <span>{annee(state.emission)}</span>
            </fieldset>
            <fieldset className="attribut ml col-1 ">
              <legend>Code</legend>
              <span>{state.code}</span>
            </fieldset>
            <fieldset className="attribut ml col-1 ">
              <legend>Numéro</legend>
              <span>{state.numero}</span>
            </fieldset>
            <fieldset className="attribut ml col-2 ">
              <legend>Emission</legend>
              <span>{date(state.emission)}</span>
            </fieldset>
            <fieldset className="attribut ml col-2 ">
              <legend>Expiration</legend>
              <span>{date(state.expiration)}</span>
            </fieldset>
            <fieldset className="attribut ml col-3 ">
              <legend>Bureau</legend>
              <span>{state.lieu}</span>
            </fieldset>
          </div>
        </fieldset>
        <div
          className="col-1"
          style={{ position: "relative", right: 0, top: 15, height: 15 }}
        >
          <RadialBar pourcentage={pourcentage.toPrecision(1)} />
        </div>

        {/* Details articles */}
        <fieldset className="card entite col-5 ">
          <legend className="card legend">Marchandise(s)</legend>
          <table>
            <thead>
              <tr>
                <th className="col-4">Désignation</th>
                <th className="col-2">Position</th>
                <th className="col-2">Quantité</th>
                <th className="col-2">Valeur</th>
              </tr>
            </thead>
            <tbody>
              {state.details &&
                state.details.map((article, index) => (
                  <tr key={index}>
                    <td>{article.designation}</td>
                    <td>{article.position}</td>
                    <td>{nombre(article.quantite)}</td>
                    <td>{nombre(article.valeur)}</td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}>Total</td>

                <td>{qteTotalMarchandise}</td>
                <td>{valTotalMarchandise}</td>
              </tr>
            </tfoot>
          </table>

          <div className="pr-row"></div>
        </fieldset>
        {/* Details articles */}
        <fieldset className="card entite col-5 ">
          <legend className="card legend">Imputation(s)</legend>
          <table>
            <thead>
              <tr>
                <th className="col-4">Désignation</th>
                <th className="col-2">Position</th>
                <th className="col-2">Quantité</th>
                <th className="col-2">Valeur</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(listArticle).length > 0 &&
                Object.keys(listArticle).map((article, index) => (
                  <tr key={index}>
                    <td>{"-"}</td>
                    <td>{article}</td>
                    <td>{nombre(getTotal(listArticle[article], "nombre"))}</td>
                    <td>{nombre(getTotal(listArticle[article], "valeur"))}</td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}>Total</td>

                <td>{qteTotalImputation}</td>
                <td>{valTotalImputation}</td>
              </tr>
            </tfoot>
          </table>

          <div className="pr-row"></div>
        </fieldset>

        {/* List Dossier et declaration */}
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
            <span>Déclaration(s)</span>{" "}
            <span>
              <Menu
                icon={mdiFilterCheckOutline}
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

export default Exo;
