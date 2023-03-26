import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useActionData, useNavigate, useParams } from 'react-router-dom';
import { updateDossier } from '../../redux/dossier/action';
import BLForm from './BLForm';

export async function updateBLAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}
export async function destroyBLAction({ request, params }) {
  const formData = await request.formData();
  const data = formData.get("numero");

  return data;
}
const EditBL = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const navigate = useNavigate()
  const actionData = useActionData()
  const dossiers = useSelector(state =>state.dossiers)
  const dossier = params.updateId&&dossiers.filter(dossier =>dossier.numero === params.updateId)
  console.log(actionData);
  const [bl, setBl] = useState(null);

  useEffect(() => {
    params.updateId&&dossier[0].bl&&setBl(dossier[0].bl)
  }, [params.updateId, dossier[0]])
  useEffect(() => {
    let bl = actionData;
    actionData &&
      dispatch(updateDossier({ ...dossier[0], bl, status:"Livré" }))&&navigate(-1);
  }, [actionData]);
  return (
    <div>
    <div className="header-title form" >
      {params.destroyId ? "Suppression" : "Edition"}
    </div>
    {bl && <BLForm bl={bl} setBl={setBl} dossier={dossier} />}
  </div>
  )
}

export default EditBL