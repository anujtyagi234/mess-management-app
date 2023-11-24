import React from 'react';
import './StudentR.css';
import Chart from 'react-apexcharts';

function CustomerR() {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 80, 10, 50, 10, 350, 150],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };
  return (
    <div className='Reviews'>
      <h2 className='sr'style={{fontFamily:"Agbalumo",}}>Student Review</h2>
      <Chart  style={{fontFamily:"Agbalumo"}} series={data.series} options={data.options} type='area' className='ChartR'/>
    </div>
  );
}

export default CustomerR;
