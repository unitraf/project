import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useActionData, useParams } from "react-router-dom";
// import { deleteClient, updateClient } from "../../redux/client/action";
import DduForm from "./DduForm";
import "./ddu.css";

import { updateDossier } from "../../redux/dossier/action";

export async function updateDduAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}
export async function destroyDduAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  return data;
}

const EditDdu = () => {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const actionData = useActionData();
  const state = useSelector((state) => state);
  const { dossiers } = state;
  const ddu = dossiers
    .map((dossier) => dossier.declaration)
    .flat(Infinity)
    .filter(
      (declaration) => declaration.reference === params.updateId || declaration.reference=== params.destroyId
    )[0];
  const dossier =
    actionData &&
    dossiers.filter((dossier) => dossier.numero === actionData.dossier)[0];
  // console.log(dossier);

  useEffect(() => {
  
    let updateDecl =
      params.destroyId &&
      actionData &&
      dossier.declaration.filter(decl => decl.reference !== actionData.reference);

    params.destroyId &&
      actionData &&
      dispatch(updateDossier({ ...dossier, declaration: updateDecl })) &&
      navigate(-1);
  }, [actionData]);

  useEffect(() => {
    let updateDecl =
      params.updateId &&
      actionData &&
      dossier.declaration.map((decl) => {
        if (decl.reference === actionData.reference) {
          return actionData;
        }
        return decl;
      });

    params.updateId &&
      actionData &&
      dispatch(updateDossier({ ...dossier, declaration: updateDecl })) &&
      navigate(-1);
  }, [actionData]);

 
  return (
    <div>
      <div className="header-title form" >
        {params.destroyId ? "Suppression" : "Edition"}
      </div>
      {ddu && <DduForm ddu={ddu} />}
    </div>
  );
};

export default EditDdu;
