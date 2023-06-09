import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useLocation, useNavigate, useParams } from "react-router-dom";
import Listing from "../../../components/listing/Listing";
import { listRegime } from "../../minutes/init";
import { listType, article as art } from "./init";
import { getTotal, nombre, removeClassName } from "../../../helpers/fonctions";
import { annee } from "../../../helpers/render";
import { mdiPlusBox, mdiTrashCanOutline } from "@mdi/js";
import { updateDossier } from "../../../redux/dossier/action";
import Icon from "@mdi/react";
import SnackBar, { displaySnack } from "../../../components/snackbar/SnackBar";

const DduForm = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ddu, setDdu, dossier } = props;
  const state = useSelector((state) => state);
  const { tarifs, exos, bureaux } = state;

  const [article, setArticle] = useState(art);
  const poids = getTotal(ddu.articles, "poids");
  const valeur = getTotal(ddu.articles, "valeur");
  const colis = getTotal(ddu.articles, "nombre");
  const handleChange = (e) => {
    setDdu({ ...ddu, [e.target.name]: e.target.value });
    console.log(ddu);
    
  };
  const handleChangeArticle = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (params.updateId) {
      displaySnack("Mis à jour déclaration");
      let declaration = dossier.declaration.map((decl) => {
        if (decl.reference === ddu.reference) {
          return { ...ddu, poids, valeur, nombre: colis };
        }
        return decl;
      });
      let updateDeclaration = {
        ...dossier,
        status: "Douane",
        declaration,
      };
      dispatch(updateDossier(updateDeclaration));
    }
    if (params.destroyId) {
      displaySnack("Suppression déclaration");
      let declaration = dossier.declaration.filter(
        (decl) => decl.reference !== ddu.reference
      );
      let updateDeclaration = {
        ...dossier,
        status: "Douane",
        declaration,
      };
      dispatch(updateDossier(updateDeclaration));
    }
    if (!params.updateId && !params.destroyId) {
      let declaration = [
        ...(dossier.declaration || []),
        { ...ddu, poids, valeur, nombre: colis },
      ];
      let updateDeclaration = {
        ...dossier,
        status: "Douane",
        declaration,
      };
      displaySnack(`Déclaration ajouter`);


      dispatch(updateDossier(updateDeclaration));
    }

    setTimeout(() => {
     
      navigate(-1);
    }, 3000);
  };
  const renderBureau = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setDdu({
          ...ddu,
          bureau: `${item.bureau} (${item.code})`,
          douane: item,
        });
      }}
    >
      <span className="col-4">{item.bureau}</span>
    </div>
  );
  const renderRegime = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setDdu({ ...ddu, regime: item.code });
      }}
    >
      <span className="col-4">{`${item.regime} (${item.code})`}</span>
    </div>
  );
  const renderExos = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setDdu({ ...ddu, exo: item });
      }}
    >
      <span className="col-4">{`${annee(item.date)} - ${item.numero} `}</span>
    </div>
  );

  const renderPositionArticle = (item, index) => (
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
      <span className="col-4">{item.nts}</span>
    </div>
  );

  const renderNature = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setArticle({ ...article, nature: item.nature });
      }}
    >
      <span className="col-4">{`${item.nature} (${item.code})`}</span>
    </div>
  );
  useEffect(() => {
    params.dossierId && setDdu({ ...ddu, dossier: params.dossierId });
  }, [params.dossierId]);

  return (
    <>
      <Form method="post" id="ddu-form" onSubmit={handleSubmit}>
        {/* ligne 1** */}

        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
       
          <div className="inputBox col-4">
            <input
              type="text"
              name="bureau"
              autoComplete="off"
              value={ddu.bureau}
              onChange={handleChange}
            />
            <label htmlFor={"bureau"}>Bureau</label>
            <Listing
              content={bureaux}
              render={renderBureau}
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
          <div className="inputBox col-2">
            <input
              type="text"
              name="regime"
              autoComplete="off"
              value={ddu.regime ? ddu.regime : "-"}
              onChange={() => {}}
              required
            />

            <label htmlFor={"regime"}>Régime</label>
            <Listing content={listRegime} render={renderRegime} />
          </div>
          <div className="inputBox col-1">
            <input
              type="number"
              name="reference"
              autoComplete="off"
              value={ddu.reference}
              onChange={handleChange}
              required
            />
            <label htmlFor={"reference"}>Reférence</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="date"
              name="date"
              autoComplete="off"
              value={ddu.date}
              onChange={handleChange}
            />

            <label htmlFor={"date"}>Date</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="number"
              name="repertoire"
              value={ddu.repertoire}
              onChange={handleChange}
            />
            <label htmlFor={"repertoire"}>N° Répertoire</label>
          </div>
        </div>
        {/* ligne 2 */}
   

        {/* ligne 5 */}

        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="number"
              name="license"
              autoComplete="off"
              value={ddu.license}
              onChange={handleChange}
            />

            <label htmlFor={"license"}>N° License</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="number"
              name="exo"
              value={ddu.exo.numero && ddu.exo.numero}
              onChange={() => {}}
            />
            <label htmlFor={"exo"}>N° Exo</label>
            <Listing
              content={exos}
              render={renderExos}
              footer={
                <Icon
                  path={mdiPlusBox}
                  size={0.8}
                  onClick={() => {
                    removeClassName("footer-item", "actif");
                    navigate("/douane/exo/newExo");
                  }}
                />
              }
            />
          </div>
        </div>
        {/* ligne 5 **/}

        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="number"
              name="liquidation"
              autoComplete="off"
              value={ddu.liquidation}
              onChange={handleChange}
              required
            />

            <label htmlFor={"liquidation"}>N° Liquidation</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="date"
              name="dateLiquidation"
              value={ddu.dateLiquidation}
              onChange={handleChange}
            />
            <label htmlFor={"dateLiquidation"}>Date Liq.</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="number"
              name="droits"
              autoComplete="off"
              value={ddu.droits}
              onChange={handleChange}
              required
            />

            <label htmlFor={"droits"}>Droits & Taxes</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="number"
              name="taxes"
              value={ddu.taxes}
              onChange={handleChange}
              required
            />
            <label htmlFor={"taxes"}>Taxes Glob.</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="number"
              name="total"
              value={ddu.total}
              onChange={handleChange}
              required
            />
            <label htmlFor={"total"}>Total Décl.</label>
          </div>
        </div>

        {/* ligne 7 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-1">
            <input
              type="number"
              name="nombre"
              autoComplete="off"
              value={article.nombre}
              onChange={handleChangeArticle}
            />

            <label htmlFor={"nombre"}>Nombre</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="nature"
              autoComplete="off"
              value={article.nature}
              onChange={handleChangeArticle}
            />
            <label htmlFor={"type"}>Nature</label>
            <Listing content={listType} render={renderNature} />
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="position"
              autoComplete="off"
              value={article.position}
              onChange={handleChangeArticle}
            />
            <label htmlFor={"position"}>Position</label>
            <Listing
              content={tarifs}
              render={renderPositionArticle}
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
          <div className="inputBox col-1">
            <input
              type="number"
              name="poids"
              autoComplete="off"
              value={article.poids}
              onChange={handleChangeArticle}
            />
            <label htmlFor={"poids"}>Poids</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="number"
              name="valeur"
              autoComplete="off"
              value={article.valeur}
              onChange={handleChangeArticle}
            />
            <label htmlFor={"valeur"}>Valeur</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="designation"
              autoComplete="off"
              value={article.designation}
              onChange={handleChangeArticle}
            />
            <label htmlFor={"designation"}>Désignation</label>
          </div>

          {article.nombre && (
            <button
              className="button"
              style={{ marginLeft: 5 }}
              type="button"
              onClick={() => {
                let articles = [...(ddu.articles || []), article];
                setDdu({ ...ddu, articles });
                setArticle(art);
              }}
            >
              Ajouter
            </button>
          )}
        </div>
        {/* Articles */}
        {ddu.articles && ddu.articles.length > 0 && (
          <fieldset
            className="card entite col-12 "
            style={{ marginInline: 0, display: "block" }}
          >
            <legend className="card legend">Article(s)</legend>
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Nature</th>
                  <th>Désignation</th>
                  <th>Position</th>
                  <th>Poids</th>
                  <th>Valeur</th>
                </tr>
              </thead>
              <tbody>
                {ddu.articles &&
                  ddu.articles.map((item, index) => (
                    <tr key={index}>
                      <td>{item.nombre}</td>
                      <td>{item.nature}</td>
                      <td>{item.designation}</td>
                      <td>{item.position}</td>
                      <td>{nombre(item.poids)}</td>
                      <td>{nombre(item.valeur)}</td>
                      <td>
                        {" "}
                        <Icon
                          path={mdiTrashCanOutline}
                          size={0.6}
                          title="Supprimer"
                          onClick={() => {
                            let articles = ddu.articles.filter(
                              (item, ind) => ind !== index
                            );
                            setDdu({ ...ddu, articles });
                          }}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4}>Total</td>
                  <td>{nombre(poids)}</td>
                  <td>{nombre(valeur)}</td>
                </tr>
              </tfoot>
            </table>
          </fieldset>
        )}
        {/* Button */}
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
      <SnackBar />
    </>
  );
};

export default DduForm;
