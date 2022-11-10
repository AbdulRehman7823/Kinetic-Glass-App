import React from 'react'
import {Bar, Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

function Chartx({userData}) {
  console.log(userData)
  return (
        <Line
           data={userData}
           height={300}
           width={550}
        />
  )
}

export default Chartx