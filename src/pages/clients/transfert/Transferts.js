import React from 'react'
import Title from '../../../components/title/Title'
import Icon from '@mdi/react';
import { mdiFileDocumentMultipleOutline } from '@mdi/js';
import Table from '../../../components/table/Table';
let headData = ["Référence","Date", "Compte", "Opération", "Débit", "Crédit",  "Action"];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const Transferts = () => {

  const renderTransfert = (
    <div>
      <div className="dossier col-12">
        {/* Listing */}
        <fieldset className="card entite col-12 ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Icon
              path={mdiFileDocumentMultipleOutline}
              size={0.8}
              color={"var(--main-color)"}
            />
            <span className="i-legend">Pièces</span>{" "}
          </legend>
          <div className="pr-row"></div>
          <Table
            headData={headData}
            renderHead={renderHead}
            // bodyData={clients}
            // renderBody={renderBody}
          />
        </fieldset>
      </div>
    </div>
  );
  return (
 
    <div className="">
   
    <div className="card">
      <Title title="Données (comptabilité)" />
    </div>
    {renderTransfert}

  </div>
  )
}

export default Transferts