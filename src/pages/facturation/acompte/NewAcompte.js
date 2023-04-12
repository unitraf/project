import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useActionData, useLocation, useNavigate } from "react-router-dom";
import { addDevis, updateDevis } from "../../../redux/prospection/action";
import AcompteForm from "./AcompteForm";
import { devis as init } from "./init";
import { displaySnack } from "../../../components/snackbar/SnackBar";
import Title from "../../../components/title/Title";

export async function newAcompteAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  displaySnack();
  console.log(data);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}

const NewAcompte = () => {
  const dispatch = useDispatch();
  const actionData = useActionData();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [devis, setDevis] = useState(init);
  console.log(actionData);

  useEffect(() => {
    state && setDevis(state);
  }, [state]);

  useEffect(() => {
    console.log(actionData, devis);

    actionData && dispatch(updateDevis({ acompte: actionData, ...devis }));
    setTimeout(() => {
      actionData && navigate(-1);
    }, 3000);
  }, [actionData, dispatch, devis, navigate]);

  return (
    <div>
      <Title title =" Acompte (Nouveau)" mb={20}/>
      
      <AcompteForm devis={devis} setDevis={setDevis} />
    </div>
  );
};

export default NewAcompte;
