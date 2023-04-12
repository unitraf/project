import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css";

import logo from "./logo.png";
const SignIn = () => {
 const navigate = useNavigate()
  const users = useSelector((state) => state.users);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let auth = Object.fromEntries(data);
    console.log(Object.fromEntries(data));
    let user = users.filter(
      (user) => user.email === auth.email && user.password === auth.password
    )[0];

   
    navigate("/", {state:user}, {replace:true})
  };

  return (
    <form className="col-4 signin" onSubmit={handleSubmit}>
      <div className="col-12 logo">
        <img src={logo} width={50} />
      </div>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "45px 15px 0px 15px",
        }}
      >
        <div className="inputBox input col-12">
          <input type="email" name="email" defaultValue={""} required />
          <label htmlFor={"email"}>Identifiant</label>
        </div>
        <div className="inputBox input col-12">
          <input type="password" name="password" defaultValue={""} required />
          <label htmlFor={"password"}>Mot de passe</label>
        </div>
      </div>

      <div className="" style={{ paddingInline: 15, marginTop: -10 }}>
        <button className="button col-12" type="submit">
          Connexion
        </button>
      </div>
    </form>
  );
};

export default SignIn;
