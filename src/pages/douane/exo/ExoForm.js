import React, { useEffect, useState } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import Listing from "../../../components/listing/Listing";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiPlusBox, mdiTrashCanOutline } from "@mdi/js";
import { removeClassName } from "../../../helpers/fonctions";
import { addExo, deleteExo, updateExo } from "../../../redux/exo/action";
import { article as init } from "./init";
import SnackBar, { displaySnack } from "../../../components/snackbar/SnackBar";
import moment from "moment";

const ExoForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const state = useSelector((state) => state);
  const { clients, bureaux, tarifs } = state;
  const { exo, setExo } = props;
  const [article, setArticle] = useState(init);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.updateId) {
      displaySnack("Exonération mis à jour");
      dispatch(updateExo(exo));
    }
    if (params.destroyId) {
      displaySnack("Suppression exonération ");
      dispatch(deleteExo(exo));
    }
    if (!params.updateId && !params.destroyId) {
      displaySnack("Exonération ajouter");

      dispatch(addExo(exo));
    }

    //

    setTimeout(() => {
      // return dispatch(updateBureau(bureau)) && navigate(-1);
      navigate(-1);
    }, 3000);
  };
  const handleChange = (e) => {
    setExo({ ...exo, [e.target.name]: e.target.value });
  };
  const handleChangeArticle = (e) => {
    setArticle({ ...article, [e.target.id]: e.target.value });
  };

  console.log(exo);
  const renderClients = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setExo({
          ...exo,
          beneficiaire: item,
        });
      }}
    >
      <span>{item.nom}</span>
    </div>
  );
  const renderBureaux = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setExo({
          ...exo,
          lieu: item.bureau,
        });
      }}
    >
      <span>{item.bureau}</span>
    </div>
  );
  const renderPosition = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setArticle({
          ...article,
          position: item.nts,
          designation: item.designation,
        });
      }}
    >
      <span>{item.nts}</span>
    </div>
  );

  return (
    <>
      <Form method="post" id="exo-form" onSubmit={handleSubmit}>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="number"
              name="code"
              autoComplete="off"
              value={exo.code}
              onChange={handleChange}
              required
            />

            <label htmlFor={"code"}>Code</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="number"
              name="numero"
              autoComplete="off"
              value={exo.numero}
              onChange={handleChange}
              required
            />

            <label htmlFor={"numero"}>Numéro</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="date"
              name="emission"
              autoComplete="off"
              value={exo.emission}
              onChange={handleChange}
            />

            <label htmlFor={"emission"}>Date d'émission</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="date"
              name="expiration"
              autoComplete="off"
              value={exo.expiration}
              onChange={handleChange}
            />

            <label htmlFor={"expiration"}>Date d'expiration</label>
          </div>
          <div className="inputBox col-1">
            <input
              type="text"
             
              autoComplete="off"
              value={exo.expiration&&exo.emission?moment(exo.emission).diff(exo.expiration,"d"):"-"}
              onChange={()=>{}}
            />

            <label htmlFor={"expiration"}>Jour-J</label>
          </div>
        </div>
        {/* ligne 2 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-4">
            <input
              type="text"
              value={exo.beneficiaire ? exo.beneficiaire.nom : "-"}
              onChange={handleChange}
            />
            <label htmlFor={"client"}>Bénéficiaire</label>
            <Listing
              content={clients}
              render={renderClients}
              footer={
                <Icon
                  path={mdiPlusBox}
                  size={0.8}
                  onClick={() => {
                    removeClassName("footer-item", "actif");
                    navigate("/clients/newClient");
                  }}
                />
              }
            />
          </div>
          <div className="inputBox col-4">
            <input type="text" value={exo.lieu} onChange={handleChange} />
            <label htmlFor={"lieu"}>Lieu d'utilisation</label>
            <Listing
              content={bureaux}
              render={renderBureaux}
              footer={
                <Icon
                  path={mdiPlusBox}
                  size={0.8}
                  onClick={() => {
                    removeClassName("footer-item", "actif");
                    navigate("/douane/bureaux/newBureau");
                  }}
                />
              }
            />
          </div>
        </div>
        {/* ligne 3 article */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="number"
              value={article.quantite}
              id="quantite"
              onChange={handleChangeArticle}
            />
            <label htmlFor={"quantite"}>Quantité</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="number"
              value={article.position}
              id="position"
              onChange={handleChangeArticle}
            />
            <label htmlFor={"position"}>Position</label>
            <Listing
              content={tarifs}
              render={renderPosition}
              footer={
                <Icon
                  path={mdiPlusBox}
                  size={0.8}
                  onClick={() => {
                    removeClassName("footer-item", "actif");
                    navigate("/douane/tarifs/newTarif");
                  }}
                />
              }
            />
          </div>
          <div className="inputBox col-6">
            <input
              type="text"
              value={article.designation}
              id="designation"
              onChange={handleChangeArticle}
            />
            <label htmlFor={"designation"}>designation</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="number"
              value={article.valeur}
              id="valeur"
              onChange={handleChangeArticle}
            />
            <label htmlFor={"valeur"}>valeur</label>
          </div>
          <div className="inputBox col-3" style={{ marginLeft: 3 }}>
            {article.quantite &&
            <button
              className="button"
              type="button"
              onClick={() => {
                console.log(article);
                
                  setExo({
                    ...exo,
                    details: [...(exo.details || []), article],
                  });
                setArticle(init);
              }}
            >
              Insérer
            </button>}
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
            Quitter
          </button>
        </div>
      </Form>
      {exo.details.length>0&&
      <fieldset className="card entite col-12 " style={{ marginInline: 0 }}>
        <legend className="card legend">Détails des marchandises</legend>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Désignation</th>
              <th>Quantité</th>
              <th>Valeur</th>
            </tr>
          </thead>
          <tbody>
            {exo.details &&
              exo.details.length > 0 &&
              exo.details.map((item, index) => (
                <tr key={index}>
                  <td>{item.position}</td>
                  <td>{item.designation}</td>
                  <td>{item.quantite}</td>
                  <td>{item.valeur}</td>
                  <td>   <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() =>{
         let details= exo.details.filter((item, ind)=>ind!==index)
         setExo({...exo, details})
          }}
        /></td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Total</td>
              <td>Qté</td>
              <td>Val</td>
            </tr>
          </tfoot>
        </table>
      </fieldset>}
      <SnackBar />
    </>
  );
};

export default ExoForm;
