import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import "./root.css";
const Root = () => {
  return (
    <div>
      <div className="card top">
        <Header />
      </div>
      
      <div className="root_content">
        <SideBar />
        
        <div className="card col-12 outlet margin_side_bar">
          <Outlet />
        </div>
      </div>
      <div className="card bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
