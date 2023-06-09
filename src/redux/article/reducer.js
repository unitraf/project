import { ADD_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE, UPDATE_RUBRIQUE, DELETE_RUBRIQUE,ADD_RUBRIQUE } from "./type";
import data from "../../data/data_.json";
import { v4 as uuid } from "uuid";
const initialState = {
  articles: [],
  rubrique:[]
};

const reducer = (
  state = data.articles ? data.articles : initialState.articles,
  action
) => {
  switch (action.type) {
    // Article
    case ADD_ARTICLE:
      console.log("ADD_ARTICLE", action.payload);
      let articles = [...state, {...action.payload, uuid:uuid()}];
      return articles;

    case DELETE_ARTICLE:
      console.log("DELETE_ARTICLE", action.payload);
      let filterArticles = state.filter(
        (article) => action.payload !== article.code
      );
      return filterArticles;

    case UPDATE_ARTICLE:
      console.log("UPDATE_ARTICLE", action.payload);
      let updateArticle = state.map((article) => {
        if (action.payload.code === article.code) {
      
          return action.payload;
        }
     
        return article;
      });

      return updateArticle;
     
    
    default:
      return state;
  }
};

export default reducer;
