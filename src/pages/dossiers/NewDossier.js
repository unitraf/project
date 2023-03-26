import React, { useEffect, useState } from "react";
import { dossier as init } from "./init";
import DossierForm from "./DossierForm";
import { useActionData, useNavigate } from "react-router-dom";
import { addDossier } from "../../redux/dossier/action";
import { useDispatch } from "react-redux";
export async function newDossierAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}

const NewDossier = () => {
  const dispatch = useDispatch();
  const actionData = useActionData();
  const [dossier, setDossier] = useState(init);

  const navigate = useNavigate();

  useEffect(() => {
    if (actionData) {
      let { client, operateur } = dossier;
      let newDossier = {
        ...actionData,
        operateur,
        client,
        t1: [],
        declaration: [],
        minute: [],
        debours: [],
        interventions: [],
        prestations:[],
        autres: [],
      };
      dispatch(addDossier(newDossier)) && navigate(-1);
    }
  }, [actionData, dispatch, navigate, dossier]);

  return (
    <div>
      <div className="header-title form">Nouveau</div>
      <DossierForm dossier={dossier} setDossier={setDossier} />
    </div>
  );
};

export default NewDossier;
