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

const TreeViewDossier = ({ dossiers }) => {
  const renderTreeView = (
    <ul>
      <li>
        <span className="caret" onClick={expand}>
          Dossiers - Transit - Déclarations - Factures
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
                {/* description */}
                <li className="col-12">
                  <table>
                    <thead>
                      <tr>
                        <th>Colis</th>
                        <th>Description</th>
                        <th>Document</th>
                        <th>Mode</th>
                        <th>Expéditeur</th>
                        <th>Provenance</th>
                        <th>Refs. Bpa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {dossier.nombre
                            ? `${dossier.nombre} ${dossier.type}(s) `
                            : "-"}
                        </td>
                        <td>
                          {dossier.description ? dossier.description : "-"}
                        </td>
                        <td>{dossier.document ? dossier.document : "-"}</td>
                        <td>{dossier.mode ? dossier.mode : "-"}</td>
                        <td>{dossier.expediteur ? dossier.expediteur : "-"}</td>
                        <td>{dossier.provenance ? dossier.provenance : "-"}</td>
                        <td>{dossier.reference ? dossier.reference : "-"}</td>
                      </tr>
                    </tbody>
                  </table>{" "}
                </li>
                {/* list T1 dossier.t1.map */}
                <li>
                  <span className="caret" onClick={expand}>
                    T1(s)
                  </span>

                  <ul className="nested ">
                    <li className="col-12">
                      <table>
                        <thead>
                          <tr>
                            <th>Réfs.</th>
                            <th>Sommier</th>
                            <th>Bureau</th>
                            <th>Quantité</th>
                            <th>Poids</th>
                            <th>Transporteur</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dossier.t1 &&
                            dossier.t1.map((t1, index) => (
                              <tr key={index}>
                                <td>
                                  {t1.numero
                                    ? `${t1.numero}\u25B9${date(t1.date)}`
                                    : "-"}
                                </td>
                                <td>{t1.sommier ? t1.sommier : "-"}</td>
                                <td>{t1.burEntree ? t1.burEntree : "-"}</td>
                                <td>
                                  {t1.quantite ? nombre(t1.quantite) : "-"}
                                </td>
                                <td>{t1.poids ? nombre(t1.poids) : "-"}</td>
                                <td>{t1.transport ? t1.transport : "-"}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>{" "}
                    </li>
                  </ul>
                </li>
                {/* list DDu dossier.ddu.map */}

                <li>
                  <span className="caret" onClick={expand}>
                    Déclaration(s)
                  </span>

                  <ul className="nested ">
                    <li className="col-12">
                      <table>
                        <thead>
                          <tr>
                            <th>Réfs.</th>
                            <th>Régime</th>
                            <th>Bureau</th>
                            <th>Quantité</th>
                            <th>Poids</th>
                            <th>Désignation</th>
                            <th>Valeur</th>
                            <th>Droits</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dossier.declaration &&
                            dossier.declaration.map((decl, index) => (
                              <tr key={index}>
                                <td>
                                  {decl.reference
                                    ? `${referenceDdu(
                                        decl.regime,
                                        decl.reference
                                      )}\u25B9${date(decl.date)}`
                                    : "-"}
                                </td>
                                <td>{decl.regime ? decl.regime : "-"}</td>
                                <td>{decl.bureau ? decl.bureau : "-"}</td>
                                <td>
                                  {decl.quantite ? nombre(decl.quantite) : "-"}
                                </td>
                                <td>{decl.poids ? nombre(decl.poids) : "-"}</td>
                                <td>
                                  {decl.designation ? decl.designation : "-"}
                                </td>
                                <td>
                                  {decl.valeur ? nombre(decl.valeur) : "-"}
                                </td>
                                <td>{decl.total ? nombre(decl.total) : "-"}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>{" "}
                    </li>
                  </ul>
                </li>
                {/* listing Facture */}
                <li>
                  <span className="caret" onClick={expand}>
                    Facture(s)
                  </span>

                  <ul className="nested ">
                    <li className="col-12">
                      <table>
                        <thead>
                          <tr>
                            <th>Réfs.</th>
                            <th>Débours</th>
                            <th>Prestations</th>
                            <th>Val. HT</th>
                            <th>Tva (19%)</th>
                            <th>Net à payer</th>
                            <th>Reglément</th>
                            <th>Statut</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dossier.facture && (
                            <tr>
                              <td>
                                {dossier.facture.numero
                                  ? `${dossier.facture.numero}-${annee(
                                      dossier.facture.date
                                    )}\u25b9${mois(dossier.facture.date)}`
                                  : "-"}
                              </td>
                              <td>
                                {dossier.facture.debours
                                  ? nombre(dossier.facture.debours)
                                  : "-"}
                              </td>
                              <td>
                                {dossier.facture.interventions
                                  ? nombre(dossier.facture.interventions)
                                  : "-"}
                              </td>
                              <td>
                                {dossier.facture.ht
                                  ? nombre(dossier.facture.ht)
                                  : "-"}
                              </td>
                              <td>
                                {dossier.facture.tva
                                  ? nombre(dossier.facture.tva)
                                  : "-"}
                              </td>
                              <td>
                                {dossier.facture.ttc
                                  ? nombre(dossier.facture.ttc)
                                  : "-"}
                              </td>
                              <td>
                                {dossier.facture.reglement
                                  ? dossier.facture.reglement
                                  : "Comptant"}
                              </td>
                              <td>
                                {dossier.facture.status
                                  ? dossier.facture.status
                                  : "-"}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>{" "}
                    </li>
                    {/* Acompte */}
                    <li>
                      <span className="caret" onClick={expand}>
                        Devis
                      </span>

                      <ul className="nested ">
                        <li className="col-12">
                          <table>
                            <thead>
                              <tr>
                                <th>Réfs.</th>
                                <th>Débours</th>
                                <th>Prestations</th>
                                <th>Val. HT</th>
                                <th>Tva (19%)</th>
                                <th>Net à payer</th>
                                <th>Reglément</th>
                                <th>Statut</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* dossier.devis&& */}
                              {dossier.facture && (
                                <tr>
                                  <td>
                                    {dossier.facture.numero
                                      ? `${dossier.facture.numero}-${annee(
                                          dossier.facture.date
                                        )}\u25b9${mois(dossier.facture.date)}`
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.debours
                                      ? nombre(dossier.facture.debours)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.interventions
                                      ? nombre(dossier.facture.interventions)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.ht
                                      ? nombre(dossier.facture.ht)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.tva
                                      ? nombre(dossier.facture.tva)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.ttc
                                      ? nombre(dossier.facture.ttc)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.reglement
                                      ? dossier.facture.reglement
                                      : "Comptant"}
                                  </td>
                                  <td>
                                    {dossier.facture.status
                                      ? dossier.facture.status
                                      : "-"}
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>{" "}
                        </li>
                      </ul>
                    </li>
                    {/* Acompte */}
                    <li>
                      <span className="caret" onClick={expand}>
                        Acompte
                      </span>

                      <ul className="nested ">
                        <li className="col-12">
                          <table>
                            <thead>
                              <tr>
                                <th>Réfs.</th>
                                <th>Débours</th>
                                <th>Prestations</th>
                                <th>Val. HT</th>
                                <th>Tva (19%)</th>
                                <th>Net à payer</th>
                                <th>Reglément</th>
                                <th>Statut</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* dossier.acompte&& */}
                              {dossier.facture && (
                                <tr>
                                  <td>
                                    {dossier.facture.numero
                                      ? `${dossier.facture.numero}-${annee(
                                          dossier.facture.date
                                        )}\u25b9${mois(dossier.facture.date)}`
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.debours
                                      ? nombre(dossier.facture.debours)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.interventions
                                      ? nombre(dossier.facture.interventions)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.ht
                                      ? nombre(dossier.facture.ht)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.tva
                                      ? nombre(dossier.facture.tva)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.ttc
                                      ? nombre(dossier.facture.ttc)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.reglement
                                      ? dossier.facture.reglement
                                      : "Comptant"}
                                  </td>
                                  <td>
                                    {dossier.facture.status
                                      ? dossier.facture.status
                                      : "-"}
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>{" "}
                        </li>
                      </ul>
                    </li>
                    {/* Avoirs */}
                    <li>
                      <span className="caret" onClick={expand}>
                        Avoirs
                      </span>

                      <ul className="nested ">
                        <li className="col-12">
                          <table>
                            <thead>
                              <tr>
                                <th>Réfs.</th>
                                <th>Débours</th>
                                <th>Prestations</th>
                                <th>Val. HT</th>
                                <th>Tva (19%)</th>
                                <th>Net à payer</th>
                                <th>Reglément</th>
                                <th>Statut</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* dossier.avoirs&& */}
                              {dossier.facture && (
                                <tr>
                                  <td>
                                    {dossier.facture.numero
                                      ? `${dossier.facture.numero}-${annee(
                                          dossier.facture.date
                                        )}\u25b9${mois(dossier.facture.date)}`
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.debours
                                      ? nombre(dossier.facture.debours)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.interventions
                                      ? nombre(dossier.facture.interventions)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.ht
                                      ? nombre(dossier.facture.ht)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.tva
                                      ? nombre(dossier.facture.tva)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.ttc
                                      ? nombre(dossier.facture.ttc)
                                      : "-"}
                                  </td>
                                  <td>
                                    {dossier.facture.reglement
                                      ? dossier.facture.reglement
                                      : "Comptant"}
                                  </td>
                                  <td>
                                    {dossier.facture.status
                                      ? dossier.facture.status
                                      : "-"}
                                  </td>
                                </tr>
                              )}
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

export default TreeViewDossier;
