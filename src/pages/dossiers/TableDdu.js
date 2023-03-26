import { mdiSquareEditOutline, mdiTrashCanOutline } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react'
import { Link } from 'react-router-dom';
import Table from '../../components/table/Table'
import { date, nombre } from '../../helpers/render';

const TableDdu = (props) => {
    const {declaration} =props
    let headData = ["Bureau", "Reférence", "Date", "N° Sommier", "Nombre", "Type","Poids","Désignation","Régime", "Valeur", "Total", "Action"];
    const renderHead = (item, index) => <th key={index}>{item}</th>;
  
    const renderBody = (item, index) => (
      <tr key={index}>
        <td>{item.bureau}</td>
        <td>{item.reference}</td>
        <td>{ date(item.date) }</td>
        <td>{item.sommier}</td>
        <td>{nombre(item.nombre) }</td>
        <td>{item.type}</td>
        <td>{nombre(item.poids) }</td>
        <td>{item.designation}</td>
        <td>{item.regime}</td>
        <td>{ nombre(item.valeur) }</td>
        <td>{nombre(item.total) }</td>
  
        <td
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
          }}
        >
          <Link to={`/transit/ddu/${item.reference}`}>
            {" "}
            <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
          </Link>
          /
          <Link to={`/transit/ddu/${item.reference}/destroy`} onClick={(e) => {}}>
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
    bodyData={declaration}
    renderBody={renderBody}
  /></div>
  )
}

export default TableDdu