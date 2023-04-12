import { mdiWindowClose } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import ReactDomServer from 'react-dom/server'
import { print } from "../../../api/actions";
import Modal from "../../../components/modal/Modal";
import PrintDevis from "./PrintDevis";

const ModalDevis = (props) => {
  const { showModal, setShowModal, dossier } = props;
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <div
        className="modalHeader"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span>Aperçu</span>{" "}
        <Icon
          path={mdiWindowClose}
          size={0.8}
          color="white"
          style={{ cursor: "pointer", alignSelf: "end" }}
          onClick={() => setShowModal(!showModal)}
        />
      </div>

      <div className="modalBody"><PrintDevis dossier={dossier} /></div>
      <div className="modalFooter">
        <button
          className="modalBtn"
          onClick={() => {
            let content = ReactDomServer.renderToString(<PrintDevis dossier={dossier} />)
            print(content);
            console.log(content);
          }}
        >
          Imprimer
        </button>
        <button className="modalBtn" onClick={() => setShowModal(!showModal)}>
          Quitter
        </button>
      </div>
    </Modal>
  );
};

export default ModalDevis;
