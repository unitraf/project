import { mdiChartBoxOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

import { useLocation } from "react-router-dom";
import Area from "../../components/apex/Area";
import Bar from "../../components/apex/Bar";
import ChartUpdate from "../../components/apex/ChartUpdate";
import Column from "../../components/apex/Column";
import Donut from "../../components/apex/Donut";
import Line from "../../components/apex/Line";
import RadialBar from "../../components/apex/RadialBar";

import "./dashboard.css";
import Title from "../../components/title/Title";
import ChartTransit from "./transit/ChartTransit";
const DashBoard = () => {
  const location = useLocation();

  console.log(location);
  const renderGrapheMenu = (menu) => (
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
            path={mdiChartBoxOutline}
            size={0.8}
            color={"var(--main-color)"}
          />
          <span className="i-legend">{` ${menu}`}</span>{" "}
        </legend>
        <div className="pr-row"></div>
        ...............
      </fieldset>
    </div>
  );

  const renderActivites = (
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
            path={mdiChartBoxOutline}
            size={0.8}
            color={"var(--main-color)"}
          />
          <span className="i-legend">Activités </span>{" "}
        </legend>
        <div className="pr-row"></div>
        Notification Log...................
      </fieldset>
    </div>
  );
  return (
    <>
      <div className="dashboard card " style={{ position: "relative" }}>
        <div className="card">
          <Title title="Tableau de bord " />
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              marginTop: 10,
              position: "sticky",
              top: 30,
              backgroundColor: "white",
              zIndex: 300,
            }}
          >
            <ChartTransit />
          </div>

          <div style={{ display: "flex" }}>
            {renderGrapheMenu("Client")}
            {renderGrapheMenu("Transit")}
            {renderGrapheMenu("Douane")}
            {renderGrapheMenu("Facturation")}
            {renderGrapheMenu("Comptabilité")}
          </div>
          {/* activites */}

          {renderActivites}
          <div className="card" style={{ marginTop: 10 }}>
            <div className="chart">
              <fieldset>
                <legend>Area</legend>
                <Area />
              </fieldset>
              <fieldset>
                <legend>Line</legend>
                <Line />
              </fieldset>
              <fieldset>
                <legend>RadialBar</legend>
                <RadialBar />
              </fieldset>
              <fieldset>
                <legend>Donut</legend>
                <Donut />
              </fieldset>
              <fieldset>
                <legend>Column</legend>
                <Column />
              </fieldset>
              <fieldset>
                <legend>Bar</legend>
                <Bar />
              </fieldset>
              <fieldset>
                <legend>ChartUpdate</legend>
                <ChartUpdate />
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      
      <div className="card card-top-tab ">autres</div>
    </>
  );
};

export default DashBoard;
