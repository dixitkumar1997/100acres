// // import React, { useContext } from "react";
// // import { Link } from "react-router-dom";
// // import { AuthContext } from "../../Context/auth";

// // const Navbar = () => {
// //   const { isLoggedIn, handleLogout, userData, isRegistered } =
// //     useContext(AuthContext);

// //   //  const [auth, setAuth] = useAuth();

// //   //  logout functionality
// //   //  const handleLogout = () => {
// //   //   setAuth({...auth, user:null, token:""})
// //   //  localStorage.removeItem("auth")
// //   //  }

// //   return (
// //     <div>
// //       <header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
// //         <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
// //           <div className="relative flex items-center">
// //             <Link to="/">
// //               <h2 className=" text-3xl font-semibold">
// //                 100<span className=" text-sky-500">acres</span>
// //               </h2>
// //             </Link>
// //           </div>

// //           <div className="flex-grow" />
// //           <div className="hidden items-center justify-center gap-6 md:flex">
// //             {isLoggedIn && userData && (
// //               <Link
// //                 to="/"
// //                 className="font-dm text-sm font-medium text-slate-700"
// //               >
// //                 {(userData.firstName).toUpperCase()}
// //               </Link>
// //             )}
// //             {!isLoggedIn && (
// //               <Link
// //                 to="/login"
// //                 className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
// //               >
// //                 LOGIN
// //               </Link>
// //             )}
// //             {isRegistered || isLoggedIn ? (
// //               <Link
// //               to="/admin/dashboard"
// //               className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
// //             >
// //               {(userData.userType).toUpperCase()}
// //             </Link>

// //             ) : (
// //               <Link
// //                 to="/register"
// //                 className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
// //               >
// //                 REGISTER
// //               </Link>
// //             )}
// //             {isLoggedIn && userData && (
// //               <Link
// //                 to="/"
// //                 onClick={handleLogout}
// //                 className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
// //               >
// //                 LOGOUT
// //               </Link>
// //             )}
// //           </div>
// //           <div className="relative flex items-center justify-center md:hidden">
// //             <button type="button">
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 strokeWidth="1.5"
// //                 stroke="currentColor"
// //                 aria-hidden="true"
// //                 className="h-6 w-auto text-slate-900"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
// //                 />
// //               </svg>
// //             </button>
// //           </div>
// //         </nav>
// //       </header>
// //     </div>
// //   );
// // };

// // export default Navbar;

// import React, { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../Context/auth";

// const Navbar = () => {
//   const { isLoggedIn, handleLogout, userData, isRegistered } =
//     useContext(AuthContext);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 500) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-200 ease-in-out ${
//         scrolled ? "bg-white shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
//         <div className="relative flex items-center">
//           <Link to="/">
//             <h2
//               className={`text-3xl font-semibold ${
//                 scrolled ? "text-black" : "text-white"
//               }`}
//             >
//               100<span className="text-sky-500">acres</span>
//             </h2>
//           </Link>
//         </div>

//         <div className="flex-grow" />
//         <div className="hidden items-center justify-center gap-6 md:flex">
//           {isLoggedIn && userData && (
//             <span className="rounded-md bg-gradient-to-br from-red-500 to-red-600 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
//               {userData.firstName.toUpperCase()}
//             </span>
//           )}
//           {!isLoggedIn && (
//             <Link
//               to="/login"
//               className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
//             >
//               LOGIN
//             </Link>
//           )}
//           {isRegistered ||
//           isLoggedIn ? //   className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]" //   to="/admin/dashboard" // <Link
//           // >
//           //   {userData.userType.toUpperCase()}
//           //   {/* null */}
//           // </Link>
//           null : (
//             <Link
//               to="/register"
//               className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
//             >
//               REGISTER
//             </Link>
//           )}
//           {isLoggedIn && (
//             <button
//               onClick={handleLogout}
//               className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
//             >
//               LOGOUT
//             </button>
//           )}

//           {isLoggedIn && (
//             <Link
//               className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03] "
//               to="/wishlist"
//             >
//               <button>WISHLIST</button>
//             </Link>
//           )}
//         </div>

//         <div className="relative flex items-center justify-center md:hidden">
//           <button type="button">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               aria-hidden="true"
//               className={`h-6 w-auto ${scrolled ? "text-black" : "text-white"}`}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//               />
//             </svg>
//             <span className="sr-only">Open menu</span>
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/auth";

const Navbar = () => {
  const { isLoggedIn, handleLogout, userData, isRegistered,isAuthenticated } =
    useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 ease-in-out ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
        <div className="relative flex items-center">
          <Link to="/">
            <h2
              className={`text-3xl font-semibold ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              100<span className="text-sky-500">acres</span>
            </h2>
          </Link>
        </div>

        <div className="flex-grow" />
        <div className="hidden items-center justify-center gap-6 md:flex">
          {isLoggedIn && userData && (
            <span className="rounded-md bg-gradient-to-br from-red-500 to-red-600 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
              {userData.firstName.toUpperCase()}
            </span>
          )}
          {!isLoggedIn && (
            <Link
              to="/login"
              className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
            >
              LOGIN
            </Link>
          )}
          {isRegistered || isLoggedIn ? null : (
            <Link
              to="/register"
              className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
            >
              REGISTER
            </Link>
          )}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
            >
              LOGOUT
            </button>
          )}

          {isLoggedIn && !isAuthenticated && (
            <Link
              className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03] "
              to="/wishlist"
            >
              <button>WISHLIST</button>
            </Link>
          )}
        </div>
        {!menuOpen && (
          <div className="relative flex items-center justify-center md:hidden">
            <button type="button" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className={`h-6 w-auto ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        )}
      </nav>
      {menuOpen && (
        <div className="md:hidden shadow-lg fixed right-0 top-0 h-full w-32 bg-white flex flex-col justify-between items-center">
          <div className="flex flex-col items-start p-4 gap-4">



          <button
              type="button"
              onClick={toggleMenu}
              className="relative right-0 left-20 mb-6 bg-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-red-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>


            {isLoggedIn && userData && (
              <span className="relative left-3 text-center rounded-md bg-gradient-to-br from-red-500 to-red-600 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                {userData.firstName.toUpperCase()}
              </span>
            )}
            {!isLoggedIn && (
              <Link
                to="/login"
                className="relative left-[9px] text-center rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
              >
                LOGIN
              </Link>
            )}
            {isRegistered || isLoggedIn ? null : (
              <Link
                to="/register"
                className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
              >
                REGISTER
              </Link>
            )}

            {isLoggedIn && (
              <Link
                className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03] "
                to="/wishlist"
              >
                <button>WISHLIST</button>
              </Link>
            )}
            </div>
            <div className="p-12 gap-4">
              {isLoggedIn && (
                <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                  className="rounded-md bg-gradient-to-br from-cyan-500 to-sky-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-sky-500/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
                >
                  LOGOUT
                </button>
              )}
            </div>
          
        </div>
      )}
    </header>
  );
};

export default Navbar;
