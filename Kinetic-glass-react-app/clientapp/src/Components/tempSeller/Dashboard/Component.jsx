import React from "react";
import ComponentTable from "../Tables/ComponentTable";
import Admin from "./Admin";
const Component = () => {
  return (
    <div className="relative md:ml-64 bg-gradient-to-r from-gray-100 to-gray-300 opacity-100">
      <Admin />
      <div className="px-2 md:px-10 mx-auto w-full -m-24">
        <div className="w-full mb-12 px-4">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <button
                  type="button"
                  class="text-white uppercase bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-lx px-5 py-2.5 text-center mr-2 mb-2"
                >
                  add Component
                </button>
              </div>
            </div>
          </div>
          <ComponentTable color="dark" />
        </div>
      </div>
    </div>
  );
};

export default Component;
