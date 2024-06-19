import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/auth";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const { handleRegister } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUserTypeChange = (e) => {
    setFormData({ ...formData, userType: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    // const API_BASE_URL = process.env.NODE_ENV === 'production' 
    // ? process.env.REACT_APP_API_BASE_URL_PRODUCTION 
    // : process.env.REACT_APP_API_BASE_URL_DEVELOPMENT;

    try {
      const res = await axios.post(
        "https://one00acres.onrender.com/api/v1/users/register",
        formData
      );
      console.log(res);
      if (res) {
        handleRegister();
      }

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
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 ">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Register</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      value={formData.firstName}
                      name="firstName"
                      type="text"
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="First Name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      value={formData.lastName}
                      name="lastName"
                      type="text"
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Last Name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      value={formData.email}
                      name="email"
                      type="text"
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      value={formData.phoneNumber}
                      name="phoneNumber"
                      type="text"
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Phone Number"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      value={formData.password}
                      name="password"
                      type="password"
                      className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                  </div>


                  <div className="relative mt-4">
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="userType"
                          value="Seller"
                          checked={formData.userType === "Seller"}
                          onChange={handleUserTypeChange}
                        />
                        <span className="ml-2">Seller</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="userType"
                          value="Buyer"
                          checked={formData.userType === "Buyer"}
                          onChange={handleUserTypeChange}
                        />
                        <span className="ml-2">Buyer</span>
                      </label>
                    </div>
                  </div>

                  <div className="relative mt-4">
                    <button
                      className="bg-cyan-500 text-white rounded-md px-2 py-1"
                      onClick={handleSubmit}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
