import React from "react";
import { useDispatch } from "react-redux";
import { Form, useNavigate, useParams } from "react-router-dom";
import {
  addBureau,
  deleteBureau,
  updateBureau,
} from "../../../redux/douane/action";
import SnackBar, { displaySnack } from "../../../components/snackbar/SnackBar";
const BureauForm = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setBureau({ ...bureau, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello", bureau);

    if (params.updateId) {
      displaySnack("Bureau douane mis à jour");
      dispatch(updateBureau(bureau));
    }
    if (params.destroyId) {
      displaySnack("Suppression bureau douane");
      dispatch(deleteBureau(bureau));
    }
    if (!params.updateId && !params.destroyId) {
      displaySnack("Bureau douane ajouter");
      dispatch(addBureau(bureau));
    }

    //

    setTimeout(() => {
      // return dispatch(updateBureau(bureau)) && navigate(-1);
      navigate(-1);
    }, 3000);
  };
  const { bureau, setBureau } = props;
  return (
    <>
      <Form method="post" id="bureau-form" onSubmit={handleSubmit}>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="text"
              maxLength={5}
              name="code"
              autoComplete="off"
              value={bureau.code}
              onChange={handleChange}
              required
            />

            <label htmlFor={"code"}>Code</label>
          </div>
          <div className="inputBox col-6">
            <input
              type="text"
              name="bureau"
              autoComplete="off"
              value={bureau.bureau}
              onChange={handleChange}
              required
            />

            <label htmlFor={"bureau"}>Désignation bureau douane</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="region"
              autoComplete="off"
              value={bureau.region}
              onChange={handleChange}
              required
            />

            <label htmlFor={"region"}>Région</label>
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
            Annuler
          </button>
        </div>
      </Form>
      <SnackBar />
    </>
  );
};

export default BureauForm;
