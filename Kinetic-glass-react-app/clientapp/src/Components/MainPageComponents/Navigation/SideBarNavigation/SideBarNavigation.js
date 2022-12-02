import React from "react";
import {
  BsFillFileCodeFill,
  BsSearch,
  BsFillCaretDownSquareFill,
} from "react-icons/bs";
import { AiFillCode, AiFillCaretLeft } from "react-icons/ai";
import { MdDashboard, MdSpaceDashboard, MdHelpCenter } from "react-icons/md";
import { FaKickstarter, FaDonate, FaPaintRoller } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import "./style.css"
import { useNavigate } from "react-router-dom"
function SideBarNavigation({children}) {

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [submenuOpen, setSubmenuOpen] = React.useState(false);


  const handler = (str) => {
        console.log(str)
  }

  const Menus = [
    {
      title: "Get Started",
      link: "/app/get-started",
      icon: <FaKickstarter />,
      submenu: true,
      spacing: true,
      open: true,
      submenuItems: [
        {
          title: "Introduction",
          link: "/app/get-started",
        },
        {
          title: "Version",
          link: "/app/get-started/version",
        },
        {
          title: "Comparison",
          link: "/app/get-started/comparison",
        },
        {
          title: "Designing Principle",
          link: "/app/get-started/priciples",
          icon: "",
        },
        {
          title: "Contribution",
          link: "/app/get-started/contribution",
          icon: "",
        },
        {
          title: "Earning",
          link: "/login",
          icon: "",
        },
      ],
    },
    {
      title: "Components",
      link: "/app/components",
      icon: <MdSpaceDashboard />,
      submenu: true,
      spacing: true,
      open: false,
      submenuItems: [
        { title: "Form Component", link: "/app/components", header: true },
        { title: "Button", link:"/app/components/form/button" },
        { title: "Textfield", link: "/app/components/form/textfield" },
        { title: "CheckBox", link: "/app/components/form/checkbox"},
        { title: "Editable", link: "/app/components/form/editable"},
        { title: "Number Input", link: "/app/components/form/numberinput"},
        { title: "Radio", link: "/app/components/form/radio" },
        { title: "Select", link: "/app/components/form/select"},
        { title: "Slider", link: "/app/components/form/slider" },
        { title: "Textarea", link: "/app/components/form/textarea" },
        { title: "Icon Button", link: "/app/components/form/iconBtn" },
        {
          title: "Website Components",
          link: "/app/components/web",
          header: true,
        },
        { title: "General Form", link: "/app/components/web/generalForm" },
        { title: "Contact Us Form", link: "/app/components/web/contactus"  },
        { title: "Location ContactUs Form", link: "/app/components/web/locationcontactus"  },
        { title: "Simple Product Card", link: "/app/components/web/simpleproductcard"  },
        { title: "Detailed Product Card", link: "/app/components/web/detailedproductcard"  },
        { title: "Simple Card", link: "/app/components/web/simplecard"  },
        { title: "Detailed Card", link:"/app/components/web/detailedcard"  },
        { title: "Contained Card", link:"/app/components/web/containedcard"  },
      ],
    },
    {
      title: "Themes",
      link: ()=>{handler("Light Theme")},
      icon: <FaPaintRoller />,
      submenu: true,
      open: false,
      submenuItems: [
        { title: "Light Theme", link: ()=>{handler("Light Theme")} },
        { title: "Dark Theme", link: ()=>{handler("Dark Theme")} },
        { title: "Neon Theme", link: ()=>{handler("Neon Theme")} },
        { title: "Glass Theme", link: ()=>{handler("Glass Theme")} },
      ],
    },
    { title: "Json", link: "/app/json" },
    { title: "Templates", link: "/app/templates", icon: <HiTemplate />, spacing: true },
    { title: "Community", link: "/app/community", icon: <TbWorld /> },
    { title: "Support Us", link: "/app/support", icon: <FaDonate /> },
    { title: "Help?", link: "/app/help", icon: <MdHelpCenter /> },
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
          <AiFillCode
            className={`bg-gray-100 text-4xl text-blue-600 hover:text-blue-500 rounded absolute cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-gray-700  origin-left ml-11 font-medium text-2xl ${
              !open && "scale-0 duration-400"
            }`}
          >
            Kinetic-Glass
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-gray-200 mt-6 py-2 ${
            !open ? "px-2.5" : "px-4"
          }`}
        >
          <BsSearch
            className={`text-gray-700 text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-gray-700 focus:outline-none outline-none border-none mx-3  ${
              !open && "hidden"
            }`}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <div  key={index}>
              <li
                 onClick={()=>{navigate(menu.link)}}
                key={index}
                className={`text-gray-700 text-md flex items-center gap-x-4 cursor-pointer p-2 hover:shadow-lg duration-200 hover:bg-gray-500 hover:text-gray-100 rounded-md  ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-2xl block float-left text-blue-700 hover:text-blue-500">
                  {menu.icon ? menu.icon : <MdDashboard className=""></MdDashboard>}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-300 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsFillCaretDownSquareFill
                
                    className={`text-gray-700 text-sm duration-500 hover:text-gray-100 ${
                      submenuOpen && "rotate-180 duration-500"
                    }`}
                    onClick={() => {
                      setSubmenuOpen(!submenuOpen);
                    }}
                  />
                )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul  className="list-disc" >
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                       key={index}
                       onClick={()=>{navigate(submenuItem.link)}}
                      className={`text-gray-700 text-md flex items-center gap-x-4 p-2 rounded-md ${
                        submenuItem.header
                          ? "border-blue-600 text-gray-700 text-md mx-16 my-5 shadow-lg border-2 text-center font-bold "
                          : "hover:bg-gray-600 hover:text-gray-100 cursor-pointer px-5"
                      }`}
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="h-screen overflow-y-auto w-full bg-white">
          {children}
        </div>
      </div>
    
  );
}

export default SideBarNavigation;
