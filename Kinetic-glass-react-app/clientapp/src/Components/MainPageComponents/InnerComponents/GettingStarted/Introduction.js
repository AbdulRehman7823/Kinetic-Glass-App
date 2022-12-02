import React from "react";
import MiddlePanel from "../../middlePanel/MiddlePanel";
import MainPanel from "../../mainPanel/MainPanel";

function Introduction() {
  return (
    <MainPanel>
      <MiddlePanel>
        <div className="px-4">
          <h1 className="uppercase text-4xl font-bold pb-4 text-gray-700">
            Kinetic Glass - component library
          </h1>
          <p className="pb-6 px-2 text-gray-700">
            Kinetic Glass is a simple, modular and accessible component library
            that gives you the building blocks you need to build your React
            applications
          </p>
          <hr className="border-solid" />
          <h1 className="uppercase text-2xl font-bold pt-4 pb-4 text-gray-700">
            Introduction
          </h1>
          <p className="pb-6 px-2 text-gray-700">
            Kinetic Glass is an open-source library of UI components based on
            the utility-first Tailwind CSS framework featuring dark mode
            support, a Figma design system, and more.
          </p>
          <p className="pb-6 px-2 text-gray-700">
            It includes all of the commonly used components that a website
            requires, such as buttons, dropdowns, navigation bars, modals, but
            also some more advanced interactive elements such as datepickers.
          </p>
          <p className="pb-6 px-2 text-gray-700">
            All of the elements are built using the utility classes from
            Tailwind CSS and vanilla JavaScript.
          </p>
          <div className="flex flex-row pb-8 pt-10 mr-3">
            <div class="flex justify-center pr-4">
              <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm hover:bg-slate-200">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                  Quiz Start
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  Learn how to get started by downloading and configuring
                  Kinetic Glass locally on your machine and start developing
                </p>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm hover:bg-slate-200">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                  Components
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  Explore Kinetic Glass Element such as
                  buttons,textfield,slider,radio button,Check Box and use them
                  to build your website.
                </p>
              </div>
            </div>
          </div>
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
          <div class="block bg-gray-700 p-4 rounded-lg shadow-lg bg-white w-full">
            <h2 className="px-2 text-gray-200">$ npm i kinetic-glass-ui</h2>
          </div>
          <br></br>
          <div class="block bg-gray-700 p-4 rounded-lg shadow-lg bg-white w-full">
            <h2 className="px-2 text-gray-200">$ npm i kinetic-glass-ui --save-dev</h2>
          </div>
        </div>
        </div>
      </MiddlePanel>
    </MainPanel>
  );
}

export default Introduction;
