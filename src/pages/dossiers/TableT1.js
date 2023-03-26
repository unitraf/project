import { mdiSquareEditOutline, mdiTrashCanOutline } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react'
import { Link } from 'react-router-dom';
import Table from '../../components/table/Table'
import { date, nombre } from '../../helpers/render';

const TableT1 = (props) => {
    const {t1} =props
    let headData = [
        "Frontière",
        "N° Transit",
        "Date",
        "N° Sommier",
        "Provenance",
        "Moy. Transport",
        "quantité",
        "Poids",
        "Désignation",
        "Action",
      ];
      const renderHead = (item, index) => <th key={index}>{item}</th>;
    
      const renderBody = (item, index) => (
        <tr key={index}>
          <td>{item.burEntree}</td>
          <td>{item.numero}</td>
          <td>{ date(item.date) }</td>
          <td>{item.sommier}</td>
          <td>{item.provenance}</td>
          <td>{item.transport}</td>
          <td>{nombre(item.quantite) }</td>
          <td>{nombre(item.poids) }</td>
          <td>{item.designation}</td>
    
          <td
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 0,
            }}
          >
            <Link to={`/transit/t1/${item.numero}`}>
              {" "}
              <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
            </Link>
            /
            <Link to={`/transit/t1/${item.numero}/destroy`} onClick={(e) => {}}>
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
    bodyData={t1}
    renderBody={renderBody}
  /></div>
  )
}

export default TableT1