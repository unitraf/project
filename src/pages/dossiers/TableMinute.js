import { mdiPrinterSearch, mdiSquareEditOutline, mdiTrashCanOutline } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Table from '../../components/table/Table'
import { nombre } from '../../helpers/render';
import ModalMinute from '../minutes/ModalMinute';

const TableMinute = (props) => {
    const {showModal, setShowModal,minute} =props
    const [index, setIndex] = useState(0)
    let headData = [
      "Régime",
        "Repertoire",
        "T1",
        "Sommier",
        "Exo",
        "License",
        "Désignation",
        "Val. Douane",
        "Total Impos.",
        "Taxes Glob.",
        "Total Décl.",
        "Action",
      ];
      const renderHead = (item, index) => <th key={index}>{item}</th>;
    
      const renderBody = (item, index) => (
        <tr key={index}>
          <td>{item.regime}</td>
          <td>{item.repertoire}</td>
          <td>{item.t1 }</td>
          <td>{item.sommier}</td>
          <td>{item.exo}</td>
          <td>{item.license}</td>
          <td>{item.designation}</td>
          <td>{nombre(item.valeur)}</td>
          
          <td>{nombre(item.droits)}</td>
          <td>{nombre(item.taxe)}</td>
          <td>{nombre(item.total)}</td>
    
          <td
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 0,
            }}
          >
             <Icon
          path={mdiPrinterSearch}
          size={0.6}
          title="Aperçu"
          onClick={() => {
            setIndex(index)
            console.log("Preview for minute", minute[index]);
            setShowModal(true);
          }}
        />{" "}
        /
            <Link to={`/transit/minutes/${item.repertoire}`}>
              {" "}
              <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
            </Link>
            /
            <Link to={`/transit/minutes/${item.repertoire}/destroy`} onClick={(e) => {}}>
              {" "}
              <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" />{" "}
            </Link>
          </td>
        </tr>
      );
  return (
    <div> <Table
    headData={headData}
    renderHead={renderHead}
    bodyData={minute}
    renderBody={renderBody}
  />
  <ModalMinute showModal={showModal} setShowModal={setShowModal} minute={minute[index]} />
  </div>
  )
}

export default TableMinute