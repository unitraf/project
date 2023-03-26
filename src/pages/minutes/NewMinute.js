import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useActionData, useNavigate, useParams } from "react-router-dom";
import { updateDossier } from "../../redux/dossier/action";
import MinuteForm from "./MinuteForm";
import { minute as init } from "./init";
export async function NewMinuteAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}


const NewMinute = () => {
  const [minute, setMinute] = useState(init)
  let {carnet, imposition, pj, folder}=minute
  const dispatch = useDispatch();
  const params = useParams()
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(()=>{
    setMinute({...minute, dossier:params.dossierId})
  },[params.dossierId])

  useEffect(() => {
if (actionData) {
 
  const calculs = actionData&&minute.regime==="3000"?imposition.sortie.filter(item=>Object.values(item)):imposition.entree.filter(item=>Object.values(item))
  console.log(calculs);
let {date, client, document, mode, origine, type, transport}=folder
let newMinute={...actionData,createAt: new Date(), carnet, calculs, pj,date, client, document, mode, origine, type, transport}
let dossier = {...folder, minute:[...folder.minute, newMinute]}

actionData && dispatch(updateDossier(dossier))&& navigate(-1); 
}

  }, [actionData]);

  return (
    <div>
      <div className="header-title form" >
        Nouveau
      </div>
      <MinuteForm minute={minute} setMinute={setMinute}/>
    </div>
  );
};

export default NewMinute;
