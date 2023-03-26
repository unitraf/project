import {
  mdiAccount,
  mdiAccountBadgeOutline,
  mdiCalendarMultiple,
  mdiChevronDown,
  mdiFormatLineWeight,
  mdiMagnify,
  mdiWindowClose,
  mdiWindowMaximize,
  mdiWindowMinimize,
  mdiWindowRestore,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { maximize, minimize, save } from "../../api/actions";
import Menu from "../menu/Menu";
import "./header.css";
const Header = () => {
  const state = useSelector(state=> state)
  const [minMax, setMinMax] = useState(false)
  const content = [
    {
      icon: mdiAccount,
      content: "Profile",
    },
    {
      icon: mdiWindowMinimize,
      content: "Paramètre",
    },
    {
      icon: mdiCalendarMultiple,
      content: "Déconnexion",
    },
  ];
  const userContent = (item, index) => (
    <div className="item" key={index}>
      <Icon path={item.icon} size={0.8} />
      <span>{item.content}</span>
    </div>
  );
  const renderUserToggle = (user) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Icon path={mdiAccountBadgeOutline} size={0.8} />
  
      <div className="user" style={{ display: "flex", alignItems: "center" }}>
        {user}
        <Icon path={mdiChevronDown} size={0.8} />
      </div>
    </div>
  );
  return (
    <div className="header col-12">
      {/* Gauche */}
      <div className="col-4 h_left">
        <Icon
          path={mdiFormatLineWeight}
          title="Menu"
          size={1}
          color="var(--main-color)"
          onClick={() => {

            if (!document.getElementsByClassName("card side_bar d_none")[0]) {
              document
              .getElementsByClassName("outlet margin_side_bar")[0]
              .classList.remove("margin_side_bar");

              return document
                .getElementsByClassName("side_bar")[0]
                .classList.add("d_none");
            }
            if (document.getElementsByClassName("card side_bar d_none")[0]) {
              document
              .getElementsByClassName("outlet")[0]
              .classList.add("margin_side_bar");
              return document
                .getElementsByClassName("card side_bar")[0]
                .classList.remove("d_none");
            }
           
          }}
        />
      </div>
      {/* Centre */}
      <div className="col-4 h_center">
        <input
          type="text"
          className="h_input"
          defaultValue="Unitraf"
          placeholder="Unitraf Search"
        />
        <Icon
          path={mdiMagnify}
          title="Recherche"
          size={0.8}
          color="var(--main-color)"
          rotate={90}
        />
      </div>
    
      {/* droite */}
      <div
        className="h_right col-4"
        style={{ display: "flex", alignItems: "center" }}
      >
        {/* user menu */}
        <Menu
          style={{ display: "flex", marginTop: 5, backgroundColor: "white" }}
          content={content}
          customtoggle={() => renderUserToggle("admin@unitraf.com")}
          render={(item, index) => userContent(item, index)}
        />
        <h2 style={{ fontSize: 20, color: "var(--main-color)" }}>|</h2>
        <span onClick={minimize} >
          <Icon
            path={mdiWindowMinimize}
            title="Reduire"
            size={0.8}
            // color="var(--main-color)"
          />
        </span>

        <span onClick={()=>{
          setMinMax(!minMax)
          maximize()
        }} >
          <Icon
            path={minMax ? mdiWindowMaximize : mdiWindowRestore}
            vertical
            title="Agrandir"
            size={0.8}
            // color="var(--main-color)"
          />
        </span>

        <span onClick={() => save(state)}>
          <Icon
            path={mdiWindowClose}
            title="Fermer"
            size={0.8}
            // color="var(--main-color)"
          />
        </span>
     
      </div>
    </div>
  );
};

export default Header;
