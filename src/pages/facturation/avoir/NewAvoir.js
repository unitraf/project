import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useActionData, useLocation, useNavigate } from "react-router-dom";
import { annee } from "../../../helpers/render";
import { facture as init } from "../init";
import AvoirForm from "./AvoirForm";
import Title from "../../../components/title/Title";

export async function newAvoirAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  return data;
}

const NewAvoir = () => {
  const actionData = useActionData();
  const navigate = useNavigate();
  const { state } = useLocation();
  const dossiers = useSelector((state) => state.dossiers);
  const [facture, setFacture] = useState(init);

  const dossier =
    facture.dossier &&
    dossiers.filter(
      (dossier) =>
        dossier.numero === facture.dossier &&
        annee(dossier.date) === facture.annee
    )[0];

  useEffect(() => {
    state && setFacture(state.facture);
  }, [state]);

  useEffect(() => {
    actionData &&
      navigate("destroy", { state: { ...dossier, facture: actionData } });
  }, [actionData, navigate, dossier]);

  return (
    <div>
            <Title title =" Avoir (Nouveau)" mb={20}/>

      {/* <div className="header-title form">Avoir</div> */}
      <AvoirForm facture={facture} setFacture={setFacture} dossier={dossier} />
    </div>
  );
};

export default NewAvoir;
