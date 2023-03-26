import { mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "../../components/table/Table";
import { date, periode } from "../../helpers/render";
import { getSeries, groupBy } from "../../helpers/fonctions";
import Chart from "react-apexcharts";
import "./transit.css";
import Onglets from "../../components/onglet/Onglets";
let headData = [
  "Date",
  "N° Ordre",
  "Client",
  "Description",
  "Poids",
  "Document",
  "Départ",
  "Arrivée",
  "Action",
];


const periodes = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.date ? date(item.date) : "-"}</td>
    <td>{`380/${item.numero}`}</td>
    <td>{item.client.nom}</td>
    <td>{item.description}</td>
    <td>{item.poids}</td>
    <td>{item.document}</td>
    <td>{item.depart ? date(item.depart) : "-"}</td>
    <td>{item.arrivee ? date(item.arrivee) : "-"}</td>

    <td
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
    >
      <Link to={`/transit/dossiers`}>
        {" "}
        <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
      </Link>
      /
      <Link to={`/clients/${item.nif}/destroy`} onClick={(e) => {}}>
        {" "}
        <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" />{" "}
      </Link>
    </td>
  </tr>
);


const Transit = () => {
  const state = useSelector((state) => state);
  const { dossiers } = state;
 const status = groupBy(dossiers, "status")
console.log(status);
  const group_t1 = dossiers
    .map((dossier) =>
      dossier.t1.map((t1) => {
        return { mois: periode(t1.date) };
      })
    )
    .flat(Infinity);
  const group_bl = dossiers
    .map((dossier) => (dossier.bl ? dossier.bl : []))
    .flat(Infinity)
    .map((bl) => {
      return { mois: periode(bl.date) };
    });
  const group_douane = dossiers
    .map((dossier) =>
      dossier.declaration.map((decl) => {
        return { mois: periode(decl.date) };
      })
    )
    .flat(Infinity);
  const group_dossier = dossiers.map((dossier, index) => {
    return { ...dossier, mois: periode(dossier.date) };
  });
  const freq_dossier = groupBy(group_dossier, "mois");
  const freq_t1 = groupBy(group_t1, "mois");
  const freq_douane = groupBy(group_douane, "mois");
  const freq_bl = groupBy(group_bl, "mois");

  const [chart] = useState({
    options: {
      xaxis: {
        categories: periodes,
      },
    },
    series: [
      {
        name: "Ouvert",
        data: getSeries(freq_dossier),
      },
      {
        name: "Transit",
        data: getSeries(freq_t1),
      },
      {
        name: "Douane",
        data: getSeries(freq_douane),
      },
      {
        name: "Livré",
        data: getSeries(freq_bl),
      },
    ],
  });

  // Chart
  console.log("group_t1", group_bl);
  return (
    <div>
      <div className="header-title">Suivis des expédition (Status)</div>
      <Chart
        options={chart.options}
        series={chart.series}
        type="area"
        width="100%"
        height={200}
      />
<Onglets
          // icon={ongletMenuIcon}
          // menu={ongletOptions}
          // active={setStatus}
          ongletHeaders={Object.keys(status)}
          ongletBody={ Object.keys(status).map( (item, index)=> <Table keys={index}
            headData={headData}
            renderHead={renderHead}
            bodyData={status[item]}
            renderBody={renderBody}
          />)}
        />

     
    </div>
  );
};

export default Transit;
