import React, { useState } from 'react'
import Chart from 'react-apexcharts'


const Bar = () => {
  const [state, setState] = useState(
    {
      options: {
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep','Oct','Nov', 'Déc']
        }
      },
      series: [{
        data: [30, 40, 25, 50, 49, 21, 70, 51]
      }],
    })
  return (
    
      <Chart options={state.options} series={state.series} type="bar" width="500" />
    
  );
}

export default Bar