import React from "react";
import { useDispatch } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { updateDossier } from "../../../redux/dossier/action";
import DetailsTable from "../DetailsTable";
import InputForm from "../InputForm";
import SnackBar from "../../../components/snackbar/SnackBar";
import { anneeMois } from "../../../helpers/render";

const FactureForm = (props) => {
  const dispatch = useDispatch();
  const { facture, setFacture, dossier } = props;

  const navigate = useNavigate();

  return (
    <>
    <Form method="post" id="facture-form">
      <InputForm data={facture} setData={setFacture} dossier={dossier} />

      {/* render Details */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <DetailsTable dossier={dossier} />
      </div>

      {/* Buutton */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <button
            // disabled={facture.status === "Validé" && true}
            className="button"
            type="submit"
            onClick={() => setFacture({ ...facture, status: "Validé" })}
          >
            Valider
          </button>

          <button
            className="button"
            // disabled={facture.status === "Validé" && true}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setFacture({ ...facture, status: "En cours" });
              let formData = new FormData(e.target.form);
              let actionData = Object.fromEntries(formData);

              dispatch(updateDossier({ ...dossier, facture: actionData })) &&
                navigate(-1);
            }}
          >
            Sauvegarder
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Quitter
        </button>
      </div>
    </Form>
    <SnackBar  message={`Facture N° ${anneeMois(facture.date)}/${facture.numero} établis`}/>
    </>
  );
};

export default FactureForm;
