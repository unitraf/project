import React, { useState } from 'react'
import Chart from "react-apexcharts";
import { periode } from '../../../helpers/render';
import { getSeries, groupBy } from '../../../helpers/fonctions';
import { useSelector } from 'react-redux';
import Icon from '@mdi/react';
import { mdiChartBoxOutline } from '@mdi/js';

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

const ChartTransit = () => {
  const state = useSelector((state) => state);
  const { dossiers } = state;
  const status = groupBy(dossiers, "status");
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
  return (

    <Chart
    options={chart.options}
    series={chart.series}
    type="area"
    width="100%"
    height={250}
  />
)}

export default ChartTransit