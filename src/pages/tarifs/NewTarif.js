import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useActionData, useNavigate } from "react-router-dom";
import { addTarif } from "../../redux/tarif/action";
import TarifForm from "./TarifForm";
import { tarif } from "./init";

export async function newTarifAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  let tarif = {
    nts: data.nts,
    designation: data.designation,
    us: data.us,
    entree: [
      { DD: data.DD, checked: false },
      { RSI: data.RSI, checked: false },
      { TVI: data.TVI, checked: false },
      { PCS: data.PCS, checked: false },
      { PC: data.PC, checked: false },
      { PUA: data.PUA, checked: false },
      { TVA: data.TVA, checked: false },
      { DA: data.DA, checked: false },
    ],
    sortie: [
      { RSE: data.RSE, checked: false },
      { TSR: data.TSR, checked: false },
    ],
  };
  console.log(tarif);
  // return redirect(`/contacts/${params.contactId}`);
  return tarif;
}

const NewTarif = () => {
  const dispatch = useDispatch();
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    actionData && dispatch(addTarif(actionData)) && navigate(-1);
  }, [actionData, dispatch, navigate]);

  return (
    <div>
      <div className="header-title form">Nouveau</div>
      <TarifForm tarif={tarif} />
    </div>
  );
};

export default NewTarif;
