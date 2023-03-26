import React, { useState } from 'react'
import Chart from 'react-apexcharts'


const Area = () => {
  const [state, setState] = useState({
    options: {
      xaxis: {
        categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep','Oct','Nov', 'Déc']
      }
    },
    series: [{
      name: 'series-1',
      data: [30, 40, 25, 50, 49, 21, 70, 51,6]
    }, {
      name: 'series-2',
      data: [23, 12, 54, 61, 32, 56, 81, 19]
    }, {
      name: 'series-3',
      data: [23, 12, 54, 61, 32, 56, 81, 19]
    }]
    ,
  })
  return (
    
      <Chart options={state.options} series={state.series} type="area" width="500" />
    
  );
}

export default Area