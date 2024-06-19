import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/auth";

const PropertyList = () => {
  const { locationSearch,wishlist,setWishlist } = useContext(AuthContext);
  const [propertyList, setPropertyList] = useState([]);
  const [filterPropertyList, setFilterPropertyList] = useState([]);
  const [addedToWishlist, setAddedToWishlist] = useState({});


  const {isLoggedIn,isAuthenticated}=useContext(AuthContext)




  useEffect(() => {
    const storedWishlist = localStorage.getItem("propertyWishlist");
    if (storedWishlist) {
      setAddedToWishlist(JSON.parse(storedWishlist).reduce((acc, item) => {
        acc[item._id] = true;
        return acc;
      }, {}));
    }
  }, []);



  // const [wishlist,setWishlist]=useState([])
  const handleWishlist = (itm) => {
    // setWishlist((prevWishlist) => {
    //   const updatedWishlist = [...prevWishlist, itm];
    //   localStorage.setItem("propertyWishlist", JSON.stringify(updatedWishlist));
    //   return updatedWishlist;
    // });



    setWishlist((prevWishlist) => {
      const itemExists = prevWishlist.some(property => property._id === itm._id);
      if (itemExists) {
        console.log("Item already in wishlist");
        return prevWishlist; // No changes if item already exists
      } else {
        const updatedWishlist = [...prevWishlist, itm];
        localStorage.setItem("propertyWishlist", JSON.stringify(updatedWishlist));
        console.log(updatedWishlist);
        setAddedToWishlist((prevAdded) => ({
          ...prevAdded,
          [itm._id]: true,
        }));
        return updatedWishlist;
      }
    });
  };


  // useEffect(()=>{
    
  
  //   handleWishlist();

  // },[])
 
  useEffect(() => {
    const getPropertyList = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/properties");

        //   console.log("property list", res.data.data.properties
        // );
        // console.log(res.data.data.properties)
        setPropertyList(res.data.data.properties);
        setFilterPropertyList(res.data.data.properties);
      } catch (err) {
        console.log(err);
      }
    };

    getPropertyList();
  }, []);
  // console.log(filterPropertyList);
  // console.log(propertyList);
  // console.log(locationSearch);

  useEffect(() => {
    console.log(locationSearch);
    const filterProperty = filterPropertyList.filter((item) =>
      item.location.toLowerCase().includes(locationSearch.toLowerCase())
    );

    setPropertyList(filterProperty);
  }, [filterPropertyList, locationSearch]);

  return (
    <div>
      <>
        <div className="text-center p-10">
          <div className="flex items-center justify-center">
          <h2 className=" text-4xl mr-2 font-semibold -mt-2">
                100<span className=" text-sky-500">acres</span>
              </h2>
          <span className="font-bold text-4xl mb-2"> Exclusives</span>
          </div>
         
          <h1 className="text-1xl font-semibold">
            Listings we think you’ll love.
          </h1>
        </div>
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {propertyList.map((item) => (
            <div
              className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              key={item._id}
            >
              <Link to={`/propertyDetail/${item._id}`}>
                <img
                  src={item.propertyImage}
                  alt="Product"
                  className="h-80 w-80 object-cover rounded-t-xl"
                />
                <div className="px-1 py-3 w-80">
                  <p className="text-lg text-center font-bold text-black truncate block capitalize">
                    {item.location}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      {`Rs.${item.price}`}
                    </p>
                    <div className="ml-auto flex  w-full justify-end items-center gap-1">
                      <p>{item.bedrooms} Beds</p>
                      <p className=" border-l-2 border-red-500 px-1">
                        {item.bathrooms} Bath
                      </p>
                      <p className=" border-l-2 border-red-500 px-1">
                        {item.area} Sq. ft.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {isLoggedIn && !isAuthenticated && (addedToWishlist[item._id] ? (
                <p className="px-2 py-2 bg-green-400 text-white text-center">
                  Added to Wishlist
                </p>
              ) : (
                <button
                  className="border px-2 py-2 bg-sky-400"
                  onClick={() => handleWishlist(item)}
                >
                  Add to Wishlist
                </button>
              ))}
            </div>
          ))}
        </section>
      </>
    </div>
  );
};

export default PropertyList;
