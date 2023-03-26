import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActionData, useNavigate, useParams } from "react-router-dom";
import { deleteArticle, updateArticle } from "../../redux/article/action";
import ArticleForm from "./ArticleForm";

export async function editArticleAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}
export async function destroyArticleAction({ request, params }) {
  const formData = await request.formData();
  const data = formData.get("code");

  return data;
}

const EditArticle = () => {
  const params = useParams();
  const [article, setArticle] = useState(null);
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
    init && setArticle(init);
  }, [init]);

  useEffect(() => {
    params.updateId &&
      actionData &&
      dispatch(updateArticle(actionData)) &&
      navigate(-1);
  }, [actionData, dispatch, navigate, params.updateId]);
  useEffect(() => {
    params.destroyId &&
      actionData &&
      dispatch(deleteArticle(actionData)) &&
      navigate(-1);
  }, [actionData, dispatch, navigate, params.destroyId]);

  console.log(article);
  return (
    <div>
      <div className="header-title form">Nouveau</div>
    { article&& <ArticleForm article={article} setArticle={setArticle} />}
    </div>
  );
};

export default EditArticle;
