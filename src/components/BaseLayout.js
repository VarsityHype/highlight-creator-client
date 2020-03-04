import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";

const BaseLayout = props => {
  return (
    <>
      <AppBar />
      {props.children}
      <Footer />
    </>
  );
};

export default BaseLayout;
