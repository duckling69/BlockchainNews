import React from 'react'
import {Chart as ChartJS,BarElement,LinearScale,Tooltip,Legend,CategoryScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'
ChartJS.register(BarElement,LinearScale,Tooltip,Legend,CategoryScale)
const Chart = () => {
    const data={
        labels:['Sumant','Vivek','James'],
        datasets: [
          { 
            id: 1,
            label: '345',
            approvals: 3,
            backgroundColor:'aqua',
            borderColor:'black',
            borderWidth:1,
          },
          {
            id: 2,
            label: '347',
            approvals: 3,
            backgroundColor:'aqua',
            borderColor:'black',
            borderWidth:1,
          },
          {
            id: 3,
            label: '348',
            approvals: 3,
            backgroundColor:'aqua',
            borderColor:'black',
            borderWidth:1,
          },
          {
            id: 4,
            label: '343',
            approvals: 3,
            backgroundColor:'aqua',
            borderColor:'black',
            borderWidth:1,
          }]};
  return (
    <div>
      <Bar>
         data={data}
      </Bar>
    </div>
  )
}

export default Chart
