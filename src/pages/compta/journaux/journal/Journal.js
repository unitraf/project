import React from 'react'
import Table from '../../../../components/table/Table';
import Icon from '@mdi/react';
import { mdiFileDocumentMultipleOutline } from '@mdi/js';
let headData = ["#","Date", "Réf. Pièce","N° Compte", "Libéllé des écritures", "Débit", "Crédit",  "Action"];
const renderHead = (item, index) => <th key={index}>{item}</th>;


const Journal = () => {
    const renderJournal = (
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
                <span className="i-legend">Opérations (modelè )</span>{" "}
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
      
        {renderJournal}
    
      </div>
      )
    }
    

export default Journal