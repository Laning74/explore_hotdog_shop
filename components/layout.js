import React from "react";
import { Footer } from "./footer";
import Navbar from "./navbar";
// import Card from "./card";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Card /> */}
      <Footer />
    </>
  );
};

export default MainLayout;
