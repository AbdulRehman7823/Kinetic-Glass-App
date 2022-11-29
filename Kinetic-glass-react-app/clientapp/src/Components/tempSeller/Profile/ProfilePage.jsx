import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import image from "./../../assets/2.jpg";

const ProfilePage = () => {
  return (
    <>
      <Sidebar />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2018/03/17/23/25/boards-3235489_960_720.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-gradient-to-r from-gray-100 to-gray-300 w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={image}
                        className="shadow-xl rounded-full h-auto align-middle hover:opacity-60 border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px "
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                          type="button"
                          class="text-white uppercase bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Edit
                        </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blue opacity-80">
                          Components
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blue opacity-80">
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Sohaib Hassan
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blue opacity-80 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blue opacity-80"></i>{" "}
                    Lahore, Pakistan
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Results-driven Senior Software Engineer and Team leader
                        with 10 years of hands-on experience in guiding teams
                        through all software development phases from requirement
                        gathering and analysis to design, development, testing,
                        and support. Highly knowledgeable in operating systems,
                        development environments, frontend and backend
                        programming languages, and data architecture. Leverages
                        Agile methodology to strengthen test-driven,
                        development, and change management initiatives.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-Blue-300"
                        onClick={(e) => e.preventDefault()}
                      >
                        <button
                          type="button"
                          class="text-white uppercase bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Show more
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProfilePage;
