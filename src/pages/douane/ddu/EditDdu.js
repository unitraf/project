import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigate,
  useActionData,
  useParams,
  useLocation,
} from "react-router-dom";

import DduForm from "./DduForm";
import "./ddu.css";

import { updateDossier } from "../../../redux/dossier/action";
import { displaySnack } from "../../../components/snackbar/SnackBar";
import Title from "../../../components/title/Title";

export async function updateDduAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  displaySnack("Déclaration mis à jour");
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}
export async function destroyDduAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  displaySnack("Suppression déclaration ");
  return data;
}

const EditDdu = () => {
  const params = useParams();
  const location = useLocation();
  const [ddu, setDdu] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const actionData = useActionData();
  const state = useSelector((state) => state);
  const { dossiers } = state;

  const dossier =
    ddu && dossiers.filter((dossier) => dossier.numero === ddu.dossier)[0];

  useEffect(() => {
    setDdu(location.state);
  }, []);

  useEffect(() => {
    let declaration =
      params.destroyId &&
      actionData &&
      dossier.declaration.filter(
        (decl) => decl.reference !== actionData.reference
      );

    params.destroyId &&
      actionData &&
      dispatch(updateDossier({ ...dossier, declaration }));
    setTimeout(() => {
      params.destroyId && actionData && navigate(-1);
    }, 3000);
  }, [actionData]);

  useEffect(() => {
    let declaration =
      params.updateId &&
      actionData &&
      dossier.declaration.map((decl) => {
        if (decl.reference === ddu.reference) {
          return ddu;
        }
        return decl;
      });

    params.updateId &&
      actionData &&
      dispatch(updateDossier({ ...dossier, declaration }));
    setTimeout(() => {
      params.updateId && actionData && navigate(-1);
    }, 3000);
  }, [actionData, dispatch, navigate]);

  return (
    <div>
      <div className="card">
        <Title title={params.destroyId ? "Suppression" : "Edition"} />
      </div>
      <div className="card card-top">
        {ddu && <DduForm ddu={ddu} setDdu={setDdu} dossier={dossier} />}
      </div>
    </div>
  );
};

export default EditDdu;
