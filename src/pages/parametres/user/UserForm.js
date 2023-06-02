import React, { useEffect, useState } from "react";
import { Form, useLocation, useNavigate, useParams } from "react-router-dom";
import SnackBar, { displaySnack } from "../../../components/snackbar/SnackBar";
import Listing from "../../../components/listing/Listing";
import { addUser, deleteUser, updateUser } from "../../../redux/user/action";
import {neWLog } from "../../../redux/log/action";
import { user as init } from "./init";
import { useDispatch } from "react-redux";
import Title from "../../../components/title/Title";
import Menu, { clickOnItem } from "../../../components/menu/Menu";
import { mdiAccountLockOpenOutline, mdiFilterCheckOutline } from "@mdi/js";
import Icon from "@mdi/react";
const UserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [user, setUser] = useState(init);
  const ListAcces = [
    "Clients",
    "Facturation",
    "Comptabilité",
    "Paramètres" ];

  const renderLink = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {

        if (!user.privileges.includes(item)) {
          
          setUser({...user, privileges:[...user.privileges, item]})
          clickOnItem()
        }
        
      }}
    >
      <Icon path={mdiAccountLockOpenOutline} size={0.6} color="var(--main-color)" />
      <span>{item}</span>
    </div>
  );
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.updateId) {
      displaySnack("Utilisateur mis à jour");
      user && dispatch(updateUser(user));
    }
    if (params.destroyId) {
      displaySnack("Supression utilisateur");
      user && dispatch(deleteUser(user));
    }

    if (!params.destroyId && !params.updateId) {
      displaySnack("Nouveau utilisateur ajouter");

      user && dispatch(addUser(user));
      dispatch(neWLog({crud:"addUser",db:"user",reference:user}))
    }

    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };
  useEffect(() => {
    location.state && setUser(location.state);
  }, [location.state]);
 
  const renderCivilite = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setUser({ ...user, civilite: item });
      }}
    >
      <span>{item}</span>
    </div>
  );
  const renderStatus = (item, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setUser({ ...user, status: item });
      }}
    >
      <span>{item}</span>
    </div>
  );
  return (
    <>
    <div className="card" >
    <Title  title="Utilisateur (Nouveau)" mb={20}/>
      <Form method="post" id="user-form" onSubmit={handleSubmit}>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
         
          <div className="inputBox col-2">
            <input
              type="text"
              name="prenom"
              autoComplete="off"
              value={user.prenom}
              onChange={handleChange}
              required
            />
            <label htmlFor={"prenom"}>Prénom</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="nom"
              autoComplete="off"
              value={user.nom}
              onChange={handleChange}
              required
            />
            <label htmlFor={"nom"}>Nom</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={user.email}
              onChange={handleChange}
            />

            <label htmlFor={"email"}>Email</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="fonction"
              autoComplete="off"
              value={user.fonction}
              onChange={handleChange}
            />
            <label htmlFor={"fonction"}>Fonction</label>
          </div>
        </div>
        {/* ligne 2 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-2">
            <input
              type="text"
              name="status"
              value={user.status}
              onChange={() => {}}
            />
            <label htmlFor={"status"}>Status</label>
            <Listing content={["Actif", "Inactif"]} render={renderStatus} />
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="privilieges"
              autoComplete="off"
              value={user.privilieges}
              onChange={handleChange}
            />

            <label htmlFor={"privilieges"}>Privilièges</label>
          </div>
          <input
            type="hidden"
            name="password"
            autoComplete="off"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        {/* ligne 3 */}

        
        {/* Buutton */}
        <div>
          <button className="button" type="submit">
            Valider
          </button>

          <button
            className="button"
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Annuler
          </button>
        </div>
      </Form>


      <SnackBar />
    </div>
    <fieldset className="card entite " style={{width:"max-content"}} >
      <legend
        className="card legend"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        {" "}
        <span>Autorisations d'accès</span>{" "}
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
            content={ListAcces}
      
            render={renderLink}
          />
        </span>
      </legend>
      <div className="autorisation">
        {user.privileges.length>0&&user.privileges.map((item, index)=>
        <span key={index} className="acces">{item} <span className="acces-x" onClick={()=>{
         let privileges = user.privileges.filter((item, ind)=>ind !==index)
         setUser({...user, privileges})
        }}  >X</span></span>
        
        )}
            
      </div>
    </fieldset>
    </>
  );
};

export default UserForm;
