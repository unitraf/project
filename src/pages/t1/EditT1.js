import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useActionData, useParams } from "react-router-dom";
import T1Form from "./T1Form";
import "./t1.css";

import { updateDossier } from "../../redux/dossier/action";

export async function updateT1Action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}
export async function destroyT1Action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  return data;
}

const EditT1 = () => {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const actionData = useActionData();
  const [t1, setT1] = useState(null);
  const state = useSelector((state) => state);
  const { dossiers } = state;
  const init = dossiers
    .map((dossier, index) => dossier.t1)
    .flat(Infinity)
    .filter(
      (t1) => t1.numero === params.updateId || t1.numero === params.destroyId
    )[0];

  const updateT1 = (action) => {
    let dossier =
      action &&
      dossiers.filter((dossier) => dossier.numero === action.dossier)[0];
    let t1 =
      dossier &&
      dossier.t1.map((t1) => {
        if (t1.numero === action.numero) {
          return action;
        }
        return t1;
      });

    return { ...dossier, t1 };
  };
  const deleteT1 = (action) => {
    let dossier =
      action &&
      dossiers.filter((dossier) => dossier.numero === action.dossier)[0];
    let t1 = dossier && dossier.t1.filter((t1) => t1.numero !== action.numero);

    return { ...dossier, t1 };
  };
  useEffect(() => {
    actionData &&
      params.updateId &&
      dispatch(updateDossier(updateT1(actionData))) &&
      navigate(-1);
  }, [actionData, params.updateId]);
  useEffect(() => {
    actionData &&
      params.destroyId &&
      dispatch(updateDossier(deleteT1(actionData))) &&
      navigate(-1);
  }, [actionData, params.destroyId]);

  useEffect(() => {
    setT1(init);
  }, [init]);

  return (
    <div>
      <div className="header-title form">
        {params.destroyId ? "Suppression" : "Edition"}
      </div>
      {t1 && <T1Form t1={t1} setT1={setT1} />}
    </div>
  );
};

export default EditT1;
