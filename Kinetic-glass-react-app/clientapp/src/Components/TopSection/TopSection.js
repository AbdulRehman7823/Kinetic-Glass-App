import React from "react";
import Box from "../animationBox/box";
import UiParticles from "../Particles/UiParticles";
import "./style.css";
import NavBar from "../navbar/NavBar"
function TopSection() {
  return (
<>    <NavBar></NavBar>
    <div className="top-section-bg">
  
      <Box className="box" />
      <div className="main">
        <div className="topText">
          <h1 className="text-5xl font-bold  text-slate-200">
            Create Modern React apps with
            <h1 className="text-purple-500 text-6xl font-bold font-mono">
              Kinetic Glass
            </h1>
          </h1>

          <p className="text-white px-20 py-5 text-lg">
            Kinetic Glass is a simple, modular and accessible component library
            that gives you the building blocks you need to build your React
            applications.
          </p>
          <div className="px-32 top-btns">
            <button class="inline-flex items-center bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded text-xl">
              <span>Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
            <button class="inline-flex items-center bg-slate-200 hover:bg-slate-300 text-gray-700 font-bold py-3 px-8 rounded text-xl">
              <span>Earning</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

export default TopSection;
