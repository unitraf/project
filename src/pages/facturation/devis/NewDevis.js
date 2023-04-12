import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useActionData, useNavigate } from "react-router-dom";
import { addDevis } from "../../../redux/prospection/action";
import DevisForm from "./DevisForm";
import {status, devis as init } from "./init";
import { displaySnack } from "../../../components/snackbar/SnackBar";
import Title from "../../../components/title/Title";

export async function newDevisAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  displaySnack()
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}

const NewDevis = () => {
  const dispatch = useDispatch();
  const actionData = useActionData();
  const navigate = useNavigate();
  const [devis, setDevis] = useState(init);
  console.log(actionData);

  useEffect(() => {
    console.log(actionData, devis);
    actionData && dispatch(addDevis({...actionData, ...devis}))
    setTimeout(() => {
      actionData&&navigate(-1);
    }, 3000);
  }, [actionData, dispatch, devis, navigate]);

  return (
    <div>
      <Title Title="Dévis (Nouveau)"  mb={20}/>
      
      <DevisForm devis={devis} setDevis={setDevis} status={status} />
    </div>
  );
};

export default NewDevis;
