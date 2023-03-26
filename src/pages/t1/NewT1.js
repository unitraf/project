import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActionData, useNavigate, useParams } from "react-router-dom";
import { updateDossier } from "../../redux/dossier/action";

import { t1 as init } from "./init";
import T1Form from "./T1Form";

export async function NewT1Action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}

const NewT1 = () => {
  const actionData = useActionData();
  const params = useParams()
const [t1, setT1] = useState(init)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { dossiers } = state;
  const dossier =
    actionData &&
    dossiers.filter((dossier) => dossier.numero === actionData.dossier)[0];

  useEffect(() => {
    actionData &&
      dispatch(
        updateDossier({
          ...dossier,
          status: "Transit",
          t1: [...dossier.t1, actionData],
        })
      ) &&
      navigate(-1);
  }, [actionData, dispatch, navigate]);
useEffect(() => {
  params.dossierId&&setT1({...t1, dossier:params.dossierId})
}, [params.dossierId])
console.log(params.dossierId, t1);
  return (
    <div>
      <div className="header-title form">Nouveau</div>
      <T1Form t1={t1} setT1={setT1} />
    </div>
  );
};

export default NewT1;
