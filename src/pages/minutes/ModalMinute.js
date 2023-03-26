import { mdiWindowClose } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import ReactDomServer from 'react-dom/server'
import { print } from "../../api/actions";
import Modal from "../../components/modal/Modal";
import PrintMinute from "./PrintMinute";

const ModalMinute = (props) => {
  const { showModal, setShowModal, minute } = props;
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

      <div className="modalBody"><PrintMinute minute={minute} /></div>
      <div className="modalFooter">
        <button
          className="modalBtn"
          onClick={() => {
            let content = ReactDomServer.renderToString(<PrintMinute minute={minute} />)
            print(content);
            console.log(minute);
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

export default ModalMinute;
