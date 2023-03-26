import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActionData, useNavigate } from "react-router-dom";
import { updateDossier } from "../../redux/dossier/action";
import BLForm from "./BLForm";
import { bl as init } from "./init";

export async function NewBLAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return data;
}

const NewBL = () => {
  const actionData = useActionData();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { dossiers } = state;
  const [bl, setBl] = useState(init);
  const getDossier = (numero) =>
    dossiers.filter((dossier) => dossier.numero === numero);


  useEffect(() => {
    let bl = actionData;
    actionData &&
      dispatch(updateDossier({ ...getDossier(actionData.dossier)[0], bl, status:"Livré" }))&&navigate(-1);
  }, [actionData]);

  return (
    <div className="col-12">
      <div className="header-title form">Nouveau Bon de Livraison</div>
      <div style={{ display: "flex" }}>
        <div className="col-12">
          <BLForm bl={bl} setBl={setBl} dossier={getDossier(bl.dossier)} />
        </div>
      </div>
    </div>
  );
};

export default NewBL;
