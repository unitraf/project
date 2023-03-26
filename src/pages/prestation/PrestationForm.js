import React from "react";
import { useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import Listing from "../../components/listing/Listing";

const PrestationForm = (props) => {
  const articles = useSelector(state => state.articles)
  const { prestation, setPrestation } = props;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setPrestation({ ...prestation, [e.target.name]: e.target.value });
  };
  const renderLibelles = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setPrestation(item);
      }}
    >
      <span>{item.libelle}</span>
    </div>
  );
  return (
    <Form method="post"  id="prestation-form">
      {/* ligne 1 */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
       
       
        <div className="inputBox col-4">
       
          <input
            type="text"
            name="libelle"
            autoComplete="off"
            value={prestation.libelle}
            onChange={handleChange}
            required
          />
          <label htmlFor={"libelle"}>Libellé du Service</label>
          <Listing
            content={articles}
            render={renderLibelles}
          />
        </div>
        <div className="inputBox col-2">
          <input
            type="number"
            name="valeur"
            autoComplete="off"
            value={prestation.valeur}
            onChange={handleChange}
            required
          />
          <label htmlFor={"valeur"}>Montant</label>
        </div>
      </div>
   {/* hiddenn */}
   <input
            type="hidden"
            name="code"
            autoComplete="off"
            value={prestation.code}
            onChange={handleChange}
            required
          />
           <input
            type="hidden"
            name="rubrique"
            autoComplete="off"
            value={prestation.rubrique}
            onChange={handleChange}
            required
          />
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

export default PrestationForm;
