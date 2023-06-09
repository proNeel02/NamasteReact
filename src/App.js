import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import NavigationBar from "./Components/NavigationBar.js";
import Body from "./Components/Body.jsx";


const AppLayOut = () => {
  return (
    <>
      <NavigationBar />
      <Body />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);