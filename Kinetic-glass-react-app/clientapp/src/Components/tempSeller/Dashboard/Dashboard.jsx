import React from "react";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import PageVisit from "../Tables/PageVisit";
import Social from "../Tables/Social";
import Admin from "./Admin";

const Dashboard = () => {
  return (
    <div className="relative md:ml-64 bg-gradient-to-r from-gray-100 to-gray-300 opacity-100">
      <Admin />
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <LineChart />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <Social />
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <PageVisit />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
