import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActionData, useNavigate } from "react-router-dom";

import {ddu} from './init'
import DduForm from "./DduForm";
import { updateDossier } from "../../redux/dossier/action";

export async function NewDduAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}


const NewDdu = () => {
  const actionData = useActionData();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector(state=>state)
  const {dossiers} =state
  const dossier =actionData&& dossiers.filter(dossier=>dossier.numero===actionData.dossier)[0]

  useEffect(() => {
    actionData && dispatch(updateDossier({...dossier,status:"Douane", declaration:[...dossier.declaration, actionData]})) && navigate(-1);
  }, [actionData, dispatch, navigate]);

  return (
    <div>
      <div className="header-title form" >
        Nouveau
      </div>
      <DduForm ddu={ddu} />
    </div>
  );
};

export default NewDdu;
