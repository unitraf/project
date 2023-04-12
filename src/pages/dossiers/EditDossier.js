import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useActionData, useParams } from "react-router-dom";
import { deleteDossier, updateDossier } from "../../redux/dossier/action";
import DossierForm from "./DossierForm";
import "./dossiers.css";

export async function updateDossierAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}
export async function destroyDossierAction({ request, params }) {
  const formData = await request.formData();
  const data = formData.get("numero");

  return data;
}

const EditDossier = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const actionData = useActionData();
  const [dossier, setDossier] = useState(null);
  const navigate = useNavigate();
  const init = useSelector((state) => state.dossiers).find(
    (dossier) =>
      dossier.numero === params.updateId || dossier.numero === params.destroyId
  );
  useEffect(() => {
    init && setDossier(init);
  }, [init]);

  useEffect(() => {
    params.destroyId &&
      actionData &&
      dispatch(deleteDossier(actionData)) &&
      navigate(-1);
  }, [actionData, dispatch, navigate, params.destroyId]);
  useEffect(() => {
    if (actionData && params.updateId) {
      let { client, t1, declaration, minute, bl,prestations, facture } = dossier;
      let editDossier = {
        ...actionData,
        operateur: "admin",
        client,
        t1:t1|| [],
        declaration:declaration || [],
        minute:minute|| [],
        bl:bl || [],
        prestations:prestations || [],
        facture: facture || []
      };
      console.log(editDossier);
      dispatch(updateDossier(editDossier)) && navigate(-1);
    }
  }, [actionData, dispatch, navigate, params.updateId, params.dossierId]);

  return (
    <div>
      <div className="header-title form">
        {params.destroyId ? "Suppression" : "Edition"}
      </div>
      {dossier && <DossierForm dossier={dossier} setDossier={setDossier} />}
    </div>
  );
};

export default EditDossier;
