import React from "react";
import TreeView, { expand } from "../../components/treeview/TreeView";
import {
  annee,
  date,
  mois,
  nombre,
  prefixe,
  referenceDdu,
} from "../../helpers/render";
import { getTotal } from "../../helpers/fonctions";

const TreeViewDossier = ({ dossier }) => {
  console.log("====================================");
  console.log(dossier);
  console.log("====================================");
  const renderTreeView = (
    <ul>
      {/* t1 */}
      {dossier.t1 && (
        <li>
          <span className="caret" onClick={expand}>
            Transit
          </span>
          {/* listing Transit */}
          <ul className="nested ">
            <li className="caret">
              <table>
                <thead>
                  <tr>
                    <th>Reférences</th>
                    <th>Sommier</th>
                    <th>Frontière</th>
                    <th>Destination</th>
                    <th>Quantité</th>
                    <th>Poids</th>
                    <th>Position</th>
                    <th>Id. Transport</th>
                  </tr>
                </thead>

                <tbody>
                  {dossier.t1.map((item, index) => (
                    <tr key={index}>
                      <td>
                        {item.numero
                          ? `T${item.numero}-${date(item.date)}`
                          : "-"}
                      </td>
                      <td>
                        {item.sommier
                          ? `${item.sommier}/${annee(item.date)}`
                          : "-"}
                      </td>
                      <td>{item.burEntree ? `${item.burEntree}` : "-"}</td>
                      <td>{item.burSortie ? `${item.burSortie}` : "-"}</td>
                      <td>
                        {item.quantite ? `${nombre(item.quantite)}` : "-"}
                      </td>
                      <td>{item.poids ? `${nombre(item.poids)}` : "-"}</td>
                      <td>
                        {item.position ? `${nombre(item.position)}` : "-"}
                      </td>

                      <td>{item.transport ? item.transport : "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </li>
          </ul>
        </li>
      )}
      {/* Minutes */}
      {dossier.minute && (
        <li>
          <span className="caret" onClick={expand}>
            Minutes
          </span>
          {/* listing Transit */}
          <ul className="nested ">
            <li className="caret">
              <table>
                <thead>
                  <tr>
                    <th>Reférences</th>

                    <th>Quantité</th>
                    <th>Poids</th>
                    <th>Position</th>
                    <th>Désignation</th>
                    <th>Fob</th>
                    <th>Fret</th>
                    <th>Ass.</th>
                    <th>Aut.</th>
                  </tr>
                </thead>

                <tbody>
                  {dossier.minute.map((item, index) => (
                    <tr key={index}>
                      <td>
                        {item.repertoire
                          ? `T${item.t1} Rep (${item.repertoire}-${date(
                              item.createAt
                            )})`
                          : "-"}
                      </td>

                      <td>{item.nombre ? `${nombre(item.nombre)}` : "-"}</td>
                      <td>{item.poids ? `${nombre(item.poids)}` : "-"}</td>
                      <td>
                        {item.position ? `${nombre(item.position)}` : "-"}
                      </td>

                      <td>{item.designation ? `${item.designation}` : "-"}</td>
                      <td>{item.fob ? `${nombre(item.fob)}` : "-"}</td>
                      <td>{item.fret ? `${nombre(item.fret)}` : "-"}</td>
                      <td>
                        {item.assurance ? `${nombre(item.assurance)}` : "-"}
                      </td>
                      <td>{item.af ? `${nombre(item.af)}` : "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </li>
          </ul>
        </li>
      )}
      {/* Déclarations */}
      {dossier.declaration && (
        <li>
          <span className="caret" onClick={expand}>
            Déclarations
          </span>
          {/* listing Transit */}
          <ul className="nested ">
            <li className="caret">
              <table>
                <thead>
                  <tr>
                    <th>Reférences</th>

                    <th>Quantité</th>
                    <th>Poids</th>
                    <th>Position</th>
                    <th>Désignation</th>
                    <th>Valeur</th>
                    <th>Taxe</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>
                  {dossier.declaration.map((item, index) => (
                    <tr key={index}>
                      <td>
                        {item.repertoire
                          ? `  ${referenceDdu(item.regime, item.reference)}-T${
                              item.t1
                            } Rep (${item.repertoire}-${date(item.createAt)})`
                          : "-"}
                      </td>

                      <td>{item.nombre ? `${nombre(item.nombre)}` : "-"}</td>
                      <td>{item.poids ? `${nombre(item.poids)}` : "-"}</td>
                      <td>
                        {item.position ? `${nombre(item.position)}` : "-"}
                      </td>

                      <td>{item.designation ? `${item.designation}` : "-"}</td>
                      <td>{item.valeur ? `${nombre(item.valeur)}` : "-"}</td>
                      <td>{item.taxes ? `${nombre(item.taxes)}` : "-"}</td>
                      <td>{item.total ? `${nombre(item.total)}` : "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </li>
          </ul>
        </li>
      )}
      {/* Prestations */}
      {dossier.prestations && (
        <li>
          <span className="caret" onClick={expand}>
            Prestations (Débours & Interventions HT)
          </span>
          {/* listing Transit */}
          <ul className="nested ">
            <li className="caret">
              <table>
                <thead>
                  <tr>
                    <th>Rubriques</th>

                    <th>Libellés</th>
                    <th>Quantité</th>
                    <th>Unité</th>
                    <th>Montant</th>
                  </tr>
                </thead>

                <tbody>
                  {dossier.prestations.map((item, index) => (
                    <tr key={index}>
                      <td>{item.rubrique ? item.rubrique : "-"}</td>
                      <td>{item.libelle ? item.libelle : "-"}</td>

                      <td>
                        {item.quantite ? `${nombre(item.quantite)}` : "-"}
                      </td>
                      <td>{item.unite ? `${nombre(item.unite)}` : "U"}</td>
                      <td>{item.montant ? `${nombre(item.montant)}` : "U"}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={4}>Total</td>
                    <td>{nombre(getTotal(dossier.prestations, "montant"))}</td>
                  </tr>
                </tfoot>
              </table>
            </li>
          </ul>
        </li>
      )}
    </ul>
  );
  return <TreeView dossier={dossier}>{renderTreeView}</TreeView>;
};

export default TreeViewDossier;
