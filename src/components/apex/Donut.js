import React, { useState } from 'react'
import Chart from 'react-apexcharts'


const Donut = () => {
  const [state, setState] = useState(
    {
      options: {
        labels: ['A', 'B', 'C', 'D', 'E']
      },
      series: [44, 55, 41, 17, 15]

    })
  return (
    
      <Chart options={state.options} series={state.series} type="donut" width="500" />
    
  );
}

export default Donut