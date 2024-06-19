import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/auth";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const SellerPropertyList = () => {
  const [propertyList, setPropertyList] = useState([])
  const navigate=useNavigate()

  useEffect(() => {
    const getPropertyList = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/properties");

      setPropertyList(res.data.data.properties)
      } catch (err) {
        console.log(err);
      }
    };
    
    getPropertyList();
    
  }, []);
  
  const handleDelete = async (id) => {
    try {
      const filteredList=propertyList.filter((item)=>item._id !== id )
      setPropertyList(filteredList)
      const res = await axios.delete(`http://localhost:5000/api/properties/${id}` ,{
        withCredentials:true
      });
      
      console.log(res)

    } catch (err) {
      console.log(err);
    }
  };

const handleEdit=(property)=>{
  navigate("/admin/updateProperty", { state: { property } })
}


  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-5 py-3 text-left text-xs font-semibold text-black/100 uppercase tracking-wider">
              Location
            </th>
            <th className="px-5 py-3 text-left text-xs font-semibold text-black/100 uppercase tracking-wider">
              Area(Sq. ft)
            </th>
            <th className="px-5 py-3 text-left text-xs font-semibold text-black/100 uppercase tracking-wider">
              Bedrooms
            </th>
            <th className="px-5 py-3 text-left text-xs font-semibold text-black/100 uppercase tracking-wider">
              Bathrooms
            </th>
            <th className="px-5 py-3 text-left text-xs font-semibold text-black/100 uppercase tracking-wider">
              Hospital Nearby
            </th>
            <th className="px-5 py-3 text-left text-xs font-semibold text-black/100 uppercase tracking-wider">
            College Nearby
            </th>
            <th className="px-5 py-3 text-left text-xs font-semibold text-black/100 uppercase tracking-wider">
            Price(Rs.)
            </th>
            <th className="px-5 py-3 text-left text-xs font-semibold text-black/100 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {propertyList.map((property, index) => (
            <tr key={index}>
              <td className="px-5 py-4 text-sm whitespace-nowrap uppercase">
                {property.location}
              </td>
              <td className="px-5 py-4 text-sm whitespace-nowrap">
                {property.area}
              </td>
              <td className="px-5 py-4 text-sm whitespace-nowrap">
                {property.bedrooms}
              </td>
              <td className="px-5 py-4 text-sm whitespace-nowrap">
                {property.bathrooms}
              </td>
              <td className="px-5 py-4 text-sm whitespace-nowrap uppercase">
                {property.hospitalsNearby}
              </td>
              <td className="px-5 py-4 text-sm whitespace-nowrap uppercase">
                {property.collegesNearby}
              </td>
              <td className="px-5 py-4 text-sm whitespace-nowrap uppercase">
                {property.price}
              </td>
              <td className="px-5 py-4  text-sm whitespace-nowrap">
                <button onClick={()=>handleEdit(property)} className="px-2 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  Edit
                </button>
                <button onClick={()=> handleDelete(property._id)} className="ml-2 px-2 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerPropertyList;