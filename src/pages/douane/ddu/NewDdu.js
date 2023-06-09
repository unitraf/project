import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActionData, useNavigate } from "react-router-dom";

import { ddu as init } from "./init";
import DduForm from "./DduForm";
import { updateDossier } from "../../../redux/dossier/action";
import Title from "../../../components/title/Title";
import { displaySnack } from "../../../components/snackbar/SnackBar";
import Menu from "../../../components/menu/Menu";
import { mdiFilterMenuOutline, mdiFolderSearchOutline, mdiPlus } from "@mdi/js";
import { annee, date, prefixe } from "../../../helpers/render";
import { getTotal, nombre } from "../../../helpers/fonctions";

export async function NewDduAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  displaySnack("Nouvelle déclaration ajouter");
  return data;
}

const NewDdu = () => {
  const [ddu, setDdu] = useState(init);

  const actionData = useActionData();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { dossiers, exos } = state;
  const dossier =
    ddu.dossier &&
    dossiers.filter((dossier) => dossier.numero === ddu.dossier)[0];

  const listExos =
    ddu.dossier &&
    exos.filter((exo) => exo.beneficiaire.uuid === dossier.client.uuid);

  useEffect(() => {
    let declaration = actionData && [...(dossier.declaration || []), ddu];
    actionData &&
      dispatch(
        updateDossier({
          ...dossier,
          status: "Douane",
          declaration,
        })
      );
    setTimeout(() => {
      actionData && navigate(-1);
    }, 3000);
  }, [actionData, dispatch, navigate]);

  // --------Dossier Fielset-----------
  const handleDossier = (e) => {
    setDdu({ ...ddu, dossier: e.target.value });
  };
  const linkDossier = [
    {
      icon: mdiPlus,
      content: "Numéro",
      route: "newBureau",
    },
  ];
  const renderLinkDossier = (item, index) => (
    <div className="item" key={index}>
      <input
        type="number"
        maxLength={3}
        name={item.dossier}
        id="dossier"
        placeholder={item.content}
        style={{
          width: 65,
          borderRadius: "var(--border-radius)",
          textAlign: "center",
          paddingInline: 5,
          paddingTop: 2,
        }}
        onChange={handleDossier}
      />
    </div>
  );
  const renderDossier = (
    <div className="" style={{ marginTop: 5 }}>
      <div className="dossier  col-12">
        {/*renderDossier */}
        <fieldset className="card entite col-12 ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <span style={{ marginRight: 5 }}>Dossier</span>{" "}
            <Menu
              icon={mdiFolderSearchOutline}
              size={0.7}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                marginTop: 5,
                right: -5,
              }}
              content={linkDossier}
              render={renderLinkDossier}
            />
          </legend>

          <div className="pr-row">
            <fieldset className="attribut col-1 ">
              <legend>N° Transit</legend>
              <span>{prefixe(dossier.date, dossier.numero)}</span>
            </fieldset>
            <fieldset className="attribut ml col-1">
              <legend>Date</legend>
              <span>{dossier.date ? date(dossier.date) : "-"}</span>
            </fieldset>
            <fieldset className="attribut ml col-1">
              <legend>Colis</legend>
              <span>
                {dossier.nombre
                  ? `${dossier.nombre} ${dossier.type}${
                      dossier.nombre > 1 && "s"
                    }`
                  : "-"}
              </span>
            </fieldset>
            <fieldset className="attribut ml col-1">
              <legend>Transport</legend>
              <span>{dossier.mode ? `${dossier.mode}` : "-"}</span>
            </fieldset>
            <fieldset className="attribut ml col-2">
              <legend>{`Document (${
                dossier.mode === "Aérien"
                  ? "LTA"
                  : dossier.mode === "Maritime"
                  ? "BL"
                  : "Autres"
              })`}</legend>
              <span>{dossier.document ? `${dossier.document}` : "-"}</span>
            </fieldset>
            <fieldset className="attribut ml col-3">
              <legend>Description</legend>
              <span>
                {dossier.description ? `${dossier.description}` : "-"}
              </span>
            </fieldset>
            <fieldset className="attribut ml col-2">
              <legend>Destinataire</legend>
              <span>{dossier.client ? `${dossier.client.nom}` : "-"}</span>
            </fieldset>
            <fieldset className="attribut ml col-1">
              <legend>Statut</legend>
              <span>{dossier.status ? `${dossier.status}` : "-"}</span>
            </fieldset>
          </div>
        </fieldset>
      </div>
    </div>
  );
  // --------T1 Fielset-----------

  const renderLinkT1 = (item, index) => (
    <div className="item" key={index}>
      <span
        onClick={() =>
          setDdu({
            ...ddu,
            t1: item,
            bureau: item.burSortie,
            sommier: `S${item.sommier}/${annee(item.date)}`,
          })
        }
      >{`T${item.numero}/${annee(item.date)}`}</span>
    </div>
  );
  const renderT1 = (
    <div className="" style={{ marginTop: 5 }}>
      <div className="dossier  col-12">
        {/*renderDossier */}
        <fieldset className="card entite col-12 ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <span style={{ marginRight: 5 }}>T1's</span>{" "}
            <Menu
              icon={mdiFilterMenuOutline}
              size={0.7}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                marginTop: 5,
                right: -5,
              }}
              content={dossier.t1}
              render={renderLinkT1}
            />
          </legend>
          {
            <div className="pr-row">
              <fieldset className="attribut  col-1 ">
                <legend>Numéro</legend>
                <span>{ddu.t1.numero ? `T${ddu.t1.numero}` : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-1">
                <legend>Date</legend>
                <span>{ddu.t1.date ? date(ddu.t1.date) : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-1">
                <legend>Sommier</legend>
                <span>
                  {ddu.t1.sommier
                    ? `S${ddu.t1.sommier}/${annee(ddu.t1.date)}`
                    : "-"}
                </span>
              </fieldset>
              <fieldset className="attribut ml col-2 ">
                <legend>Frontière</legend>
                <span>{ddu.t1.burEntree ? `${ddu.t1.burEntree}` : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-2 ">
                <legend>Destination</legend>
                <span>{ddu.t1.burSortie ? `${ddu.t1.burSortie}` : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-1 ">
                <legend>Provenance</legend>
                <span>{ddu.t1.provenance ? `${ddu.t1.provenance}` : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-1">
                <legend>Quantité</legend>
                <span>
                  {ddu.t1.quantite ? `${nombre(ddu.t1.quantite)}` : "-"}
                </span>
              </fieldset>
              <fieldset className="attribut ml col-1">
                <legend>Poids</legend>
                <span>{ddu.t1.poids ? `${nombre(ddu.t1.poids)}` : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-1">
                <legend>Position</legend>
                <span>{ddu.t1.position ? `${ddu.t1.position}` : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-2">
                <legend>Id. Transport</legend>
                <span>{ddu.t1.transport ? `${ddu.t1.transport}` : "-"}</span>
              </fieldset>
            </div>
          }
        </fieldset>
      </div>
    </div>
  );
  // --------Exo Fielset-----------

  const renderLinkExo = (item, index) => (
    <div className="item" key={index}>
      <span onClick={() => setDdu({ ...ddu, exo: item })}>
        {`${item.numero}/${annee(item.date)}`}
      </span>
    </div>
  );
  const renderExo = (
    <div className="" style={{ marginTop: 5 }}>
      <div className="dossier  col-2">
        {/*renderDossier */}
        <fieldset className="card entite col-12 ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <span style={{ marginRight: 5 }}>Exonérations</span>{" "}
            <Menu
              icon={mdiFilterMenuOutline}
              size={0.7}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                marginTop: 5,
                right: -5,
              }}
              content={listExos}
              render={renderLinkExo}
            />
          </legend>
          {
            <div className="pr-row">
              <fieldset className="attribut  col-1 ">
                <legend>Numéro</legend>
                <span>{ddu.exo.numero ? `${ddu.exo.numero}` : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-1">
                <legend>Date</legend>
                <span>{ddu.exo.date ? date(ddu.exo.date) : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-1">
                <legend>Emission</legend>
                <span>{ddu.exo.emission ? date(ddu.exo.emission) : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-1">
                <legend>Expiration</legend>
                <span>
                  {ddu.exo.expiration ? date(ddu.exo.expiration) : "-"}
                </span>
              </fieldset>
              <fieldset className="attribut ml col-1">
                <legend>Quantité</legend>
                <span>
                  {ddu.exo.details
                    ? nombre(getTotal(ddu.exo.details, "quantite"))
                    : "-"}
                </span>
              </fieldset>
              <fieldset className="attribut ml col-1">
                <legend>Valeur</legend>
                <span>
                  {ddu.exo.details
                    ? nombre(getTotal(ddu.exo.details, "valeur"))
                    : "-"}
                </span>
              </fieldset>
            </div>
          }
        </fieldset>
      </div>
    </div>
  );
  // --------License Fielset-----------

  const renderLicense = (
    <div className="" style={{ marginTop: 5 }}>
      <div className="dossier  col-2">
        {/*renderDossier */}
        <fieldset className="card entite col-12 ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <span style={{ marginRight: 5 }}>Licenses</span>{" "}
            <Menu
              icon={mdiFilterMenuOutline}
              size={0.7}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                marginTop: 5,
                right: -5,
              }}
              content={dossier.t1}
              render={renderLinkExo}
            />
          </legend>
          {
            <div className="pr-row">
              <fieldset className="attribut  col-1 ">
                <legend>Numéro</legend>
                <span>{ddu.t1.numero ? `T${ddu.t1.numero}` : "-"}</span>
              </fieldset>
              <fieldset className="attribut ml col-1">
                <legend>Date</legend>
                <span>{ddu.t1.date ? date(ddu.t1.date) : "-"}</span>
              </fieldset>
            </div>
          }
        </fieldset>
      </div>
    </div>
  );

  return (
    <div className="">
      <div className="card">
        <Title title="Déclaration (Nouvelle)" />
      </div>
      {renderDossier}
      {renderT1}
      <div style={{ display: "flex" }}>
        {renderExo}
        {renderLicense}
      </div>
      <div className="card card-top">
        <DduForm ddu={ddu} setDdu={setDdu} dossier={dossier} />
      </div>
    </div>
  );
};

export default NewDdu;
