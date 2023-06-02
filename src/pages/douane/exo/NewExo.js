import React, { useEffect, useState } from "react";
import ExoForm from "./ExoForm";
import { exo as init } from "./init";
import Title from "../../../components/title/Title";
import { useLocation, useParams } from "react-router-dom";

const NewExo = () => {
  const [exo, setExo] = useState(init);
const location = useLocation()
const params =useParams()
const {state}= location

useEffect(() => {
  (params.updateId || params.destroyId) && setExo(state);
}, []);
console.log(state);
  return (
    <div className="card">
      <Title title="Exonération (Nouveau)" mb={20} />

      <ExoForm exo={exo} setExo={setExo} />
    </div>
  );
};

export default NewExo;
