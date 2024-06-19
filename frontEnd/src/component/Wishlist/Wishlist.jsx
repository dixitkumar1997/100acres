// import React, { useContext } from "react";
// import { AuthContext } from "../../Context/auth";

// const Wishlist = () => {
//   const { wishlist } = useContext(AuthContext);

//   console.log("final", wishlist);

//   // console.log("main", wishlist);

//   const itemData = JSON.parse(localStorage.getItem("propertyWishlist"));
//   console.log("local", itemData);

//   return (
//     <div>
//       <section className="py-1 bg-blueGray-50">
//         <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
//           <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
//             <div className="block w-full overflow-x-auto">
//               <table className="items-center bg-transparent w-full border-collapse ">
//                 <thead>
//                   <tr>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       Property Image
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       Location
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       Price(Rs.)
//                     </th>
//                   </tr>
//                 </thead>
//                 {itemData.map((wishlistItem) => (
//                   <tbody key={wishlistItem.id}>
//                     <tr>
//                       <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
//                         <img
//                           src={wishlistItem.propertyImage}
//                           alt=""
//                           className="max-w-[100px] max-h-[100px]"
//                         />
//                       </th>
//                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
//                         {wishlistItem.location}
//                       </td>
//                       <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                         {wishlistItem.price}
//                       </td>
//                     </tr>
//                   </tbody>
//                 ))}
//               </table>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Wishlist;





import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/auth";

const Wishlist = () => {
  const { wishlist } = useContext(AuthContext);
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("propertyWishlist"));
    if (storedWishlist) {
      setItemData(storedWishlist);
    }
  }, []);

  const handleDelete = (id) => {
    console.log(`Deleting item with id: ${id}`);
    const updatedWishlist = itemData.filter((item) => item._id !== id);
    setItemData(updatedWishlist);
    localStorage.setItem("propertyWishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Property Image
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Location
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Price(Rs.)
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {itemData.map((wishlistItem) => {
                    console.log(wishlistItem);  // Log each wishlist item
                    return (
                      <tr key={wishlistItem.id}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                          <img
                            src={wishlistItem.propertyImage}
                            alt=""
                            className="max-w-[100px] max-h-[100px]"
                          />
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          {wishlistItem.location}
                        </td>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {wishlistItem.price}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <button
                            onClick={() => handleDelete(wishlistItem._id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            &#10005;
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
