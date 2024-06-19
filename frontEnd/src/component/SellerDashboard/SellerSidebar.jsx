import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { AiFillPropertySafety } from "react-icons/ai";




const SellerSidebar = () => {
  
    const navigate = useNavigate()

    const handleClick = () => {
      navigate('/');
    };

  return (
    <div >
   <div className="flex h-screen bg-gray-100">
  <div className="flex flex-col w-60 bg-gray-800 rounded-2xl">
      <nav className="flex flex-col flex-1 overflow-y-auto bg-gradient-to-br from-cyan-500 to-sky-500 px-2 py-4 gap-10">
        <div>
          <Link to="/admin/dashboard" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-2xl text-2xl font-bold" >
            Dashboard
          </Link>
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <Link
            to="/admin/sellerHome"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-600 hover:bg-opacity-25 rounded-2xl"
          >
           <FaHome size={30} className='mr-2'/>
            Home
          </Link>
          <Link
          to="/admin/manageProperty"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-600 hover:bg-opacity-25 rounded-2xl"
          >
           <AiFillPropertySafety size={30} className='mr-2'/>
           Manage Property
          </Link>
          <Link
            to="/admin/sellerPropertyList"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-600 hover:bg-opacity-25 rounded-2xl"
          >
            <CiViewList size={30} className='mr-2' />
            Property List
          </Link>
          <a
            href="#"
            onClick={handleClick}
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-600 hover:bg-opacity-25 rounded-2xl"
          >
           <IoMdArrowBack size={30} className='mr-2'/>
            Back to home
          </a>
       
        </div>
      </nav>
  </div>

</div>

    </div>
  )
}

export default SellerSidebar;