import React, { useState } from 'react'
import Chart from 'react-apexcharts'


const Line = () => {
  const [state, setState] = useState(
    {
      options: {
        stroke: {
          curve: 'smooth'
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep','Oct','Nov', 'Déc']
        }
      },
      series: [{
        data: [30, 40, 25, 50, 49, 21, 70, 51]
      },
      {
        data: [10, 2, 85, 55, 49, 41, 60, 51]
      }],
    })
  return (
    
      <Chart options={state.options} series={state.series} type="line" width="500" />
    
  );
}

export default Line