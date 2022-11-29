import React from "react";
import {
  BsFillFileCodeFill,
  BsSearch,
  BsFillCaretDownSquareFill,
} from "react-icons/bs";
import { AiFillCode, AiFillCaretLeft } from "react-icons/ai";
import { MdDashboard, MdLibraryAdd, MdHelpCenter } from "react-icons/md";
import { FaHome, FaDonate, FaPaintRoller } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import {RiDeleteBin6Fill,RiLogoutBoxFill} from "react-icons/ri"
import {GiProgression} from "react-icons/gi"
import { useNavigate } from "react-router-dom";

import "./style.css";

import SellerTopNavigation from "./SellerTopNavigation";
function SellerNavigation({ children }) {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();


  const handler = (str) => {
    console.log(str);
  };

  const Menus = [
    {
      title: "Home",
      link: "/app/seller/home",
      icon: <FaHome />,
    },

    {
      title: "Add Component",
      link: "/app/seller/add",
      icon: <MdLibraryAdd />,
    },
    {
      title: "Delete Components",
      link: "/app/seller/delete",
      icon: <RiDeleteBin6Fill />,
    },
    {
      title: "Orders",
      link: "/app/seller/orders",
      icon: <GiProgression />,
    },
    {
        title: "Help?",
        link: "/app/help",
        icon: <MdHelpCenter />,
        
      },
    {
      title: "Logout",
      link: "/",
      icon: <RiLogoutBoxFill />,
      spacing:true,

    },
    
  ];
  return (
    <div className="flex md:flex h-screen ">
      <div
        className={`scrollbar h-screen overflow-hidden overflow-x-hidden overflow-y-auto p-5 bg-white h-screen p-5 pt-8  ${
          open ? "w-96 duration-300" : "w-20 duration-300"
        } relative hidden md:block`}
      >
        <AiFillCaretLeft
          className={`text-gray-700 text-lg absolute right-1 top-3 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <MdDashboard
            className={`bg-gray-100 text-4xl text-blue-600 hover:text-blue-500 rounded absolute cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-gray-700  origin-left ml-11 font-medium text-2xl ${
              !open && "scale-0 duration-400"
            }`}
          >
            Dashboard
          </h1>
        </div>

        <ul className="pt-12">
          {Menus.map((menu, index) => (
            <div key={index}>
              <li
                 onClick={() => {
                    navigate(menu.link);
                  }}
                key={index}
                className={`text-gray-700 text-md flex items-center gap-x-4 cursor-pointer p-2 hover:shadow-lg duration-200 hover:bg-gray-500 hover:text-gray-100 rounded-md  ${
                  menu.spacing ? "mt-44" : "mt-6"
                }`}
              >
                <span className="text-2xl block float-left text-blue-700 hover:text-blue-500">
                  {menu.icon ? (
                    menu.icon
                  ) : (
                    <MdDashboard className=""></MdDashboard>
                  )}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-300 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="h-screen overflow-y-auto w-full bg-white">
        <SellerTopNavigation></SellerTopNavigation>
        {children}
        </div>
    </div>
  );
}

export default SellerNavigation;
