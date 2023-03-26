import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useActionData, useParams } from "react-router-dom";
import { updateDossier } from "../../redux/dossier/action";
import MinuteForm from "./MinuteForm";
import "./minutes.css";
import { minute as init } from "./init";

export async function updateMinuteAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}
export async function destroyMinuteAction({ request, params }) {
  const formData = await request.formData();
  const data = formData.get("repertoire");

  return data;
}

const EditMinute = () => {
  const params = useParams();
  const state = useSelector((state) => state)
  const {dossiers }= state
  const dispatch = useDispatch();
  const actionData = useActionData();
const [minute, setMinute] = useState(init)

  const navigate = useNavigate();

  useEffect(()=>{
    let init = dossiers.map(dossier=> dossier.minute).flat(Infinity).filter(item=>item.repertoire===params.updateId || item.repertoire===params.destroyId)[0]
console.log('====================================');
console.log(init);
console.log('====================================');
    setMinute(init)
  },[params.destroyId])

useEffect(() => {
if (actionData&&params.updateId) {
  let {carnet, imposition, pj, folder}=minute
  const calculs = actionData&&minute.regime==="3000"?imposition.sortie.filter(item=>Object.values(item)):imposition.entree.filter(item=>Object.values(item))
  console.log(calculs);
let {date, client, document, mode, origine, type, transport}=folder
let newMinute={...actionData,createAt: new Date(), carnet, calculs, pj,date, client, document, mode, origine, type, transport}
let updateMinute = folder.minute.map(item=> item.repertoire===newMinute.repertoire?newMinute:item)
let dossier = {...folder, minute:updateMinute}
console.log(updateMinute);
dispatch(updateDossier(dossier))&& navigate(-1); 
}

  }, [actionData,params.updateId]);

useEffect(() => {
if (actionData&&params.destroyId) {
  let {folder}=minute
let updateMinute = folder.minute.filter(item=> item.repertoire!==actionData)
let dossier = {...folder, minute:updateMinute}
console.log(updateMinute);
dispatch(updateDossier(dossier))&& navigate(-1); 
}

  }, [actionData]);
  return (
    <div>
      <div className="header-title form" >
        {params.destroyId ? "Suppression" : "Edition"}
      </div>
      {minute && <MinuteForm minute={minute} setMinute={setMinute}  />}
    </div>
  );
};

export default EditMinute;
