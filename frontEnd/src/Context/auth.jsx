import { useState, createContext, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ firstName: "" , userType: ""});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [properties, setProperties] = useState([]);
  const [locationSearch, setLocationSearch] = useState("");
  const [wishlist,setWishlist]=useState([])

  // Check for authentication tokens in cookies on component mount

  const checkForTokensInCookies = () => {
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");

    if (accessToken && refreshToken) {
      // Set authentication state if tokens are found
      setIsLoggedIn(true);
      // Set user data if needed
      // setUserData(userDataFromCookies);
      const storedUserData = Cookies.get("userData");
      // console.log(JSON.parse(storedUserData))
      if (storedUserData) {
        const userDataObject = typeof storedUserData === 'string' ? JSON.parse(storedUserData) : storedUserData;
      setUserData(userDataObject)
      }
      

      // setIsAuthenticated(true);

      console.log("Tokens found in cookies, user is logged in");
    } else {
      console.log("No tokens found in cookies, user is logged out");
    }
  };

  useEffect(() => {
    checkForTokensInCookies();
  }, []);




 

  const handleSearch = (searchValue) => {
    setLocationSearch(searchValue);
  };

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserData(user);

    Cookies.set("userData", JSON.stringify(user), { expires: 1 });
    console.log(Cookies.get());
    setIsRegistered(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData({ userType: "", firstName: "" });
    setIsAuthenticated(false);
    // Clear tokens from cookies
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  };

  const handleRegister = () => {
    setIsRegistered(true);
  };

  const handleSubmitProperty = (newProperty) => {
    setProperties((prevProperties) => [...prevProperties, newProperty]);
  };

  const handleAuthentication = (user) => {
    console.log(user)
    if (user.userType === "seller") {
      setIsAuthenticated(true);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userData,
        handleLogin,
        handleLogout,
        isAuthenticated,
        handleRegister,
        isRegistered,
        handleAuthentication,
        properties,
        handleSubmitProperty,
        handleSearch,
        locationSearch,
        wishlist,
        setWishlist
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
