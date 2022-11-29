import React from "react";
import "./style.css";
import { FcGoogle } from "react-icons/fc";
import img from './signup-bg.svg'; 
import { FaKickstarter } from "react-icons/fa";
function SignUp() {

    const [data, setData] = React.useState({
        username: "",
        email: "",
        password: "",
      });

      function handleData(key, value) {
        setData({ ...data, [key]: value });
      }

      const submitHandler = (e) => {
        e.preventDefault();
          console.log(data)
      }
  return (
    <section className=" flex flex-col md:flex-row h-screen items-center">
    

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center"
      >
        <div className="w-full h-100">
          <div className="inline-flex items-center mt-4">
            <FaKickstarter className="mr-4 text-3xl block text-blue-700" />
            <h1 className="text-xl text-skin-base font-bold">
              Kinetic Glass Login
            </h1>
          </div>
          <h1 className="text-xl md:text-2xl font-bold leading-tight text-skin-base mt-6">
            Sign in with Us!
          </h1>

          <form className="mt-6" onSubmit={submitHandler} >
          <div>
              <label className="block text-skin-base">Username</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
                onChange={(e)=>{handleData("username",e.target.value)}}
              />
            </div>
            <div>
              <label className="block text-skin-base">Email Address</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
                onChange={(e)=>{handleData("username",e.target.value)}}
              />
            </div>

            <div className="mt-4">
              <label className="block text-skin-base">Password</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
                minlength="8"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                required
                onChange={(e)=>{handleData("username",e.target.value)}}
              />
            </div>
            <button
              type="submit"
              className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
            >
              Sign In
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <FcGoogle></FcGoogle>
              <span className="ml-4">Sign in with Google</span>
            </div>
          </button>

          <p className="mt-2">
            Already have an account?
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Login
            </a>
          </p>

          <p className="text-sm text-gray-500 mt-4">
            &copy; 2021 Kinetic Glass - All Rights Reserved.
          </p>
        </div>
      </div>

        <div className="main-bg-top hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <div className="main-bg w-full h-full justify-center p-32">
            <img src={img} />
        </div>
      </div>
    </section>
  );
}

export default SignUp;
