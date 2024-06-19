import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../Context/auth";
import Cookies from "js-cookie";

const Login = () => {
  const { handleLogin, handleAuthentication } = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    // const API_BASE_URL = process.env.NODE_ENV === 'production' 
    // ? process.env.REACT_APP_API_BASE_URL_PRODUCTION 
    // : process.env.REACT_APP_API_BASE_URL_DEVELOPMENT;

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        loginForm,
        {
          withCredentials: true,
        }
      );
      console.log(res);

      const user = {
        firstName: res.data.data.user.firstName,
        userType: res.data.data.user.userType,
      };

      handleLogin(user);
      handleAuthentication(user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Login</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      value={loginForm.email}
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      value={loginForm.password}
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      name="phoneNumber"
                      type="number"
                      value={loginForm.phoneNumber}
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Phone Number"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative">
                    <button
                      className="bg-cyan-500 text-white rounded-md px-2 py-1"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                  </div>
                  {/* <div className="relative">
                    <Link
                      to="/forgot-password"
                      className="text-cyan-500 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
