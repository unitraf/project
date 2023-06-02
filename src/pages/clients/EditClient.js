import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigate,
  useActionData,
  useParams,
  useLocation,
  redirect,
} from "react-router-dom";
import { deleteClient, updateClient } from "../../redux/client/action";
import ClientForm from "./ClientForm";
import { client as init } from "./init";
import "./clients.css";
import { displaySnack } from "../../components/snackbar/SnackBar";
import Title from "../../components/title/Title";

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  displaySnack(`Données ${data.nom} mis à jour`);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}
export async function destroyAction({ request, params }) {
  const formData = await request.formData();
  const data = formData.get("nif");
  displaySnack(`Données client nif (${data}) Supprimer`);
  return data;
}

const EditClient = () => {
  const params = useParams();
  const actionData = useActionData();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [client, setClient] = useState(init);
  const { state } = useLocation();

  useEffect(() => {
    state && setClient({ ...client, ...state });
  }, [state]);

  useEffect(() => {
    params.destroyId && actionData && dispatch(deleteClient(actionData));
    setTimeout(() => {
      actionData && redirect("/clients");
    }, 3000);
  }, [actionData, dispatch, navigate, params.destroyId]);
  useEffect(() => {
    params.updateId &&
      actionData &&
      dispatch(updateClient({ ...client, ...actionData }));
    setTimeout(() => {
      actionData && navigate(-1);
    }, 3000);
  }, [actionData, dispatch, navigate, params.updateId, client]);

  return (
    <div className="" >
    <div className="card" >

      <Title title ={params.destroyId ? "Client (Suppression)" : "Client (Edition)"}  />
      </div>
      <div className="card card-top" >
      {client && <ClientForm client={client} setClient={setClient} />}
      </div>
    </div>
  );
};

export default EditClient;
