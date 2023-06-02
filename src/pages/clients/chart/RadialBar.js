import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
const RadialBar = ({pourcentage}) => {
  const [chart, setChart] = useState({
    optionsRadial: {
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },

          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -15,
              show: true,
              color: "#888",
              fontSize: "18px",
            },
            value: {
              formatter: function (val) {
                return val;
              },
              color: "#111",
              fontSize: "24px",
              show: true,
              offsetY:0
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#283485"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["%"],
    },
    seriesRadial: [pourcentage*100],
  });
useEffect(() => {
  setChart({...chart, seriesRadial: [pourcentage*100] })
}, [pourcentage])

  console.log(pourcentage);
  return (
    <div className="col-2">
      <Chart
        options={chart.optionsRadial}
        series={chart.seriesRadial}
        type="radialBar"
        width="200"
        height={200}
      />
    </div>
  );
};

export default RadialBar;
