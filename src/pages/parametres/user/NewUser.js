import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useActionData, useLocation, useNavigate } from "react-router-dom";
import { addUser } from "../../../redux/user/action";
import UserForm from "./UserForm";

export async function newUserAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}

const user = {
  nif: "",
  nom: "",
  tel: "",
  bp: "",
  adresse: "NIAMEY/NIGER",
  email: "",
  compte: "411",
  type:"Entreprise",
  exo: "",
};
const NewUser = () => {
  const dispatch = useDispatch();
  const actionData = useActionData();
  const navigate = useNavigate();
  useEffect(() => {
    actionData && dispatch(addUser(actionData)) && navigate(-1);
  }, [actionData, dispatch, navigate]);

  return (
    <div>
      <div className="header-title form" >
        Nouveau
      </div>
      <UserForm user={user} />
    </div>
  );
};

export default NewUser;