import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useActionData, useParams } from "react-router-dom";
import { deleteTarif, updateTarif } from "../../../redux/tarif/action";
import TarifForm from "./TarifForm";
import "./tarifs.css";
import Title from "../../../components/title/Title";

export async function EditTarifAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}
export async function destroyTarifAction({ request, params }) {
  const formData = await request.formData();
  const data = formData.get("nif");

  return data;
}

const EditTarif = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const actionData = useActionData();

  const navigate = useNavigate();
  const tarif = useSelector((state) => state.tarifs).find(
    (tarif) => tarif.nts === params.updateId || tarif.nts === params.destroyId
  );

  useEffect(() => {
    params.destroyId &&
      actionData &&
      dispatch(deleteTarif(actionData)) &&
      navigate(-1);
  }, [actionData, dispatch, navigate, params.destroyId]);
  useEffect(() => {
    params.updateId &&
      actionData &&
      dispatch(updateTarif(actionData)) &&
      navigate(-1);
  }, [actionData, dispatch, navigate, params.updateId]);

  return (
    <div className="card">
      <Title
        title={params.destroyId ? "Tarif (Suppression)" : "Tarif  (Edition)"}
        mb={20}
      />

      {tarif && <TarifForm tarif={tarif} />}
    </div>
  );
};

export default EditTarif;
