import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import "./root.css";
const Root = () => {
  const location = useLocation().pathname;
  useEffect(() => {


    // margin
    if (location !== "/login") {
      document.getElementsByClassName("side_bar")[0].classList.remove("d_none");
      document.getElementsByClassName("bottom")[0].classList.remove("d_none");

      return document
        .getElementsByClassName("outlet")[0]
        .classList.add("margin_side_bar");
    }
  }, [location]);

  return (
    <>
      <div>
        <div className="card top">
          <Header />
        </div>

        <div className="root_content">
          <SideBar />

          <div className="col-12 outlet margin_side_bar">
            <Outlet />
          </div>
        </div>

        <div className="card bottom">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Root;
