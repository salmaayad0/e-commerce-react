import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";


export default function Layout() {
  return (
    <>
      <div>
        <Navbar />
        <div style={{ marginTop: "45px" }}>
        <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
