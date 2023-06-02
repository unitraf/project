import { mdiDotsVertical, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { societe as init } from "./init";
import logo from "../../../css/footer-logo.png";
import Menu from "../../../components/menu/Menu";
import "./societe.css";
import InputBox from "../../../components/inputBox/InputBox";
import { Link, useNavigate } from "react-router-dom";
const link = [
    {
        icon: mdiPlus,
        content: "Unitraf",
        route: "update",
    },
    {
        icon: mdiPlus,
        content: "Banque",
        route: "newBanque",
    },
    {
        icon: mdiPlus,
        content: "Reglément",
        route: "newReglement",
    },
    {
        icon: mdiPlus,
        content: "Clientèle",
        route: "/clients/type",
    },
];
const renderLink = (item, index) => (
    <Link to={item.route} key={index}>
        <div className="item">
            <Icon path={item.icon} size={0.8} color="var(--main-color)" />
            <span>{item.content}</span>
        </div>
    </Link>
);
const Carte = (props) => {
    const navigate = useNavigate()
    const {societe }= props
    const renderLink = (item, index) => (
      
            <div className="item" key={index} onClick={()=>navigate(`${item.route}`, {state:societe})} >
                <Icon path={item.icon} size={0.8} color="var(--main-color)" />
                <span>{item.content}</span>
            </div>
      
    );
    return (
        <div className="cartes col-4 ">

            <div className="filtre">
                <img className="imgLogo" src={logo} alt="" height={126} width={126} />
                <div className="btn">
                    <Menu
                        icon={mdiDotsVertical}
                        size={0.8}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "white",
                            marginTop: 5,
                        }}
                        content={link}
                        // customtoggle={() => renderUserToggle("admin****nif@sgs.com")}
                        render={(item, index) => renderLink(item, index)}
                    />
                </div>
            </div>


            {/* infos */}
            <div className="infos">
                {/* ligne 1 */}
                <div style={{ display: "flex", marginTop: 20 }} >
                    <InputBox col={4} label="Nom" defaultValue={("Unitraf").toUpperCase()} />
                    <InputBox col={8} label="N° Agrément" defaultValue={societe.agrement} />

                </div>
                {/* ligne 2 */}
                <div style={{ display: "flex", marginTop: 20 }} >
                    <InputBox col={4} label="Nif" defaultValue={(societe.nif)} />
                    <InputBox col={8} label="Rccm" defaultValue={societe.rccm} />

                </div>
                {/* ligne 3 */}

                <div style={{ display: "flex", marginTop: 20 }} >
                    <InputBox col={4} label="Tél 1" defaultValue={(societe.tel1)} />
                    <InputBox col={4} label="Tél 2" defaultValue={societe.tel2} />
                    <InputBox col={4} label="Fax" defaultValue={societe.fax} />


                </div>
                {/* ligne 4 */}
                <div style={{ display: "flex", marginTop: 20 }} >
                    <InputBox col={3} label="Bp" defaultValue={(societe.bp)} />
                    <InputBox col={9} label="Adresse" defaultValue={`${societe.adresse1} - ${societe.adresse2}`} />


                </div>
                {/* ligne 5 */}
                <div style={{ display: "flex", marginTop: 20 }} >
                    <InputBox col={12} label="Email" defaultValue={("societe.email")} />

                </div>
                {/* ligne 6 */}
                <div style={{ display: "flex", marginTop: 20 }} >
                    <InputBox col={4} label="Banque" defaultValue={societe.banque} />
                    <InputBox col={8} label="Rib" defaultValue={societe.rib} />

                </div>
            </div>
        </div>
    );
};

export default Carte;
