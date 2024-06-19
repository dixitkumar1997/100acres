import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PropertyDetail = () => {

  const [oneProperty, setOneProperty] = useState("")

  const {id} = useParams();


  useEffect(() => {
    const getPropertyDetail = async () => {
      try {
        const res = await axios.get(`https://one00acres.onrender.com/api/properties/${id}`);

        console.log("getdata", res.data.data)

      setOneProperty(res.data.data)

      } catch (err) {
        console.log(err);
      }
    };

    getPropertyDetail();
  }, [id]);

  console.log("getstate", oneProperty);


  // useEffect(() => {
  //   console.log("getstate", oneProperty);
  // }, [oneProperty]);

  return (
    <div>
<div className="bg-gray-100 dark:bg-gray-800 py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img
            className="w-full h-full object-cover"
            src={oneProperty.propertyImage}
            alt="Product Image"
          />
        </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
              Contact Owner
            </button>
          </div>
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Product Name
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante
          justo. Integer euismod libero id mauris malesuada tincidunt.
        </p>
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Price:
            </span>
            <span className="text-gray-600 dark:text-gray-300">{oneProperty.price}</span>
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Status:
            </span>
            <span className="text-gray-600 dark:text-gray-300"> Active</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">
            Year Built:
          </span>
          <span className="text-gray-600 dark:text-gray-300">1999</span>
        </div>
        <div className="mb-4">
          <div className="flex items-center mt-2">
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
            {oneProperty.bedrooms} bedrooms
            </button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
             {oneProperty.bathrooms} bath
            </button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
            {oneProperty.area} Sq. ft.
            </button>
          
          </div>
        </div>
        <div>
          <span className="font-bold text-gray-700 dark:text-gray-300">
            Product Description:
          </span>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
          Welcome to 207 Highland Avenue, a captivating first-floor residence featuring luxurious amenities and exquisite details. Step into this enchanting space, meticulously designed to offer an unparalleled living experience. Upon arrival, you'll be greeted by a custom bench, coatrack, and storage unit. The open living and dining area showcases elegant white oak engineered floors and a tiled gas fireplace, exuding both charm and warmth. The kitchen is a culinary dream, with Calacatta Nuvo Quartz countertops, a hexagon Carrara marble backsplash, a spacious island, and ample storage, sure to captivate even the most discerning food enthusiasts.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


  </div>
  )
}

export default PropertyDetail