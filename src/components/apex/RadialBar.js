import React, { useState } from 'react'
import Chart from 'react-apexcharts'


const RadialBar = () => {
  const [state, setState] = useState(
    {
      options: {
        labels: ['RadialBar'],
        plotOptions: {
          radialBar: {
              hollow: {
                  size: '70%',
              }
          },
        },
      },
      series: [68],
    })
  return (
    
      <Chart options={state.options} series={state.series} type="radialBar" width="500" />
    
  );
}

export default RadialBar