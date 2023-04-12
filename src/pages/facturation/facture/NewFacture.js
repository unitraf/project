import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActionData, useLocation, useNavigate } from "react-router-dom";
import { annee } from "../../../helpers/render";
import { updateDossier } from "../../../redux/dossier/action";
import FactureForm from "./FactureForm";
import { facture as init } from "../init";
import Title from "../../../components/title/Title";
import { displaySnack } from "../../../components/snackbar/SnackBar";

export async function newFactureAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  displaySnack();
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}

const NewFacture = () => {
  const dispatch = useDispatch();
  const actionData = useActionData();
  const navigate = useNavigate();
  const { state } = useLocation();
  const dossiers = useSelector((state) => state.dossiers);
  const [facture, setFacture] = useState(init);

  const dossier =
    facture.dossier &&
    dossiers.filter(
      (dossier) =>
        dossier.numero === facture.dossier &&
        annee(dossier.date) === facture.annee
    )[0];

  useEffect(() => {
    state && setFacture(state.facture);
  }, [state]);

  useEffect(() => {
    actionData && dispatch(updateDossier({ ...dossier, facture: actionData }));
    setTimeout(() => {
      actionData && navigate(-1);
    }, 3000);
  }, [actionData]);

  return (
    <div>
      <Title title=" Facture (Nouveau)" mb={20} />

      <FactureForm
        facture={facture}
        setFacture={setFacture}
        dossier={dossier}
      />
    </div>
  );
};

export default NewFacture;
