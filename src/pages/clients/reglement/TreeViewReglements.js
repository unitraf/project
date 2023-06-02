import React from "react";
import TreeView, { expand } from "../../../components/treeview/TreeView";
import { annee, date, mois, nombre, prefixe } from "../../../helpers/render";
import { useDispatch } from "react-redux";
import { getTotal } from "../../../helpers/fonctions";
import { updateDossier } from "../../../redux/dossier/action";
import Icon from "@mdi/react";
import { mdiCancel, mdiDelete } from "@mdi/js";
import { v4 as uuid } from "uuid";

const TreeViewReglements = ({
  dossiers,
  reglement,
 
}) => {
  const dispatch = useDispatch();
console.log(getTotal(dossiers.map(dossier=>dossier.facture.paiements || []).flat(Infinity),'montant'));
  // calculs

 
  const totalPaiement = getTotal(dossiers.map(dossier=>dossier.facture.paiements || []).flat(Infinity),'montant')
  
  const restant = reglement.montant?reglement.montant-totalPaiement:0
  
  
  
  console.log("montant", reglement.montant);
  console.log("restant", restant);
  //

  // -----------------
  const handleCheck = (e, dossier) => {
    const { reference, date } = reglement;

    let moyen = reglement.paiement;
    let montant =
      restant >= dossier.facture.net.replace(/\s/g, "")
        ? dossier.facture.net.replace(/\s/g, "")
        : restant;

    let paiement = { reference, date, montant, moyen };
    if (e.target.checked) {
      dispatch(
        // Prevoir la mis à jour du statut du dossier terminer
        updateDossier({
          ...dossier,
          facture: {
            ...dossier.facture,
            paiements: [...(dossier.facture.paiements || []), paiement],
          },
        })
      );
     
    } else {
   
      let paiements = dossier.facture.paiements.filter( paiement => paiement.reference !== reglement.reference
      );
      console.log(paiements);
      dispatch(
        updateDossier({
          ...dossier,
          facture: {
            ...dossier.facture,
            paiements,
          },
        })
      );
    }
  };

  const renderTreeView = (
    <ul>
      <li>
        <span className="caret" onClick={expand}>
          Dossiers - Factures -Paiements
        </span>
        {/* listing dossiers */}
        <ul className="nested ">
          {dossiers.map((dossier, index) => (
            <li key={index}>
              {/* dossier details */}
              <span className="caret col-4" onClick={expand}>{`${prefixe(
                dossier.date,
                dossier.numero
              )} - ${date(dossier.date)}`}</span>
              {/*nested dossier item  */}
              <ul className="nested ">
                {/* listing Facture */}
                <li>
                  <span className="caret" onClick={expand}>
                    Facture
                  </span>

                  <ul className="nested ">
                    <li className="col-10">
                      <table>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Type</th>
                            <th>Reférence</th>
                            <th>Date</th>
                            <th>Echéance</th>
                            <th>Net à payer</th>
                            <th>Acompte</th>
                            <th>Solde dû</th>

                            <th>Montant affecté</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr key={index}>
                            <td>
                              <input
                                style={{ marginTop: 3 }}
                                type="checkbox"
                                disabled={restant <= 0}
                                name={reglement.reference}
                                onChange={(e) => handleCheck(e, dossier)}
                              />
                            </td>
                            <td>Facture</td>
                            <td>{`${dossier.facture.numero}\u25b9${annee(
                              dossier.facture.date
                            )}  `}</td>
                            <td>{date(dossier.facture.date)}</td>
                            <td>{date(dossier.facture.echeance)}</td>
                            <td>{dossier.facture.net}</td>
                            <td>Acompte</td>
                            <td>
                              {dossier.facture.paiements
                                ? getTotal(
                                    dossier.facture.paiements,
                                    "montant"
                                  ) -
                                  parseInt(
                                    dossier.facture.net.replace(/\s/g, "")
                                  )
                                : dossier.facture.net}
                            </td>

                            <td>
                              {dossier.facture.paiements &&
                              parseInt(dossier.facture.net.replace(/\s/g, "")) -
                                getTotal(
                                  dossier.facture.paiements,
                                  "montant"
                                ) ===
                                0
                                ? parseInt(
                                    dossier.facture.net.replace(/\s/g, "")
                                  )
                                : "-"}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    {/* Paiements */}
                    <li>
                      <span className="caret" onClick={expand}>
                        Paiements
                      </span>

                      <ul className="nested ">
                        <li className="col-8">
                          <table>
                            <thead>
                              <tr>
                                <th>Reférence</th>
                                <th>Date</th>
                                <th>Moyen</th>
                                <th>Montant</th>

                                <th>Statut</th>
                                <th>...</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* dossier.facture.paiements&& */}
                              {dossier.facture.paiements &&
                                dossier.facture.paiements.map((item, index) => (
                                  <tr key={index}>
                                    <td>{item.reference}</td>
                                    <td>{date(item.date)}</td>
                                    <td>{item.moyen}</td>
                                    <td>
                                      {item.montant
                                        ? nombre(item.montant)
                                        : "-"}
                                    </td>

                                    <td>
                                      {item.status ? nombre(item.status) : "-"}
                                    </td>
                                    <td>
                                      <Icon
                                        path={mdiDelete}
                                        size={0.5}
                                        color={"red"}
                                        onClick={() =>
                                          console.log(item, dossier)
                                        }
                                      />
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>{" "}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
  return <TreeView dossiers={dossiers}>{renderTreeView}</TreeView>;
};

export default TreeViewReglements;
