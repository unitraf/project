import { mdiPlusBox } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form, useLocation, useNavigate } from 'react-router-dom';
import Listing from '../../components/listing/Listing';
import { removeClassName } from '../../helpers/fonctions';
import { addType } from '../../redux/societe/action';
import { type as init } from "./init";

const Type = (props) => {
    const dispatch= useDispatch()
    const [type, setType] = useState(init)
  const reglements = useSelector(state=>state.societe.reglements)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setType({ ...type, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    let type = Object.fromEntries(formData)
        dispatch(addType(type))
    console.log(type);
}
    console.log(type);
    const renderReglements = (item, index) => (
        <div
            className="item"
            key={index}
            onClick={() => {
                console.log(item);
                setType({ ...type, ...item });
            }}
        >
            <span>{item.libelle}</span>
        </div>
    );
    return (
        <div>
            <div className="header-title" style={{ marginBottom: 30 }}>
                Nouveau type (Client)

            </div>
            <Form method="post" id="type-form" onSubmit={handleSubmit}>
                {/* ligne 1 */}
                <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
                    <div className="inputBox col-1">
                        <input
                            type="number"
                            name="code"
                            autoComplete="off"
                            defaultValue={type.code}
                            required
                        />

                        <label htmlFor={"code"}>Code</label>
                    </div>
                    <div className="inputBox col-6">
                        <input
                            type="text"
                            name="designation"
                            autoComplete="off"
                            defaultValue={type.designationlibelle}
                            required
                        />
                        <label htmlFor={"designationlibelle"}>Libellé</label>
                    </div>
                </div>
                {/* ligne 2 */}
                <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
                    <div className="inputBox col-2">
                        <input
                            type="text"
                            name="acompte"
                            autoComplete="off"
                            defaultValue={type.acompte}
                        />

                        <label htmlFor={"acompte"}>% Acompte </label>
                    </div>
                    <div className="inputBox col-2">
                        <input
                            type="text"
                            name="remise"
                            autoComplete="off"
                            defaultValue={type.remise}
                        />

                        <label htmlFor={"remise"}>% Remise</label>
                    </div>
                    <div className="inputBox col-2">
                        <input
                            type="text"
                            name="tva"
                            maxLength={2}
                            autoComplete="off"
                            defaultValue={type.tva}

                        />
                        <label htmlFor={"tva"}>% Tva</label>
                    </div>

                </div>
                {/* ligne 2 */}
                <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
                    <div className="inputBox col-4">
                        <input
                            type="text"
                            name="libelle"
                            autoComplete="off"
                            defaultValue={type.libelle}
                        />

                        <label htmlFor={"libelle"}>Mode de reglément</label>
                        <Listing
                            content={reglements}
                            render={renderReglements}

                        />
                    </div>
                    <div className="inputBox col-3">
                        <input
                            type="text"
                            name="reglement"
                            autoComplete="off"
                            value={type.reglement}
                            onChange={handleChange}
                        />

                        <label htmlFor={"reglement"}>Moy. de paiement</label>
                  
                    </div>


                </div>

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
            </Form></div>
    )
}

export default Type