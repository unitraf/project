import { mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Link , useNavigate, useLocation, useParams } from "react-router-dom";
import Table from "../../components/table/Table";
import { addRubrique, deleteRubrique, updateRubrique } from "../../redux/complement/action";
import { rubrique as init } from "./init";

let headData = ["Rubrique", "Tva", "..."];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const NewRubrique = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams()
  const rubriques = useSelector((state) => state.complements.rubriques);
console.log(!params);
  const [rubrique, setRubrique] = useState(init);
  const handleChange = (e) => {
    setRubrique({ ...rubrique, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const rubrique = Object.fromEntries(formData);
    if (params.updateId) {
      return dispatch(updateRubrique(rubrique))&&navigate(-1)
    }
    if (params.destroyId) {
      return dispatch(deleteRubrique(rubrique.code))&&navigate(-1)
    }

    dispatch(addRubrique(rubrique))&&navigate(-1);
  };

  const renderBody = (item, index) => (
    <tr key={index}>
      {/* <td className="2">{item.code}</td> */}
      <td className="col-9">{item.rubrique}</td>
      <td className="col-2">{item.tva}</td>
{(params)&&(
      <td
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" 
        onClick={()=>{
          setRubrique(item)
         navigate(`${item.code}`)
        }}
        /> /
        <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() => {
            setRubrique(item)
         navigate(`${item.code}/destroy`)
           
          }}
        />{" "}
      </td>)}
    </tr>
  );

  return (
    <>
      <div className="header-title form">{params.updateId?"Editon":params.destroyId?"Suppression":"Nouveau"} </div>
      <div style={{}}>
        <Form
          className="col-6"
          method="post"
          id="rubrique-form"
          onSubmit={handleSubmit}
        >
          {/* ligne 1 */}
          <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
            <div className="inputBox col-3">
              <input
                type="text"
                name="code"
                autoComplete="off"
                value={rubrique.code}
                onChange={handleChange}
                required
              />

              <label htmlFor={"code"}>Préfixe</label>
            </div>
            <div className="inputBox col-6">
              <input
                type="text"
                name="rubrique"
                autoComplete="off"
                value={rubrique.rubrique}
                onChange={handleChange}
                required
              />
              <label htmlFor={"rubrique"}>Libellé</label>
            </div>
            <div className="inputBox col-2">
              <input
                type="number"
                name="tva"
                autoComplete="off"
                value={rubrique.tva}
                onChange={handleChange}
                required
              />
              <label htmlFor={"tva"}>Tva (%)</label>
            </div>
          </div>

          {/* Buutton */}
          <div>
            <button className="button" type="submit">
          {params.updateId?"Editer":params.destroyId?"Supprimer":"Ajouter"}   
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
        <div className="col-6" style={{ marginTop: 15 }}>
          <Table
            headData={headData}
            renderHead={renderHead}
            bodyData={rubriques}
            renderBody={renderBody}
          />
        </div>
      </div>
    </>
  );
};

export default NewRubrique;
