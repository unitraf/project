import React from "react";
import { Form, useNavigate } from "react-router-dom";
import Listing from "../../components/listing/Listing";

const ArticleForm = (props) => {
  const { article, setArticle } = props;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };
  const renderRubrique = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setArticle({ ...article, rubrique: item });
      }}
    >
      <span>{item}</span>
    </div>
  );
  return (
    <Form method="post" id="article-form">
      {/* ligne 1 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="number"
            name="code"
            autoComplete="off"
            value={article.code}
            onChange={handleChange}
            required
          />

          <label htmlFor={"code"}>Code</label>
        </div>
        <div className="inputBox col-6">
          <input
            type="text"
            name="libelle"
            autoComplete="off"
            value={article.libelle}
            onChange={handleChange}
            required
          />
          <label htmlFor={"libelle"}>Libellé</label>
        </div>
        <div className="inputBox col-2">
          <input
            type="text"
            name="rubrique"
            autoComplete="off"
            value={article.rubrique}
            onChange={handleChange}
            required
          />
          <label htmlFor={"rubrique"}>Rubrique</label>
          <Listing
            content={["Débours", "Interventions", "Autres"]}
            render={renderRubrique}
          />
        </div>
      </div>
      {/* ligne 2 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="number"
            name="valeur"
            autoComplete="off"
            value={article.valeur}
            onChange={handleChange}
          />

          <label htmlFor={"valeur"}>Valeur/défaut</label>
        </div>
        <div className="inputBox col-3">
          <input
            type="number"
            name="compte"
            autoComplete="off"
            value={article.compte}
            onChange={handleChange}
          />
          <label htmlFor={"compte"}>Compte</label>
        </div>
      </div>

      {/* Buutton */}
      <div>
        <button className="button" type="submit">
          Valider
        </button>

        <button
          className="button"
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Annuler
        </button>
      </div>
    </Form>
  );
};

export default ArticleForm;
