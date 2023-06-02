import React from 'react'
import Title from '../../../components/title/Title'
import Icon from '@mdi/react';
import { mdiFileDocumentMultipleOutline } from '@mdi/js';
import Table from '../../../components/table/Table';
let headData = ["Facture","Dossier", "Echéance", "Montant",  "Action"];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const Relances = () => {

  const renderImpayees = (
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
            <span className="i-legend">Impayée(s)</span>{" "}
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
  const renderReliquats = (
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
            <span className="i-legend">Réliquat(s)</span>{" "}
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
      <Title title="Factures dûe(s)" />
    </div>
    {renderImpayees}
    {renderReliquats}

  </div>
  )
}

export default Relances