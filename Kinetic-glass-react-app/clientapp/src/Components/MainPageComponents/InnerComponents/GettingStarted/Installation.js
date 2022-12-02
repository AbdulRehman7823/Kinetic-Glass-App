import React from "react";
import MiddlePanel from "../../middlePanel/MiddlePanel";
import MainPanel from "../../mainPanel/MainPanel";
import ReactLivePreview from "../../LivePreview/ReactLivePreview";

export const Installation = () => {
  return (
    <MainPanel>
      <MiddlePanel>
        <div className="px-4">
          <h1 className="uppercase text-4xl font-bold pb-4 text-gray-700">
            Installation
          </h1>
          <p className="pb-6 px-2 text-gray-700">
            Kinetic Glass is technically a plugin that can be included into any
            existing Tailwind CSS project. To get started, you first need to
            make sure that you have a working Tailwind CSS project installed and
            that you also have Node and NPM installed on your machine.
          </p>
          <h1 className="uppercase text-2xl font-bold pt-4 pb-4 text-gray-700">
            Default installation
          </h1>
          <p className="pb-6 px-2 text-gray-700">
            Run one of the following commands to add Kinetic Glass UI to your
            project:
          </p>
          <p className="pb-6 px-2 text-gray-700">
            Install the latest version of Kinetic Glass using NPM:
          </p>
          <div class="block p-6 rounded-lg shadow-lg bg-white w-full hover:bg-slate-200">
            <h2 className="px-2 text-gray-700">npm i kineticglass</h2>
          </div>
        </div>
      </MiddlePanel>
    </MainPanel>
  );
};

export default Installation;
