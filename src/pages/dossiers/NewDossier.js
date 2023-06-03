import React, { useEffect, useState } from "react";
import { dossier as init } from "./init";
import DossierForm from "./DossierForm";
import Title from "../../components/title/Title";
import { useLocation } from "react-router-dom";

// export async function newDossierAction({ request, params }) {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   console.log(data);
//   // return redirect(`/contacts/${params.contactId}`);
//   return data;
// }

const NewDossier = () => {
  const [dossier, setDossier] = useState(init);
  const location = useLocation();
  const { state } = location;
  console.log(state);

  useEffect(() => {
    state && setDossier(state);
  }, [state]);

  return (
    <div className="">
      <div className="card">
        <Title title="Dossier (Nouveau)" />
      </div>

      <div className="card card-top">
        <DossierForm dossier={dossier} setDossier={setDossier} />
      </div>
    </div>
  );
};

export default NewDossier;
