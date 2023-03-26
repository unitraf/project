import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useActionData, useNavigate, useParams } from "react-router-dom";

import PrestationForm from "./PrestationForm";
import { prestation as init } from "./init";
import { updateDossier } from "../../redux/dossier/action";
import { groupBy, getTotal, getRegime } from "../../helpers/fonctions";
import Fieldset from "../../components/fieldset/Fieldset";
import { nombre } from "../../helpers/render";
import Icon from "@mdi/react";
import { mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";
import Table from "../../components/table/Table";

export async function newPrestationAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}

let headData = ["#", "Libellé", "Montant", "..."];
const renderHead = (item, index) => <th key={index}>{item}</th>;


let headDataDecl = [
  "Réf.",
  "Nombre",
  "Poids",
  "Valeur Douane",
  "Droits & Taxes",
  "...",
];
const renderHeadDecl = (item, index) => <th key={index}>{item}</th>;



const NewPrestation = () => {
  const [prestation, setPrestation] = useState(init);
  const actionData = useActionData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const dossier = useSelector((state) => state.dossiers).filter(
    (dossier) => dossier.numero === params.dossierId
  )[0];
  let updatePresta = actionData && {
    ...dossier,
    prestations: [...(dossier.prestations || []), actionData],
  };
  const prestations = dossier && groupBy(dossier.prestations, "rubrique");
  console.log();

  useEffect(() => {
    actionData && dispatch(updateDossier(updatePresta)) && setPrestation(init);
  }, [actionData, dispatch]);


  const renderBody = (item, index) => (
    <tr key={index}>
      <td className="col-2">{index + 1}</td>
      <td className="col-7" style={{ textAlign: "left", paddingInline: 10 }}>
        {item.libelle}
      </td>
      <td className="col-3" style={{ textAlign: "right", paddingInline: 10 }}>
        {nombre(item.valeur)}
      </td>
      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          marginTop: 3,
          border: 0,
        }}
      >
        <Link >
          {" "}
          <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer"
          onClick={()=>{
            
            console.log(item)
            let prestations = dossier.prestations.filter(presta=> presta.code !== item.code)
            dispatch(updateDossier({...dossier,prestations }))
          
          }}
          />
        </Link>
      </td>
    </tr>
  );
  const renderBodyDecl = (item, index) => (
    <tr key={index}>
      <td className="col-2">{`${getRegime(item.regime)} ${item.reference}`}</td>
      <td className="col-2" style={{ textAlign: "right", paddingInline: 10 }}>
        {nombre(item.nombre)}
      </td>
      <td className="col-2" style={{ textAlign: "right", paddingInline: 10 }}>
        {nombre(item.poids)}
      </td>
      <td className="col-3" style={{ textAlign: "right", paddingInline: 10 }}>
        {nombre(item.valeur)}
      </td>
      <td className="col-3" style={{ textAlign: "right", paddingInline: 10 }}>
        {nombre(item.total)}
      </td>
      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          marginTop: 3,
          border: 0,
        }}
      >
        <Link to={`/transit/ddu/${item.reference}`}>
          {" "}
          <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
        </Link>
      </td>
    </tr>
  );
  const renderFooterInterv = (
    <tr>
      <td style={{ border: 0 }}></td>
      <td>Total</td>
      <td style={{ textAlign: "right", paddingInline: 10 }}>
        {nombre(getTotal(prestations["Interventions"], "valeur"))}
      </td>
    </tr>
  );
  const renderFooterDebours = (
    <tr>
      <td style={{ border: 0 }}></td>
      <td>Total</td>
      <td style={{ textAlign: "right", paddingInline: 10 }}>
        {nombre(getTotal(prestations["Débours"], "valeur"))}
      </td>
    </tr>
  );

  const renderFooterDecl = (
    <tr>
      <td>Total</td>
      <td style={{ textAlign: "right", paddingInline: 10 }}>
        {nombre(getTotal(dossier.declaration, "nombre"))}
      </td>
      <td style={{ textAlign: "right", paddingInline: 10 }}>
        {nombre(getTotal(dossier.declaration, "poids"))}
      </td>
      <td style={{ textAlign: "right", paddingInline: 10 }}>
        {nombre(getTotal(dossier.declaration, "valeur"))}
      </td>
      <td style={{ textAlign: "right", paddingInline: 10 }}>
        {nombre(getTotal(dossier.declaration, "total"))}
      </td>
    </tr>
  );

  console.log(prestations);
  const renderDossierInfo= (
    <div style={{display:"flex"}} >
       <div className="inputBox col-2" style={{ marginBlock: 25 }}>
          <input
            type="text"
            autoComplete="off"
            defaultValue={`380/${dossier.numero}`}
            required
          />
          <label htmlFor={"Dossier"}>Dossier</label>
        </div>
        <div className="inputBox col-3" style={{ marginBlock: 25 }}>
          <input
            type="text"
            autoComplete="off"
            defaultValue={dossier.description}
            required
          />
          <label htmlFor={"Dossier"}>Description</label>
        </div>
    </div>
  )
  return (
    <div>
      <div className="header-title ">Nouveau</div>
      <div>
       {params.dossierId&&renderDossierInfo}
        <PrestationForm prestation={prestation} setPrestation={setPrestation} />
        <div style={{ display: "flex" }}>
          {prestations!==0&&<div className="col-6">
            {prestations["Débours"]&& (
              <Fieldset
                style={{ height: "fit-content" }}
                legend="Débours"
                content={
                  <Table
                    headData={headData}
                    renderHead={renderHead}
                    bodyData={prestations["Débours"]}
                    renderBody={renderBody}
                    renderFooter={renderFooterDebours}
                  />
                }
              />
            )}
            {prestations["Interventions"]&& (
              <Fieldset
                legend="Interventions"
                content={
                  <Table
                    headData={headData}
                    renderHead={renderHead}
                    bodyData={prestations["Interventions"]}
                    renderBody={renderBody}
                    renderFooter={renderFooterInterv}
                  />
                }
              />
            )}
          </div>}
          <div className="col-6">
            {dossier.declaration.length && (
              <Fieldset
                legend="Déclarations"
                content={
                  <Table
                    headData={headDataDecl}
                    renderHead={renderHeadDecl}
                    bodyData={dossier.declaration}
                    renderBody={renderBodyDecl}
                    renderFooter={renderFooterDecl}
                  />
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPrestation;
