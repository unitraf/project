import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Title from "../../../components/title/Title";
import { bureau as init } from "./init";
import BureauForm from "./BureauForm";

const NewBureau = () => {
  const [bureau, setBureau] = useState(init);
  const location = useLocation();
  const params = useParams();
  const { state } = location;


  useEffect(() => {
    (params.updateId || params.destroyId) && setBureau(state);
  }, []);

  return (
    <div className="card">
      <Title
        title={
          params.updateId
            ? `Bureau douane (Edition)`
            : params.destroyId
            ? `Bureau douane (Suppression)`
            : `Bureau douane (Nouveau)`
        }
        mb={20}
      />

      <BureauForm bureau={bureau} setBureau={setBureau} />
    </div>
  );
};

export default NewBureau;
