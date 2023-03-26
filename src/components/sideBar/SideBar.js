import React, { Fragment } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { menu } from "./sideBarData";
import "./sideBar.css";
// import logo from "./logo.png";
import Icon from "@mdi/react";

const SideBarItem = ({ item, index }) => {
  const location = useLocation();

  return (
    <>
      {/* mapping root link */}
      <NavLink className="side_bar_item" to={`${item.route}`}>
        {" "}
        <Icon path={item.icon} size={1} />
        <span>{item.name}</span>
      </NavLink>
      {/* mapping root childrens link */}
      {item.childrens.length &&
        item.childrens.map((childs, index) => (
          <Fragment key={index}>
            <NavLink className="side_bar_item" to={`${childs.route}`}>
              {" "}
              <Icon path={childs.icon} size={1} title={childs.name} />
              <span>{childs.name}</span>
            </NavLink>
            {/*mapping element childrens link */}
            {childs.children &&
              childs.children.map((child, index) => 
              {return location.pathname.includes(`/${childs.route}`)&&
                <Link
                  key={index}
                  className={location.pathname.includes(`/${child.route}`)?"side_bar_item_child active":"side_bar_item_child"}
                  to={`${childs.route}/${child.route}`}
                >
                  {" "}
                  <Icon path={child.icon} size={1} title={child.name} />
                  <span>{child.name}</span>
                </Link>}
              )}
          </Fragment>
        ))}
    </>
  );
};

const SideBar = () => {
  return (
    <div className="card side_bar">
      <div>
        {/* <img src={logo} style={{width:60, alignSelf:"center"}}  /> */}
      </div>
      {menu.map((item, index) => (
        <SideBarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default SideBar;
