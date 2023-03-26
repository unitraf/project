import React, { useRef, useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import "./listing.css";

const clickOutsideRef = (content_ref, toggle_ref) => {
  // console.log(content_ref.current);
  document.addEventListener("mousedown", (e) => {
    //user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("actif");
    } else {
      //user click outside and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("actif");
        // document.getElementsByClassName('layout')[0].classList.remove("sidebar-width")
      }
    }
  });
};

const Listing = (props) => {
  const menu_toggle_el = useRef(null);
  const menu_content_el = useRef(null);

  clickOutsideRef(menu_content_el, menu_toggle_el);

 

  return (
    <div className="listing" style={{ marginTop: 4 }}>
      <Icon
        ref={menu_toggle_el}
        style={{
          borderRadius: "5px",
          marginLeft: -25,
        }}
        path={props.icon ? props.icon : mdiChevronDown}
        size={0.8}
      />
      <div
        ref={menu_content_el}
        className="listing-item "
        // onClick={() => setDisplay(!display)}
      >
        {props.content &&
          props.content.map((item, index) => props.render(item, index))}
      </div>
    </div>
  );
};

export default Listing;
