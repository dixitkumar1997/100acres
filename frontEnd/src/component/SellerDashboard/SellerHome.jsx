// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const SellerHome = () => {
//   const [propertyList, setPropertyList] = useState([]);

//   useEffect(() => {
//     const getPropertyList = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/properties");

//         setPropertyList(res.data.data.properties);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     getPropertyList();
//   }, []);

//   return (
//     <div className=" w-full">
//       {/* component */}
//       <section className="antialiased text-gray-600 h-screen px-4">
//         <div className="flex flex-col h-full w-full">
//           {/* Table */}
//           <div className="w-full mx-auto bg-white rounded-sm ">
//             <header className="px-5 py-4 border-b border-gray-100">
//               <h2 className="font-semibold text-gray-800">Properties</h2>
//             </header>
//             <div className="p-3">
//               <div className="overflow-x-auto">
//                 <table className="table-auto w-full">
//                   <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
//                     <tr>
//                       <th className="p-2 whitespace-nowrap">
//                         <div className="font-semibold text-left">Photo</div>
//                       </th>
//                       <th className="p-2 whitespace-nowrap">
//                         <div className="font-semibold text-left">
//                           Hospital NearBy
//                         </div>
//                       </th>
//                       <th className="p-2 whitespace-nowrap">
//                         <div className="font-semibold text-left">
//                           College Nearby
//                         </div>
//                       </th>
//                       <th className="p-2 whitespace-nowrap">
//                         <div className="font-semibold text-center">
//                           Location
//                         </div>
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-sm divide-y divide-gray-100">
//                     {propertyList.map((property, index) => (
//                       <tr key={index}>
//                         <td className="p-2 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
//                               <img
//                                 className="rounded-full"
//                                 src={property.propertyImage}
//                                 width={40}
//                                 height={40}
//                                 alt="Alex Shatov"
//                               />
//                             </div>
//                           </div>
//                         </td>
//                         <td className="p-2 whitespace-nowrap">
//                           <div className="text-left">{property.hospitalsNearby}</div>
//                         </td>
//                         <td className="p-2 whitespace-nowrap">
//                           <div className="text-left font-medium text-green-500">
//                           {property.collegesNearby}
//                           </div>
//                         </td>
//                         <td className="p-2 whitespace-nowrap">
//                           <div className="text-lg text-center">{property.location}</div>
//                         </td>
//                       </tr>
//                     ))}

//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SellerHome;

import React from 'react'
import { FaImages } from "react-icons/fa";
import { MdOutlinePriceChange, MdOutlineMapsHomeWork } from "react-icons/md";
import { Link } from 'react-router-dom';






const SellerHome = () => {
  return (
    <section className="text-gray-400 body-font">
    <div className="container px-5 py-24 mx-auto">
      <h1 className="sm:text-4xl text-2xl font-bold title-font text-center text-black mb-20">
      Post Your Property in 
        <br className="hidden sm:block" />
        3 Simple Steps
      </h1>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3 flex flex-col items-center">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-sky-500 mb-4 flex-shrink-0">
          <MdOutlineMapsHomeWork size={30} />
          </div>
          <div className="flex-grow pl-6">
            <h2 className=" text-lg title-font font-medium mb-2 text-black">
          <span className='text-sky-500'> 01.</span> Add details of your property
            </h2>
            <p className="leading-relaxed text-base">
            Begin by telling us the few basic details about your property like your property type, location, No. of rooms etc
            </p>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col items-center">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-sky-500 mb-4 flex-shrink-0">
          <FaImages size={30}  />
          </div>
          <div className="flex-grow pl-6">
            <h2 className="text-black text-lg title-font font-medium mb-2">
            <span className='text-sky-500'> 02.</span> Upload Photos & Videos
            </h2>
            <p className="leading-relaxed text-base">
            Upload photos and videos of your property either via your desktop device or from your mobile phone
            </p>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col items-center">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-sky-500 mb-4 flex-shrink-0">
          <MdOutlinePriceChange size={30}  />
          </div>
          <div className="flex-grow pl-6">
            <h2 className="text-black text-lg title-font font-medium mb-2">
            <span className='text-sky-500'> 03.</span> Add Pricing & Ownership
            </h2>
            <p className="leading-relaxed text-base">
            Just update your property’s ownership details and your expected price and your property is ready for posting
            </p>
          </div>
        </div>
      </div>

    </div>
    {<Link to={'/admin/manageProperty'}>
      <div className='flex justify-center'><button className='border px-2 py-2 bg-sky-400 text-white font-bold rounded-lg'>Begin To Post Your Property</button></div>
      </Link>}
  </section>
  
  )
}

export default SellerHome