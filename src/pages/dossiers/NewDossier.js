import React, { useState } from "react";
import { dossier as init } from "./init";
import DossierForm from "./DossierForm";
import Title from "../../components/title/Title";

export async function newDossierAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  // return redirect(`/contacts/${params.contactId}`);
  return data;
}

const NewDossier = () => {
  const [dossier, setDossier] = useState(init);

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
