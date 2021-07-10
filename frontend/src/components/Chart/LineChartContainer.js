import React, { Component, useEffect, useState } from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';

const LineChartContainer = (props) => {
  const [chartData, setChartData]=useState();
  useEffect(()=>{
    setChartData(props.chartData)
  })
  return ( 
    <div className="chart">

      <Line
        data={chartData}
        
      />
    </div>
   );
}
 
export default LineChartContainer;
