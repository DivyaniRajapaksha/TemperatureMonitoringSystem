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
        options={{
          title: {
            display: props.displayTitle,
            text: 'Largest Cities In ' + props.location,
            fontSize: 25
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition
          }
        }}
      />
    </div>
   );
}
 
export default LineChartContainer;

// class LineChartContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       chartData: props.chartData
//     }
//   }

//   static defaultProps = {
//     displayTitle: true,
//     displayLegend: true,
//     legendPosition: 'right',
//     location: 'City'
//   }

//   render() {
//     return (
//       <div className="chart">

//         <Line
//           data={this.state.chartData}
//           options={{
//             title: {
//               display: this.props.displayTitle,
//               text: 'Largest Cities In ' + this.props.location,
//               fontSize: 25
//             },
//             legend: {
//               display: this.props.displayLegend,
//               position: this.props.legendPosition
//             }
//           }}
//         />
//       </div>
//     )
//   }
// }

// export default LineChartContainer;
