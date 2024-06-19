import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProperty = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    location: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    hospitalsNearby: "",
    collegesNearby: "",
    propertyImage: null,
    price: "",
  });

  useEffect(() => {
    if (location.state && location.state.property) {
      setProperty(location.state.property);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleFileChange = (e) => {
    setProperty({ ...property, propertyImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const propertyData = {
      location: property.location,
      area: property.area,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      hospitalsNearby: property.hospitalsNearby,
      collegesNearby: property.collegesNearby,
      price: property.price,
    };
    if (property.propertyImage) {
      propertyData.propertyImage = property.propertyImage;
    }

    try {
      const res = await axios.put(
        `https://one00acres.onrender.com/properties/${property._id}`,
        propertyData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.status === 201) {
        navigate("/admin/sellerPropertyList");
        setSuccessMessage("Property updated successfully!");
      } else {
        console.error("Failed to update property");
      }
    } catch (error) {
      console.error(
        "Error updating property:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="rounded-lg">
        <div className="mt-3 text-center text-4xl font-bold">
          Property Details
        </div>
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                type="text"
                name="location"
                value={property.location}
                onChange={handleChange}
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Location"
              />
              <input
                type="number"
                name="area"
                value={property.area}
                onChange={handleChange}
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Area"
              />
            </div>
            <div className="my-6 flex gap-4">
              <input
                type="number"
                name="bedrooms"
                value={property.bedrooms}
                onChange={handleChange}
                className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Bedrooms"
              />
              <input
                type="number"
                name="bathrooms"
                value={property.bathrooms}
                onChange={handleChange}
                className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Bathrooms"
              />
            </div>
            <div className="my-6 flex gap-4">
              <input
                name="hospitalsNearby"
                value={property.hospitalsNearby}
                onChange={handleChange}
                className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Hospitals Nearby"
              />
              <input
                name="collegesNearby"
                value={property.collegesNearby}
                onChange={handleChange}
                className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Colleges Nearby"
              />
            </div>
            <div className="my-6 flex gap-4">
              <input
                type="number"
                name="price"
                value={property.price}
                onChange={handleChange}
                className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Price"
              />
              <input
                type="file"
                name="propertyImage"
                onChange={handleFileChange}
                className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-cyan-500 px-8 py-5 text-sm font-semibold text-white"
              >
                Update Property
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProperty;
