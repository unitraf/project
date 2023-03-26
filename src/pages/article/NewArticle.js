import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useActionData, useNavigate } from "react-router-dom";
import { addArticle } from "../../redux/article/action";
import ArticleForm from "./ArticleForm";
import { article as init } from "./init";

export async function newArticleAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}


const NewArticle = () => {
    const [article, setArticle] = useState(init)
  const dispatch = useDispatch();
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    actionData && dispatch(addArticle(actionData)) && navigate(-1);
  }, [actionData, dispatch, navigate]);

  console.log(article);
  return (
    <div>
      <div className="header-title form" >
        Nouveau
      </div>
      <ArticleForm article={article} setArticle={setArticle} />
    </div>
  );
};

export default NewArticle;
