import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useActionData, useParams } from "react-router-dom";
import { deleteClient, updateClient } from "../../redux/client/action";
import ClientForm from "./ClientForm";
import "./clients.css";

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}
export async function destroyAction({ request, params }) {
  const formData = await request.formData();
  const data = formData.get("nif");

  return data;
}

const EditClient = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const actionData = useActionData();

  const navigate = useNavigate();
  const client = useSelector((state) => state.clients).find(
    (client) =>
      client.nif === params.updateId || client.nif === params.destroyId
  );

  useEffect(() => {
    params.destroyId &&
      actionData &&
      dispatch(deleteClient(actionData)) &&
      navigate(-1);
  }, [actionData, dispatch, navigate, params.destroyId]);
  useEffect(() => {
    params.updateId &&
      actionData &&
      dispatch(updateClient(actionData)) &&
      navigate(-1);
  }, [actionData, dispatch, navigate, params.updateId]);

  return (
    <div>
      <div className="header-title form" >
        {params.destroyId ? "Suppression" : "Edition"}
      </div>
      {client && <ClientForm client={client} />}
    </div>
  );
};

export default EditClient;
