import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useActionData, useLocation, useNavigate } from "react-router-dom";
import { addClient } from "../../redux/client/action";
import ClientForm from "./ClientForm";
import {client as init} from './init';
import { displaySnack } from "../../components/snackbar/SnackBar";
import Title from "../../components/title/Title";
export async function newClientAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  displaySnack()
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}


const NewClient = () => {
  const dispatch = useDispatch();
  const actionData = useActionData();
  const navigate = useNavigate();
const [client, setClient] = useState(init)
  useEffect(() => {
    actionData && dispatch(addClient({...client,...actionData})) ;
  setTimeout(() => {
    actionData && navigate(-1)
  }, 3000);
  
  }, [actionData, dispatch, navigate, client]);

  return (
    <div className="">
      <div className="card">
     <Title title ="Client (Nouveau)" />
     </div>
<div className="card card-top" >
      <ClientForm client={client} setClient={setClient} />
      </div>
    </div>
  );
};

export default NewClient;
