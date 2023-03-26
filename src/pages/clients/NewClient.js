import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useActionData, useNavigate } from "react-router-dom";
import { addClient } from "../../redux/client/action";
import ClientForm from "./ClientForm";

export async function newClientAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}

const client = {
  nif: "",
  nom: "",
  tel: "",
  bp: "",
  adresse: "NIAMEY/NIGER",
  email: "",
  compte: "411",
  type:"Entreprise",
  exo: "",
};
const NewClient = () => {
  const dispatch = useDispatch();
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    actionData && dispatch(addClient(actionData)) && navigate(-1);
  }, [actionData, dispatch, navigate]);

  return (
    <div>
      <div className="header-title form" >
        Nouveau
      </div>
      <ClientForm client={client} />
    </div>
  );
};

export default NewClient;
