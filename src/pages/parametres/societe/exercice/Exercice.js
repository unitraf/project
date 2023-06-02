import {
  mdiCalendar,
  mdiFilterCheckOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import Menu, { clickOnItem } from "../../../../components/menu/Menu";
import Table from "../../../../components/table/Table";
import { useDispatch } from "react-redux";
import { updateExercice } from "../../../../redux/societe/action";
import { annee } from "../../../../helpers/render";
import SnackBar, { displaySnack } from "../../../../components/snackbar/SnackBar";



let headData = ["Courant", "Actuel"];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const Exercice = ({ exercice }) => {

  const dispatch = useDispatch();

  const linkExercice = ["2020","2021","2022","2023" ];

  const renderLink = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        displaySnack("Exercice courant mis à jour")
        dispatch(updateExercice({actuel:annee(new Date()), courant:item, list:linkExercice}))
        clickOnItem()
      }}
    >
      <Icon path={mdiCalendar} size={0.6} color="var(--main-color)" />
      <span>{item}</span>
    </div>
  );
  const renderReglement = (item, index) => (
    <tr key={index}>
      
     
      <td>{item.courant}</td>
      <td>{item.actuel}</td>
      
    </tr>
  );
  return (
    <>
    <fieldset className="card entite col-2 ">
      <legend
        className="card legend"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        {" "}
        <span>Exercices</span>{" "}
        <span>
          <Menu
            icon={mdiFilterCheckOutline}
            size={0.6}
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              marginTop: 5,
              right: -5,
            }}
            content={linkExercice}
      
            render={renderLink}
          />
        </span>
      </legend>
      <div className="pr-row">
        <Table
          headData={headData}
          renderHead={renderHead}
          bodyData={exercice}
          renderBody={renderReglement}
        />
      </div>
    </fieldset>
    <SnackBar/>
    </>
  );
};

export default Exercice;
