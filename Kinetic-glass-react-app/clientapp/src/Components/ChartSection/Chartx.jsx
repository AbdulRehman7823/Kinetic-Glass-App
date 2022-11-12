import React from 'react'
import {Bar, Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

function Chartx({userData}) {
  console.log(userData)
  return (
        <Line
           data={userData}
           height={50}
           width={100}
        />
  )
}

export default Chartx