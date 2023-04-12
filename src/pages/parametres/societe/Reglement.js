import { mdiPlusBox } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, useNavigate, useParams } from "react-router-dom";
import Listing from "../../../components/listing/Listing";
import { removeClassName } from "../../../helpers/fonctions";
import { addReglement, } from "../../../redux/societe/action";
import { reglement as init, paiement } from "./init";
import './societe.css'
const Reglement = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const params = useParams()
    const [reglement, setReglement] = useState(init)

    const handleChange = (e) => {
        setReglement({ ...reglement, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        let dataForm = new FormData(e.target)
        let reglement = Object.fromEntries(dataForm)
        reglement && dispatch(addReglement(reglement)) && navigate(-1)
       
    }

    const renderType = (item, index) => (
        <div
            className="item"
            key={index}
            onClick={() => {
                setReglement({ ...reglement, type: item });
            }}
        >
            <span>{item}</span>
        </div>
    );
    const renderPaiement = (item, index) => (
        <div
            className="item"
            key={index}
            
            onClick={() => {
                setReglement({ ...reglement, paiement: item.libelle });
            }}
        >
            <span >{item.libelle}</span>
        </div>
    );

    return (
        <div>
            <div className="header-title" style={{ marginBottom: 30 }}>
                Nouveau (Mode de reglément)

            </div>

            <Form method="post" id="reglement-form" onSubmit={handleSubmit} >
                {/* ligne 1 */}
                <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
                    <div className="inputBox col-2">
                        <input
                            type="number"
                            name="code"
                            autoComplete="off"
                            value={reglement.code}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor={"code"}>Code</label>
                    </div>
                    <div className="inputBox col-5">
                        <input
                            type="text"
                            name="libelle"
                            autoComplete="off"
                            value={reglement.libelle}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor={"libelle"}>Libellé</label>
                    </div>


                </div>

                <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
                    <div className="inputBox col-2">
                        <input
                            type="text"
                            name="type"
                            autoComplete="off"
                            value={reglement.type}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor={"type"}>Type</label>
                        <Listing
                            content={["Comptant", "Crédit", "Prélevement"]}
                            render={renderType}

                        />
                    </div>
                    <div className="inputBox col-3">
                        <input
                            type="text"
                            name="reglement"
                            autoComplete="off"
                            value={reglement.reglement}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor={"reglement"}>Moy. de reglement</label>
                        <Listing
                            content={paiement}
                            render={renderPaiement}
                        // footer={
                        //   <Icon
                        //     path={mdiPlusBox}
                        //     size={0.8}
                        //     onClick={() =>
                        //      {
                        //         removeClassName("footer-item","actif")
                        //         navigate("/parametre/societe/newReglement",)}
                        //     }
                        //   />}
                        />

                    </div>
                    <div className="inputBox col-2">
                        <input
                            type="text"
                            name="jours"
                            autoComplete="off"
                            value={reglement.jours}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor={"jours"}>Nbr. de jours</label>


                    </div>
                    {/* <Checkbox name="defaut" label="Reglement par défaut" onChange={e=> 
          setReglement({...reglement,[ e.target.name]:e.target.checked })
         } /> */}
                </div>
                {/* Button */}
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
            </Form></div>
    );
};

export default Reglement;
