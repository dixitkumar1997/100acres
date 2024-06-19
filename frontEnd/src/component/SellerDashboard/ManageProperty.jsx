import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/auth";

const ManageProperty = () => {
  const [propertyData, setPropertyData] = useState({
    propertyImage: null,
    location: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    hospitalsNearby: "",
    collegesNearby: "",
    price: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const { handleSubmitProperty } = useContext(AuthContext);
  useEffect(() => {});
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "propertyImage") {
      setPropertyData({ ...propertyData, propertyImage: files[0] });
    } else {
      setPropertyData({ ...propertyData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/properties",
        propertyData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("fetch property", res);

      handleSubmitProperty(res.data.data);
      setSuccessMessage("Property added successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-[80%] mx-auto">
      <div className="rounded-lg">
        <div className="mt-3 text-center text-4xl font-bold">
          Property Details
        </div>
        <div className="p-8">
          {successMessage && (
            <div className="mb-4 text-center text-green-500">
              {successMessage}
            </div>
          )}
          <div className="flex gap-4">
            <input
              type="text"
              name="location"
              value={propertyData.location}
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="location"
              onChange={handleChange}
            />
            <input
              type="number"
              name="area"
              value={propertyData.area}
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Area"
              onChange={handleChange}
            />
          </div>
          <div className="my-6 flex gap-4">
            <input
              type="number"
              name="bedrooms"
              value={propertyData.bedrooms}
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Bedrooms"
              onChange={handleChange}
            />
            <input
              type="number"
              name="bathrooms"
              id="select"
              value={propertyData.bathrooms}
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Bathrooms"
              onChange={handleChange}
            />
          </div>
          <div className="my-6 flex gap-4">
            <input
              id="select"
              name="hospitalsNearby"
              value={propertyData.hospitalsNearby}
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Hospitals Nearby"
              onChange={handleChange}
            />
            <input
              id="select"
              name="collegesNearby"
              value={propertyData.collegesNearby}
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Colleges Nearby"
              onChange={handleChange}
            />
          </div>
          <div className="my-6 flex gap-4">
            <input
              type="number"
              name="price"
              id="select"
              value={propertyData.price}
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Price"
              onChange={handleChange}
            />
            <input
              type="file"
              name="propertyImage"
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Property Image"
              onChange={handleChange}
            />
          </div>

          <div className="text-center">
            <button
              className="cursor-pointer rounded-lg bg-cyan-500 px-8 py-5 text-sm font-semibold text-white"
              onClick={handleSubmit}
            >
              Add Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProperty;
