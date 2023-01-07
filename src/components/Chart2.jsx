import React from 'react'
import {Chart as ChartJS} from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import { sampleDataForChart } from '../constants';

export const Chart2 = () => {
    const data={
        labels:['Sports','Political','International','Crimes','Entertainment','Religious'],
        datasets: [
          {
            label:'Top Category of Facts accepted',
            data:[40,50,60,42,54,67],
          },
        ]};
  return (
    <div >
      <Bar data={data}>
         
      </Bar>
    </div>
  )
}

