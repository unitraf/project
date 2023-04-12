import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useActionData, useParams, useLocation } from "react-router-dom";
import { deleteUser, updateUser } from "../../../redux/user/action";
import UserForm from "./UserForm";
import "./user.css";

export async function updateActionUser({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("data", data);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}
export async function destroyActionUser({ request, params }) {
  const formData = await request.formData();
  const data = formData.get("id");

  return data;
}

const EditUser = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const actionData = useActionData();
  const {pathname, state}= useLocation()

  const navigate = useNavigate();
console.log(params);
  useEffect(() => {
    console.log(actionData);
    params.destroyId &&
      actionData &&
      dispatch(deleteUser(actionData)) &&
      navigate(-1);
  }, [actionData,  params.destroyId]);

  useEffect(() => {
    params.updateId &&
      actionData &&
      dispatch(updateUser(actionData)) &&
      navigate(-1);
  }, [actionData, params.updateId]);

  return (
    <div>
      <div className="header-title form" >
        {params.destroyId ? "Suppression" : "Edition"}
      </div>
      {state && <UserForm user={state} />}
    </div>
  );
};

export default EditUser;
