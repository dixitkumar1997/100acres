import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./component/Navbar/Navbar";

import DashboardLayout from "./component/SellerDashboard/DashboardLayout";
import ManageProperty from "./component/SellerDashboard/ManageProperty";
import EditProperty from "./component/SellerDashboard/EditProperty";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./component/SellerDashboard/Dashboard";
import SellerPropertyList from "./component/SellerDashboard/SellerPropertyList";
import PropertyDetail from "./component/Buyer/PropertyDetail";
import Footer from "./component/Footer/Footer";
import {Toaster } from 'react-hot-toast';
import { useState } from "react";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute.js";
import SellerHome from "./component/SellerDashboard/SellerHome.jsx";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import Wishlist from "./component/Wishlist/Wishlist.jsx";

function App() {

 



  return (
    <>
  
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/propertyDetail/:id" element={<PropertyDetail/>}/>
      <Route
              path="/admin/dashboard"
              element={
                <PrivateRoute>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/manageProperty"
              element={
                <PrivateRoute>
                <DashboardLayout>
                  <ManageProperty />
                </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/sellerPropertyList"
              element={
                <PrivateRoute>
                <DashboardLayout>
                  <SellerPropertyList />
                </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/sellerHome"
              element={
                <DashboardLayout>
                  <SellerHome />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/updateProperty"
              element={
                <DashboardLayout>
                  <EditProperty />
                </DashboardLayout>
              }
            />
     </Routes>
     <Toaster />
    </>
  );
}

export default App;
