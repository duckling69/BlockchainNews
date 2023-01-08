import { Line } from 'react-chartjs-2';

<Line
  datasetIdKey='id'
  data={{
    labels:['jun','jul','Aug','Sept','Oct',"Nov"],
    datasets: [
      { 
        handle:'Sumant',
        id: 1,
        label: "Verified",
        approvals: 3,
      },
      {
        handle:"James",
        id: 2,
        label: "Verified",
        approvals: 6,
      },
      {
        handle:"Raj",
        id: 3,
        label: "Rookie",
        approvals: 6,
      },
      {
        handle:"Vivek",
        id: 4,
        label: "Verified",
        approvals: 8,
      },
    ],
  }}
/>
 