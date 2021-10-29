import React from "react";
import {Line} from "react-chartjs-2";

export default function Fig(props) {
  const data = {
    labels: Object.keys(props.data),
    datasets: [
      {
        label: "Weight",
        data: Object.values(props.data),
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(212,6,6,0.2)",
        borderColor: "rgb(0,200,0)",
      },
    ],
  };

  // const options = {
  //   scales: {
  //     xAxes: [
  //       {
  //         scaleLabel: {
  //           display: true,
  //           labelString: "日付",
  //           fontColor: "赤色",
  //           fontSize: 25,
  //         },
  //         ticks: {
  //           fontSize: 25,
  //         },
  //       },
  //     ],

  //     yAxes: [
  //       {
  //         scaleLabel: {
  //           display: true,
  //           labelString: "体重",
  //           fontColor: "青色",
  //           fontSize: 25,
  //         },
  //         ticks: {
  //           fontSize: 25,
  //         },
  //       },
  //     ],
  //   },
  // };

  let height = "";
  window.screen.width <= 450 ? (height = 180) : (height = 80);
  return <Line data={data} height={height} />;
}

// height={80}
// options={options}
