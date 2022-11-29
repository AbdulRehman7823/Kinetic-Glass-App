/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { TfiDashboard } from "react-icons/tfi";
import { AiOutlineTable } from "react-icons/ai";
import {TbComponents} from "react-icons/tb";
import {MdPayment} from "react-icons/md";

const Sidebar = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gradient-to-r from-gray-100 to-gray-300 opacity-100 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 ">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/admin"
          >
            Kinetic Glass
          </Link>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded "
            }
          >
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 px-2 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "bg-white rounded-2xl hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <div className="flex flex-row items-center">
                    <div
                      className={
                        "text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl text-red"
                      }
                    >
                      <TfiDashboard className="text-2xl pr-1 pb-1" />
                    </div>
                    <h4 className="pl-4">Dashboard</h4>
                  </div>
                </Link>
              </li>
              <li className="items-center">
              <Link
                  className={
                    "text-xs uppercase py-3 px-2 font-bold block " +
                    (window.location.href.indexOf("/admin/component") !== -1
                      ? "bg-white rounded-2xl hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/component"
                >
                  <div className="flex flex-row items-center">
                    <div
                      className={
                        "text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl text-red"
                      }
                    >
                      <TbComponents className="text-2xl pr-1 pb-1" />
                    </div>
                    <h4 className="pl-4">Component</h4>
                  </div>
                </Link>
              </li>
              <li className="items-center">
              <Link
                  className={
                    "text-xs uppercase py-3 px-2 font-bold block " +
                    (window.location.href.indexOf("/admin/table") !== -1
                      ? "bg-white rounded-2xl hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin"
                >
                  <div className="flex flex-row items-center">
                    <div
                      className={
                        "text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl text-red"
                      }
                    >
                      <AiOutlineTable className="text-2xl pr-1 pb-1" />
                    </div>
                    <h4 className="pl-4">Tables</h4>
                  </div>
                </Link>
              </li>
              <li className="items-center">
              <Link
                  className={
                    "text-xs uppercase py-3 px-2 font-bold block " +
                    (window.location.href.indexOf("/admin/payment") !== -1
                      ? "bg-white rounded-2xl hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/"
                >
                  <div className="flex flex-row items-center">
                    <div
                      className={
                        "text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl text-red"
                      }
                    >
                      <MdPayment className="text-2xl pr-1 pb-1" />
                    </div>
                    <h4 className="pl-4">Payment</h4>
                  </div>
                </Link>
              </li>
            </ul>
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Profile Pages
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/admin/profile"
                >
                  <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Profile
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/login"
                >
                  <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Sidebar;
