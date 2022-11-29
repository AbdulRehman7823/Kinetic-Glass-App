import React from "react";
import TopCard from "../Cards/TopCard";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <div>
        <Navbar />
        <TopCard />
      </div>
    </>
  );
};

export default Admin;
