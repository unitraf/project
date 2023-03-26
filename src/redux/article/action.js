
import { ADD_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE , } from "./type";

export const addArticle = (article) => {

  return {
    type: ADD_ARTICLE,
    payload: article,
  };
};

export const deleteArticle = (code) => {

  return {
    type: DELETE_ARTICLE,
    payload: code,
  };
};

export const updateArticle = (updateArticle) => {
  return {
    type: UPDATE_ARTICLE,
    payload: updateArticle,
  };
};

