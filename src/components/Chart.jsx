import React from 'react'
import {Chart as ChartJS} from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import { sampleDataForChart } from '../constants';

export const Chart = () => {
    const data={
        labels:sampleDataForChart.map((item)=>item.month),
        datasets: [
          {
            label:'Monthly Facts Accepted',
            data:sampleDataForChart.map((item)=>item.value)
          },
        ]};
  return (
    <div >
      <Bar data={data}>
         
      </Bar>
    </div>
  )
}

