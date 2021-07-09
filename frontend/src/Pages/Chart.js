import React, { Component, useState } from 'react';
import LineChartContainer from "../components/Chart/LineChartContainer";


const Chart = () => {
    const [chartData, setChartData] = useState({
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [
            {
                label: 'Population',
                data: [
                    617594,
                    181045,
                    153060,
                    106519,
                    105162,
                    95072
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)'
                ]
            }
        ]
    })
    return (
        <div className="App">
            <div className="App-header">
                <h2>Chart</h2>
            </div>
            <LineChartContainer chartData={chartData} location="Massachusetts" legendPosition="bottom" />
        </div>
      );
}
 
export default Chart;


