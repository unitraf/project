import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import "./login.css";
import SignIn from "./SignIn";

const Login = () => {
  const location = useLocation().pathname;
  useEffect(() => {
    if (location === "/login") {
      // hide sidebar, footer
      document.getElementsByClassName("side_bar")[0].classList.add("d_none");
      document.getElementsByClassName("bottom")[0].classList.add("d_none");
      // remove margin left
      return document
        .getElementsByClassName("outlet")[0]
        .classList.remove("margin_side_bar");
    }
  }, [location]);

  return (
    <div className="login col-12">
      {/* <Loader /> */}
      <SignIn />
    </div>
  );
};

export default Login;
