import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActionData, useNavigate, useParams } from "react-router-dom";
import { deletePrestation, updatePrestation } from "../../redux/article/action";
import PrestationForm from "./PrestationForm";

export async function editPrestationAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}
export async function destroyPrestationAction({ request, params }) {
  const formData = await request.formData();
  const data = formData.get("code");

  return data;
}

const EditPrestation = () => {
  const params = useParams();
  const [article, setPrestation] = useState(null);
  const articles = useSelector((state) => state.articles);
  const init = articles.filter(
    (article) =>
      article.code === params.updateId || article.code === params.destroyId
  )[0];
  const dispatch = useDispatch();
  const actionData = useActionData();
  const navigate = useNavigate();
  console.log(params);
  useEffect(() => {
    init && setPrestation(init);
  }, [init]);

  useEffect(() => {
    params.updateId &&
      actionData &&
      dispatch(updatePrestation(actionData)) &&
      navigate(-1);
  }, [actionData, dispatch, navigate, params.updateId]);
  useEffect(() => {
    params.destroyId &&
      actionData &&
      dispatch(deletePrestation(actionData)) &&
      navigate(-1);
  }, [actionData, dispatch, navigate, params.destroyId]);

  console.log(article);
  return (
    <div>
      <div className="header-title form">Nouveau</div>
    { article&& <PrestationForm article={article} setPrestation={setPrestation} />}
    </div>
  );
};

export default EditPrestation;
