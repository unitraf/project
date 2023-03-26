import React, { useRef } from "react";
import Icon from "@mdi/react";
import "./menu.css";

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

const Menu = (props) => {
  const menu_toggle_el = useRef(null);
  const menu_content_el = useRef(null);
  const view_content_el = useRef(null);
  clickOutsideRef(menu_content_el, menu_toggle_el);
  clickOutsideRef(view_content_el, menu_toggle_el);

  return (
    <div className="menu" style={props.menu&&props.menu} >
      <button
        ref={menu_toggle_el}
        className="menu__toggle"
        style={{ width: props.toggle_width && props.toggle_width }}
      >
        {props.icon && (
          <Icon
            path={props.icon}
            title={props.title ? props.title : ""}
            size={props.size ? props.size : 0.8}
            color={props.color && props.color}
          />
        )}
        {props.badge ? (
          <span className="menu__toggle-badge">{props.badge}</span>
        ) : (
          ""
        )}
        {props.customtoggle ? props.customtoggle() : ""}
      </button>

      <div
        style={props.content && props.style}
        ref={menu_content_el}
        className="menu_content"
      >
        {props.content && props.render
          ? props.content.map((item, index) => props.render(item, index))
          : ""}
        {/* {props.view&&props.view} */}
        {props.renderFooter ? (
          <div className="menu__footer">{props.renderFooter()}</div>
        ) : (
          ""
        )}
      </div>
      <div
        style={props.view && props.style}
        ref={view_content_el}
        className="view_content"
      >
        {props.view && props.view}
      </div>
    </div>
  );
};

export default Menu;
