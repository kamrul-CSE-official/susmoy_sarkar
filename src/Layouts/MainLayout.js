import React from "react";
import Navbar from "../Components/Share/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Share/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
