import React from "react";
import Box from "../animationBox/box";
import UiParticles from "../Particles/UiParticles";
import "./style.css";
import TopNavigation from "../navbar/TopNavigation";
import {useNavigate} from 'react-router-dom'

function TopSection() {
    const navigate = useNavigate();

  return (
    <>
      <TopNavigation></TopNavigation>
      <div className="top-section-bg">
        <Box className="box" />
        <div className="main">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-5xl text-3xl font-medium title-font mb-4 text-gray-900 py-5 text-white">
                  Create Modern React apps with
                  <h1 className="text-purple-500 sm:text-6xl text-4xl font-bold font-mono">
                    Kinetic Glass
                  </h1>
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white px-20">
                  Kinetic Glass is a simple, modular and accessible component
                  library that gives you the building blocks you need to build
                  your React applications.
                </p>
              </div>
              <div className="flex lg:w-2/3 justify-around items-center w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <button 
                 onClick={()=>navigate("/app")}
                className="inline-flex items-center bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded text-xl">
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
                <button 
                  onClick={()=>navigate("/login")}
                 className="inline-flex items-center bg-slate-200 hover:bg-slate-300 text-gray-700 font-bold py-3 px-8 rounded text-xl">
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
          </section>
        </div>
      </div>
    </>
    /* 
    <section className="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
    </div>
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div class="relative flex-grow w-full">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative flex-grow w-full">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <button class="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Button</button>
    </div>
  </div>
</section>
    */
  );
}

export default TopSection;
