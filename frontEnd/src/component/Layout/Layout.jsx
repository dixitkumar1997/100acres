import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AuthContext} from "../../Context/auth";

const Layout = ({ children }) => {
  const {isLoggedIn,handleLogout}=useContext(AuthContext);
  return (

   <>
   <div>
    {/* <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> */}
    <main>
     {children}
    </main>
     <Footer/>
   </div>
   </>
  ) 
};

export default Layout;
