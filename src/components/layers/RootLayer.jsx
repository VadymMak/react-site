import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";

const RootLayer = () => {
  return (
    <header>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </header>
  );
};

export default RootLayer;
