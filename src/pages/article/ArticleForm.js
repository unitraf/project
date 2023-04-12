import { mdiPlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import Checkbox from "../../components/checkbox/Checkbox";
import Listing from "../../components/listing/Listing";
import { removeClassName } from "../../helpers/fonctions";

const ArticleForm = (props) => {
  const rubriques = useSelector(state => state.complements.rubriques)
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
        setArticle({ ...article, rubrique: item.rubrique, tva: item.tva, });
      }}
    >
      <span>{item.rubrique}</span>
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
        <div className="inputBox col-5">
          <input
            type="text"
            name="libelle"
            autoComplete="off"
            value={article.libelle}
            onChange={handleChange}
            required
          />
          <label htmlFor={"libelle"}>Libellé du service</label>
        </div>
        <div className="inputBox col-1">
          <input
            type="text"
            name="unite"
            autoComplete="off"
            value={article.unite}
            onChange={handleChange}
            required
          />
          <label htmlFor={"unite"}>Unité</label>
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
            content={rubriques}
            render={renderRubrique}
            footer={
              <Icon
                path={mdiPlusBox}
                size={0.8}
                onClick={() => {
                  removeClassName("footer-item", "actif")
                  navigate("/facturation/prestations/newRubrique", { state: rubriques })
                }
                }
              />}
          />
        </div>
      </div>
      {/* ligne 2 */}
      <div className="col-12" style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div className="inputBox col-2">
          <input
            type="number"
            name="tva"
            autoComplete="off"
            value={article.tva}
            onChange={handleChange}
          />

          <label htmlFor={"tva"}>Tva (%)</label>
        </div>
        <div className="inputBox col-3">
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
        <div>
          <Checkbox name="active" label="Activé" onChange={e =>
            setArticle({ ...article, [e.target.name]: e.target.checked })
          } />
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
