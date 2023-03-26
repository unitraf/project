import {
    mdiDotsVertical,
    mdiFileOutline,
    mdiPlus,
    mdiSquareEditOutline,
    mdiTrashCanOutline,
  } from "@mdi/js";
  import Icon from "@mdi/react";
  import React from "react";
  import { useSelector } from "react-redux";
  import { Link } from "react-router-dom";
  import Menu from "../../components/menu/Menu";
  import Table from "../../components/table/Table";
  import "./ddu.css";
import { date, nombre } from "../../helpers/render";
  const link = [
    {
      icon: mdiPlus,
      content: "Nouveau",
      route: "newDdu",
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
  const Ddu = () => {
    const state = useSelector((state) => state);
    const { dossiers } = state;
    const declaration = dossiers
      .map((dossier) =>
        dossier.declaration.map((declaration, index) => {
          return {
            ...declaration,
            index,
          };
        })
      )
      .flat(Infinity);

    let headData = ["Bureau", "Reférence", "Date", "N° Sommier", "Nombre", "Type","Poids","Désignation","Régime", "Valeur", "Total", "Action"];
    const renderHead = (item, index) => <th key={index}>{item}</th>;
  
    const renderBody = (item, index) => (
      <tr key={index} title={`Dossier N° ${item.dossier}`}>
        <td>{item.bureau}</td>
        <td>{item.reference}</td>
        <td>{ date(item.date) }</td>
        <td>{item.sommier}</td>
        <td>{nombre(item.nombre) }</td>
        <td>{item.type}</td>
        <td>{nombre(item.poids) }</td>
        <td>{item.designation}</td>
        <td>{item.regime}</td>
        <td>{ nombre(item.valeur) }</td>
        <td>{nombre(item.total) }</td>
  
        <td
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
          }}
        >
          <Link to={`/transit/ddu/${item.reference}/bl`}>
            {" "}
            <Icon path={mdiFileOutline} size={0.6} title="Bordereau de Livraison" />{" "}
          </Link>
          /
          <Link to={`/transit/ddu/${item.reference}`}>
            {" "}
            <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
          </Link>
          /
          <Link to={`/transit/ddu/${item.reference}/destroy`} onClick={(e) => {}}>
            {" "}
            <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" />{" "}
          </Link>
        </td>
      </tr>
    );
  
    return (
      <div className="clients">
        <div className="header-title">
         Déclarations en Douane (Spécifications & Détails/bureau)
          <span style={{ position: "fixed", right: 10 }}>
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
          </span>
        </div>
  
        <Table
          headData={headData}
          renderHead={renderHead}
          bodyData={declaration}
          renderBody={renderBody}
        />
      </div>
    );
  };
  export default Ddu;
  