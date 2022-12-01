import React from "react";
import img from "./login-bg.png";
import './style.css'
import { Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc';
import {GoMarkGithub} from 'react-icons/go'
import {FaKickstarter} from 'react-icons/fa'
function Login() {
       const googleAuth = ()=>{
          window.open(`http://localhost:5000/api/auth/google/callback`,"_self");
       }

    const [data, setData] = React.useState({
        username: "",
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
    <section className="container flex flex-col md:flex-row h-screen items-center">
        <div className="main-bg-top hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <div className="main-bg w-full h-full justify-center p-32">
        <img width={450} src={img} alt=""  className="object-cover" />
      </div>
      </div>

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center"
      >
        <div className="w-full h-100">
          <div className="inline-flex items-center mt-4">  
          <FaKickstarter className="mr-4 text-3xl block text-blue-700"/>
          <h1 className="text-xl text-skin-base font-bold">Kinetic Glass Login</h1>
          </div>
          <h1 className="text-xl md:text-2xl font-bold leading-tight text-skin-base mt-6">
            Log in to your account
          </h1>

          <form className="mt-6" action="#" method="POST">
            <div>
              <label className="block text-skin-base">Email Address</label>
              <input
                type="email"
                name=""
                id=""
                onChange={(e)=>{handleData("email", e.target.value)}}
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-skin-base">Password</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
                onChange={(e)=>{handleData("password", e.target.value)}}
                minlength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-skin-base hover:text-blue-700 focus:text-blue-700"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            type="button"
            onClick={googleAuth}
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <FcGoogle></FcGoogle>
              <span className="ml-4">Log in with Google</span>
            </div>
          </button>
         

          <p className="mt-8">
            Need an account?

            <Link to="/register">
            <a className="text-blue-500 hover:text-blue-700 font-semibold">
              Create an account
            </a>
            </Link>
          </p>

          <p className="text-sm text-gray-500 mt-4">
            &copy; 2021 Kinetic Glass - All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
