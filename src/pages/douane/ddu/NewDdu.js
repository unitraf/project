import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActionData, useNavigate } from "react-router-dom";

import { ddu as init } from "./init";
import DduForm from "./DduForm";
import { updateDossier } from "../../../redux/dossier/action";
import Title from "../../../components/title/Title";
import { getTotal } from "../../../helpers/fonctions";
import { displaySnack } from "../../../components/snackbar/SnackBar";

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
  const { dossiers} = state;
  const dossier =
    actionData &&
    dossiers.filter((dossier) => dossier.numero === actionData.dossier)[0];

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

  return (
    <div className="card">
      <Title title="Déclaration (Nouvelle)" mb={20} />

      <DduForm ddu={ddu} setDdu={setDdu} />
    </div>
  );
};

export default NewDdu;
