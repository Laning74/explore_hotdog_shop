import React from "react";
import { Footer } from "./footer";
import Navbar from "./navbar";

import Map from "../components/Map";
// import { Card } from "./card";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Card /> */}
      <Map />
      <Footer />
    </>
  );
};

export default MainLayout;
