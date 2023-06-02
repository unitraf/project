import React from "react";
import TreeView, { expand } from "../../../components/treeview/TreeView";
import {
  annee,
  date,
  mois,
  nombre,
  prefixe,
  referenceDdu,
} from "../../../helpers/render";

const TreeViewDossier = ({ declaration }) => {
  const renderTreeView = (
    <ul>
      <li>
        <span className="caret" onClick={expand}>
          Dossiers - T1 - Déclarations
        </span>
        {/* listing dossiers */}
        <ul className="nested ">
          {declaration.map((decl, index) => (
            <li key={index}>
              {/* dossier details et intitulé */}

              <span
                className="caret col-6"
                onClick={expand}
              >{`Dossier transit N° ${prefixe(
                decl.dossier.date,
                decl.dossier.numero
              )} - ${date(decl.dossier.date)} - Rep(${decl.repertoire})`}</span>
              {/*nested dossier item  */}
              <ul className="nested ">
                <li>
                  <span className="caret" onClick={expand}>
                    Déclaration
                  </span>

                  <ul className="nested ">
                    <li className="col-12">
                      <table>
                        <thead>
                          <tr>
                            <th className="col-2">Référence</th>
                            <th className="col-1">Sommier</th>
                            <th className="col-1">T1</th>
                            <th className="col-2">Transport</th>
                            <th className="col-1">Colis</th>

                            <th className="col-1">Poids</th>
                            <th className="col-2">Liquidation</th>

                            <th className="col-1">Valeur</th>
                            <th className="col-1">Droits & taxes</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr key={index}>
                            <td>
                              {decl.reference
                                ? `${referenceDdu(
                                    decl.regime,
                                    decl.reference
                                  )}\u25B9${date(decl.date)}`
                                : "-"}
                            </td>
                            <td>
                              {decl.sommier
                                ? `S${decl.sommier}/${annee(decl.date)}`
                                : "-"}
                            </td>
                            <td>
                              {decl.t1
                                ? `S${decl.t1.numero}/${annee(decl.t1.date)}`
                                : "-"}
                            </td>
                            <td>{decl.t1 ? `S${decl.t1.transport}` : "-"}</td>
                            <td>{decl.nombre ? `${decl.nombre}` : "-"}</td>
                            <td>{decl.poids ? nombre(decl.poids) : "-"}</td>

                            <td>
                              {decl.liquidation
                                ? `L${decl.liquidation}\u25B9${date(
                                    decl.dateLiquidation
                                  )}`
                                : "-"}
                            </td>

                            <td>{decl.valeur ? nombre(decl.valeur) : "-"}</td>
                            <td>{decl.total ? nombre(decl.total) : "-"}</td>
                          </tr>
                        </tbody>
                      </table>{" "}
                    </li>

                    {/* Articles */}

                    <li>
                      <span className="caret" onClick={expand}>
                        Article(s)
                      </span>

                      <ul className="nested ">
                        <li className="col-12">
                          <table>
                            <thead>
                              <tr>
                                <th>Nombre</th>
                                <th>Nature</th>
                                <th>Désignation</th>
                                <th>Position</th>
                                <th>Poids</th>
                                <th>Valeur</th>
                              </tr>
                            </thead>
                            <tbody>
                              {decl.articles.map((article, index) => (
                                <tr key={index}>
                                  <td className="col-1">
                                    {nombre(article.nombre)}
                                  </td>
                                  <td className="col-1">{article.nature}</td>
                                  <td className="col-4">
                                    {article.designation}
                                  </td>
                                  <td className="col-2">{article.position}</td>
                                  <td className="col-2">
                                    {nombre(article.poids)}
                                  </td>
                                  <td className="col-2">
                                    {nombre(article.valeur)}
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
  return <TreeView>{renderTreeView}</TreeView>;
};

export default TreeViewDossier;
