import { mdiDotsVertical, mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react'
import { Link } from 'react-router-dom';
import Area from '../../components/apex/Area';
import Bar from '../../components/apex/Bar';
import ChartUpdate from '../../components/apex/ChartUpdate';
import Column from '../../components/apex/Column';
import Donut from '../../components/apex/Donut';
import Line from '../../components/apex/Line';
import RadialBar from '../../components/apex/RadialBar';
import Menu from '../../components/menu/Menu';

import './dashboard.css'
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newClient",
  },
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newClient",
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
const DashBoard = () => {
  return (
    <div className="dashboard">
    <div className="header-title">
      Tableau de bord
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
 <div className='chart' >
 

    <fieldset  >
      <legend>Area</legend>
      <Area />
    </fieldset>
    <fieldset  >
      <legend>Line</legend>
      <Line />
    </fieldset>
    <fieldset  >
      <legend>RadialBar</legend>
      <RadialBar />
    </fieldset>
    <fieldset  >
      <legend>Donut</legend>
      <Donut />
    </fieldset>
    <fieldset  >
      <legend>Column</legend>
      <Column />
    </fieldset>
    <fieldset  >
      <legend>Bar</legend>
      <Bar />
    </fieldset>
    <fieldset  >
      <legend>ChartUpdate</legend>
      <ChartUpdate />
    </fieldset>

 </div>
   
</div>
  )
}

export default DashBoard