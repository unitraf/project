import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActionData, useNavigate } from "react-router-dom";
import { annee } from "../../helpers/render";
import { updateDossier } from "../../redux/dossier/action";
import FactureForm from "./FactureForm";
import {facture as init  } from "./init";

export async function newFactureAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}


const NewFacture = () => {
  
   const dispatch = useDispatch();
   const actionData = useActionData();
   const navigate = useNavigate();
  const state = useSelector(state => state)
  const [facture, setFacture] = useState(init)
  const {dossiers, articles}= state
  const dossier =facture.dossier&& dossiers.filter(dossier=>dossier.numero==facture.dossier && annee(dossier.date)==facture.annee)[0]
console.log(actionData);
//   useEffect(() => {
//     actionData && dispatch(updateDossier(actionData)) && navigate(-1);
//   }, [actionData, dispatch, navigate]);

  return (
    <div>
      <div className="header-title form" >
        Nouveau
      </div>
      <FactureForm facture={facture} setFacture={setFacture} dossier={dossier} />
    </div>
  );
};

export default NewFacture;
