import React from "react";
import { getTotal, groupBy } from "../../helpers/fonctions";
import { nombre } from "../../helpers/render";
import "./facturation.css";
import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";
import { useLocation } from "react-router-dom";
const DetailsTable = (props) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const { dossier, setDossier } = props;
  // console.log(dossier);
  // console.log(getTotal(dossier.prestations, "montant"));
  const prestations =
    dossier && groupBy([...(dossier.prestations || [])], "rubrique");
  const listDebours = dossier && prestations["débours"];
  const listInterv = dossier && prestations["interventions"];
  const debours = listDebours ? nombre(getTotal(listDebours, "montant")) : "";
  const interventions = listInterv
    ? nombre(getTotal(listInterv, "montant"))
    : "";

  const ht =
    listDebours || listInterv
      ? nombre(getTotal(dossier.prestations, "montant"))
      : "";
  const tva =
    listDebours || listInterv
      ? nombre(getTotal(dossier.prestations, "taxe"))
      : "";
  const ttc =
    listDebours || listInterv
      ? nombre(
          getTotal(dossier.prestations, "montant") +
            getTotal(dossier.prestations, "taxe")
        )
      : "";
  return (
    <div
      className="col-12"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <table className="table details-table" style={{ marginBottom: 20 }}>
        <thead>
          <tr>
            <th className="col-2">Rubrique</th>
            <th className="col-3">Désignation</th>
            <th className="col-1">Qté</th>
            <th className="col-2">Prix Unit.</th>
            <th className="col-2">Taxe</th>
            <th className="col-2">Montant</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: 12 }}>
          {/* Deb */}
          <tr className="col-12">
            <td className="col-2 rubrique">Débours</td>
          </tr>
          {listDebours &&
            listDebours.map((item, index) => (
              <tr key={index} className="col-12" style={{}}>
                <td className="col-2" style={{ border: 0, boxShadow: "none" }}>
                  {pathname !== "/facturation/factures/newFacture" && (
                    <span
                      className="span-del"
                      onClick={() => {
                        let update = dossier.prestations.filter(
                          (presta) => presta.code !== item.code
                        );
                        setDossier({ ...dossier, prestations: update });
                        console.log(dossier, item, update);
                      }}
                    >
                      <Icon
                        path={mdiDelete}
                        size={0.6}
                        title={`Retirer ${item.libelle}`}
                      />
                    </span>
                  )}
                </td>
                <td
                  className="col-3"
                  style={{ textAlign: "left", paddingLeft: 10 }}
                >
                  {item.libelle}
                </td>
                <td className="col-1">{item.quantite}</td>
                <td
                  className="col-2"
                  style={{ textAlign: "right", paddingRight: 10 }}
                >
                  {nombre(item.valeur)}
                </td>
                <td
                  className="col-2"
                  style={{ textAlign: "right", paddingRight: 10 }}
                >
                  {item.taxe ? nombre(item.taxe) : ""}
                </td>
                <td
                  className="col-2"
                  style={{ textAlign: "right", paddingRight: 10 }}
                >
                  {item.montant && nombre(item.montant)}
                </td>
              </tr>
            ))}
          <tr className="col-12">
            <td className="col-2 rubrique">Interventions</td>
          </tr>
          {/* Intervention */}
          {listInterv &&
            listInterv.map((item, index) => (
              <tr key={index} className="col-12" style={{}}>
                <td className="col-2" style={{ border: 0, boxShadow: "none" }}>
                  {pathname !== "/facturation/factures/newFacture" && (
                    <span
                      className="span-del"
                      onClick={() => {
                        let update = dossier.prestations.filter(
                          (presta) => presta.code !== item.code
                        );
                        setDossier({ ...dossier, prestations: update });
                        console.log(dossier, item, update);
                      }}
                    >
                      <Icon
                        path={mdiDelete}
                        size={0.6}
                        title={`Retirer ${item.libelle}`}
                      />
                    </span>
                  )}
                </td>
                <td
                  className="col-3"
                  style={{ textAlign: "left", paddingLeft: 10 }}
                >
                  {item.libelle}
                </td>
                <td className="col-1">{item.quantite}</td>
                <td
                  className="col-2"
                  style={{ textAlign: "right", paddingRight: 10 }}
                >
                  {nombre(item.valeur)}
                </td>
                <td
                  className="col-2"
                  style={{ textAlign: "right", paddingRight: 10 }}
                >
                  {item.taxe ? nombre(item.taxe) : ""}
                </td>
                <td
                  className="col-2"
                  style={{ textAlign: "right", paddingRight: 10 }}
                >
                  {item.montant && nombre(item.montant)}
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr style={{ marginTop: 15 }}>
            <th colSpan={4}>Total</th>

            <th style={{ textAlign: "right", paddingRight: 10 }}>
              {dossier && nombre(getTotal(dossier.prestations, "taxe"))}
            </th>
            <th style={{ textAlign: "right", paddingRight: 10 }}>
              {dossier && nombre(getTotal(dossier.prestations, "montant"))}
            </th>
          </tr>
        </tfoot>
      </table>
      <div>
        {/* ligne  Totaux */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="text"
              name="debours"
              autoComplete="off"
              defaultValue={debours}
            />
            <label htmlFor={"debours"}>Débours</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="interventions"
              autoComplete="off"
              defaultValue={interventions}
            />
            <label htmlFor={"interventions"}>Interventions</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="ht"
              autoComplete="off"
              value={ht}
              onChange={() => {}}
            />
            <label htmlFor={"ht"}>Ht</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="tva"
              autoComplete="off"
              defaultValue={tva}
            />
            <label htmlFor={"tva"}>Tva</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="net"
              autoComplete="off"
              value={ttc}
              onChange={() => {}}
            />
            <label htmlFor={"net"}>Net</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTable;
