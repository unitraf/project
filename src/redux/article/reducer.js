import { ADD_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE } from "./type";
import data from "../../data/data_.json";
const initialState = {
  articles: [],
};

const reducer = (
  state = data.articles ? data.articles : initialState.articles,
  action
) => {
  switch (action.type) {
    case ADD_ARTICLE:
      console.log("ADD_ARTICLE", action.payload);
      let articles = [...state, action.payload];
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
