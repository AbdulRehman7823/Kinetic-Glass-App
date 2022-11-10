import React from "react";
import Chartx from "./Chartx";
import "./style.css";
import {userData}  from "./Data"
function ChartSection() {

   
    const [data,setData] = React.useState({
        labels: userData.map((item)=>item.year),
        datasets:[{
            label:"Yearly Downloads",
            data:userData.map((item)=>item.downloads),
            backgroundColor:'#5b23f7',
            borderColor:'#5b23f7',
            tension:1,
            borderJoinStyle:'round',
            borderWidth:5,
            fill: {
                target: 'origin',
                above: '#5c23f767'   // Area will be red above the origin
              }
        }
        ]
    });
    
    
  return (
    <div className="chart-container">
        <p className="flex px-20">
         <h1 className="text-3xl font-bold  text-slate-200">
         Websites are Shifting to
            <h1 className="text-purple-500 text-4xl font-bold font-mono">
              Kinetic Glass
            </h1>
         </h1>
         </p>
    <div className="chart-section">
      <div className="left-div">
        <Chartx userData={data}/>
      </div>
      <div className="right-div">
      <div className="right-div-separator">
          <div className="right-info m-5">
            <h2 className="text-5xl font-bold  text-slate-300">0.0</h2>
            <p className="text-xl font-bold  text-slate-500">Weekly downloads</p>
          </div>
          <div className="right-info m-5">
            <h2 className="text-5xl font-bold  text-slate-300">0.0</h2>
            <p className="text-xl font-bold  text-slate-500">Weekly downloads</p>
          </div>
        </div>
        <div className="right-div-separator">
          <div className="right-info m-5">
            <h2 className="text-5xl font-bold  text-slate-300">0.0</h2>
            <p className="text-xl font-bold  text-slate-500">Weekly downloads</p>
          </div>
          <div className="right-info m-5">
            <h2 className="text-5xl font-bold  text-slate-300">0.0</h2>
            <p className="text-xl font-bold  text-slate-500">Weekly downloads</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ChartSection;
