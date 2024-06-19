import React, { useContext } from "react";
import Hero from "../component/Hero/Hero";
import PropertyList from "../component/Buyer/PropertyList";
import Layout from "../component/Layout/Layout";
import { AuthContext } from "../Context/auth";

const Home = () => {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);
  return (
    <Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout}>
      <Hero />
      <PropertyList />
    </Layout>
  );
};

export default Home;
