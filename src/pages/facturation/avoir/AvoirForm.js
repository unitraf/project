import React from "react";
import { Form, useNavigate } from "react-router-dom";
import DetailsTable from "../DetailsTable";
import InputForm from "../InputForm";
import SnackBar from "../../../components/snackbar/SnackBar";

const AvoirForm = (props) => {
  const { facture, setFacture, dossier } = props;
  const navigate = useNavigate();

  return (
    <>
    <Form method="post" id="avoir-form">
      <InputForm data={facture} setData={setFacture} dossier={dossier} />
      {/* render Details */}
      <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <DetailsTable dossier={dossier} />
      </div>
      {/* Button */}
      <div>
        <button
          // disabled={facture.status === "Validé" && true}
          className="button"
          type="submit"
          onClick={() => setFacture({ ...facture, status: "Validé" })}
        >
          Poursuivre
        </button>

        <button
          className="button"
          // disabled={facture.status === "Validé" && true}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Annuler
        </button>
      </div>
    </Form>
    
    </>
  );
};

export default AvoirForm;
