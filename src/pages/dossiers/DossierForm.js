import {
  mdiDotsVerticalCircle,
  mdiFolderPlusOutline,
  mdiPlusBox,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Link, useNavigate, useParams } from "react-router-dom";
import Listing from "../../components/listing/Listing";
import Menu from "../../components/menu/Menu";
import Onglets from "../../components/onglet/Onglets";
import TableT1 from "./TableT1";
import { checkId, listMode, listType } from "./init";
import { useDispatch } from "react-redux";
import {
  addDossier,
  deleteDossier,
  updateDossier,
} from "../../redux/dossier/action";
import TableDdu from "./TableDdu";
import TableMinute from "./TableMinute";
import { removeClassName } from "../../helpers/fonctions";
import SnackBar, { displaySnack } from "../../components/snackbar/SnackBar";
import { prefixe } from "../../helpers/render";

const content = [
  {
    icon: mdiFolderPlusOutline,
    content: "T1",
    route: "/transit/t1/newT1",
  },
  {
    icon: mdiFolderPlusOutline,
    content: "Minute",
    route: "/transit/minutes/newMinute",
  },
  {
    icon: mdiFolderPlusOutline,
    content: "Déclaration",
    route: "/transit/ddu/newDdu",
  },
  {
    icon: mdiFolderPlusOutline,
    content: "Prestation",
    route: "/facturation/devis/newPrestation",
  },
];

const DossierForm = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  console.log("params", params);
  const state = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const { clients, dossiers } = state;
  const { dossier, setDossier } = props;

  const handleChange = (e) => {
    setDossier({ ...dossier, [e.target.name]: e.target.value });
  };
  const handleNada = () => {};

  console.log(dossier);

  const handleSubmit = (e) => {
    e.preventDefault();
    let check = checkId(dossiers, "numero", dossier.numero);

    if (params.updateId) {
      displaySnack(
        `Dossier (${prefixe(dossier.date, dossier.numero)})  mis à jour`
      );
      dispatch(updateDossier(dossier));
    }
    if (params.destroyId) {
      displaySnack(
        `Suppression dossier (${prefixe(dossier.date, dossier.numero)})`
      );
      dispatch(deleteDossier(dossier));
    }
    if (!params.updateId && !params.destroyId) {
      // displaySnack("Dossier ajouter");
      // dispatch(addDossier(dossier));

      if (check.length) {
        console.log("Exist Déja", dossier.numero);
        displaySnack(`Doublon dossier ${prefixe(dossier.numero)}`);
      } else {
        displaySnack(
          `Nouveau dossier (${prefixe(dossier.date, dossier.numero)}) ajouter `
        );
        dispatch(addDossier(dossier));
      }
    }

    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };

  const menuContent = (item, index) => (
    <Link to={`${item.route}/${dossier.numero}`} key={index}>
      <div className="item" style={{ cursor: "pointer" }}>
        <Icon path={item.icon} size={0.8} color="var(--main-color)" />
        <span>{item.content}</span>
      </div>
    </Link>
  );
  const ongletOptions = (
    <Menu
      icon={mdiDotsVerticalCircle}
      style={{
        display: "flex",
        flexDirection: "column",
        // marginTop: 5,
        backgroundColor: "white",
      }}
      content={content}
      render={(item, index) => menuContent(item, index)}
    />
  );
  const renderClient = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setDossier({ ...dossier, client: item });
        removeClassName("listing-item", "actif");
      }}
    >
      <span className="col-4">{item.nom}</span>
    </div>
  );
  const renderMode = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setDossier({ ...dossier, mode: item });
      }}
    >
      <span className="col-4">{item}</span>
    </div>
  );
  const renderType = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setDossier({ ...dossier, type: item });
      }}
    >
      <span className="col-4">{item}</span>
    </div>
  );

  return (
    <>
      <Form method="post" id="dossier-form" onSubmit={handleSubmit}>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <input type="hidden" name="id" defaultValue={dossier.id} />

          <div className="inputBox col-2">
            <input
              type="date"
              name="date"
              value={dossier.date}
              onChange={handleChange}
            />

            <label htmlFor={"numero"}>Date</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="number"
              name="numero"
              value={dossier.numero}
              onChange={handleChange}
              required
            />

            <label htmlFor={"numero"}>N° Dossier</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="mode"
              value={dossier.mode}
              onChange={handleNada}
              required
            />
            <label htmlFor={"mode"}>Mode</label>
            <Listing content={listMode} render={renderMode} />
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              name="reference"
              value={dossier.reference}
              onChange={handleChange}
              required
            />
            <label htmlFor={"reference"}>Cmde. Client</label>
          </div>
        </div>
        {/* ligne 2 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-4">
            <input
              type="text"
              name="expediteur"
              value={dossier.expediteur}
              onChange={handleChange}
            />
            <label htmlFor={"expediteur"}>Expéditeur</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              name="client"
              value={dossier.client.nom}
              onChange={handleNada}
              required
            />
            <label htmlFor={"client"}>Destinataire</label>
            <Listing
              content={clients}
              render={renderClient}
              footer={
                <Icon
                  path={mdiPlusBox}
                  size={0.8}
                  onClick={() => {
                    removeClassName("footer-item", "actif");
                    navigate("/clients/newClient", { from: dossier });
                  }}
                />
              }
            />
          </div>
        </div>
        {/* ligne 3 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="text"
              name="document"
              value={dossier.document}
              onChange={handleChange}
              required
            />
            <label htmlFor={"document"}>
              {dossier.mode === "Aérien"
                ? "Document (LTA)"
                : dossier.mode === "Maritime"
                ? "Document (BL)"
                : "Document (Autres)"}
            </label>
          </div>

          <div className="inputBox col-3">
            <input
              type="text"
              name="transport"
              value={dossier.transport}
              onChange={handleChange}
              required
            />
            <label htmlFor={"transport"}>Transporteur</label>
          </div>
        </div>
        {/* ligne 4 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="text"
              name="origine"
              value={dossier.origine}
              onChange={handleChange}
            />
            <label htmlFor={"origine"}>Origine</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="provenance"
              value={dossier.provenance}
              onChange={handleChange}
              required
            />
            <label htmlFor={"provenance"}>Provenance</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="date"
              name="depart"
              value={dossier.depart}
              onChange={handleChange}
            />
            <label htmlFor={"depart"}>Départ</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="date"
              name="arrivee"
              value={dossier.arrivee}
              onChange={handleChange}
            />
            <label htmlFor={"arrivee"}>Arrivée</label>
          </div>
        </div>
        {/* ligne 5 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="number"
              name="nombre"
              value={dossier.nombre}
              onChange={handleChange}
              required
            />
            <label htmlFor={"nombre"}>Colis</label>
          </div>

          <div className="inputBox col-2">
            <input
              type="text"
              name="type"
              value={dossier.type}
              onChange={handleNada}
              required
            />
            <label htmlFor={"type"}>Type</label>
            <Listing content={listType} render={renderType} />
          </div>
          <div className="inputBox col-5">
            <input
              type="text"
              name="description"
              value={dossier.description}
              onChange={handleChange}
              required
            />
            <label htmlFor={"description"}>Description</label>
          </div>
        </div>
        {/* ligne 6 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="number"
              name="poids"
              value={dossier.poids}
              onChange={handleChange}
            />
            <label htmlFor={"poids"}>Poids Brut</label>
          </div>
          {dossier.mode && dossier.mode === "Aérien" && (
            <>
              <div className="inputBox col-2">
                <input
                  type="number"
                  name="poidsVol"
                  value={dossier.poidsVol}
                  onChange={handleChange}
                />
                <label htmlFor={"poids"}>Poids Vol.</label>
              </div>
              <div className="inputBox col-2">
                <input
                  type="number"
                  name="volume"
                  value={dossier.volume}
                  onChange={handleChange}
                />
                <label htmlFor={"volume"}>Volume</label>
              </div>
            </>
          )}
          <div className="inputBox col-2">
            <input
              type="hidden"
              name="status"
              value={dossier.status}
              onChange={handleChange}
              required
            />
            {/* <label htmlFor={"status"}>Status</label>
            <Listing content={listStatus} render={renderStatus} /> */}
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
      {/* Onglets elements */}
      {/* {params.updateId && (
        <div className="col-12" style={{ display: "flex", marginTop: 20 }}>
          <Onglets
            // icon={ongletMenuIcon}
            menu={ongletOptions}
            // active={setStatus}
            ongletHeaders={["T1's", "Minute's", "Déclaration's"]}
            ongletBody={[
              <TableT1 t1={dossier.t1} />,
              <TableMinute
                showModal={showModal}
                setShowModal={setShowModal}
                minute={dossier.minute}
              />,
              <TableDdu declaration={dossier.declaration} />,
            ]}
          />
        </div>
      )} */}

      <SnackBar />
    </>
  );
};

export default DossierForm;
